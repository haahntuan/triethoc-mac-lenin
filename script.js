const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const chapterSelect = document.getElementById('chapter-select');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const progressBar = document.getElementById('progress-bar');
const quizContent = document.getElementById('quiz-content');

// Bottom Feedback Bar
const feedbackBar = document.getElementById('bottom-feedback');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Nạp Streak từ localStorage
let streak = parseInt(localStorage.getItem('quiz_streak')) || 0;

// Cập nhật trạng thái màu sắc và hiệu ứng lửa
function updateStreakUI(isLevelUp = false) {
    const fireIcon = document.getElementById('fire-icon');
    const streakCount = document.getElementById('streak-count');
    
    if (streakCount) streakCount.textContent = streak;

    if (!fireIcon) return;

    // Reset lại toàn bộ class màu
    fireIcon.className = '';

    if (streak === 0) {
        fireIcon.classList.add('fire-off');
    } else if (streak >= 20) {
        fireIcon.classList.add('fire-blue');     // Lửa Xanh Dương
    } else if (streak >= 10) {
        fireIcon.classList.add('fire-purple');   // Lửa Tím
    } else {
        fireIcon.classList.add('fire-orange');   // Lửa Cam
    }

    // Nếu vừa lên cấp 10 hoặc 20 -> Kích hoạt animation phóng to đổi màu
    if (isLevelUp) {
        fireIcon.classList.add('level-up-anim');
        setTimeout(() => {
            fireIcon.classList.remove('level-up-anim');
        }, 1500);
    }
}

// Xáo trộn mảng
function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Khởi tạo âm thanh
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    
    if (type === 'correct') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(250, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    } else {
        osc.type = 'sine'; osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        osc.start(); osc.stop(audioCtx.currentTime + 0.05);
    }
}

// Hiệu ứng pháo hoa
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas); resizeCanvas();

class Particle {
    constructor(x, y, color) {
        this.x = x; this.y = y; this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.life = 1.0; this.decay = Math.random() * 0.02 + 0.015;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        this.vy += 0.1;
        this.life -= this.decay;
    }
    draw() {
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fillStyle = this.color;
        ctx.beginPath(); ctx.arc(this.x, this.y, 4, 0, Math.PI * 2); ctx.fill();
    }
}

function shootFireworks() {
    const colors = streak >= 20 ? ['#3b82f6', '#60a5fa', '#93c5fd'] : 
                   streak >= 10 ? ['#a855f7', '#c084fc', '#e879f9'] : 
                   ['#2ecc71', '#f1c40f', '#e74c3c', '#ff7b00'];
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2 + 100;
    for(let i = 0; i < 80; i++) particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
    animateFireworks();
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
        p.update(); p.draw();
        if (p.life <= 0) particles.splice(index, 1);
    });
    if (particles.length > 0) requestAnimationFrame(animateFireworks);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Khởi tạo ứng dụng
function init() {
    updateStreakUI();

    if (typeof bankData !== 'undefined' && bankData.length > 0) {
        chapterSelect.innerHTML = '';
        bankData.forEach((ch, index) => {
            let opt = document.createElement('option');
            opt.value = index; opt.textContent = ch.chapterName;
            chapterSelect.appendChild(opt);
        });
    }
}

document.getElementById('start-btn').addEventListener('click', () => {
    playSound('click');
    
    let sourceQuestions = [];
    if (typeof questions !== 'undefined' && Array.isArray(questions) && questions.length > 0) {
        sourceQuestions = questions;
    } else if (typeof bankData !== 'undefined' && bankData.length > 0) {
        const chapterIndex = chapterSelect.value || 0;
        sourceQuestions = bankData[chapterIndex]?.questions || [];
    }

    if (sourceQuestions.length === 0) {
        alert("Không tìm thấy dữ liệu câu hỏi!");
        return;
    }

    let numQuestions = 10;
    if (chapterSelect) {
        const selectedText = chapterSelect.options[chapterSelect.selectedIndex]?.text || chapterSelect.value;
        const match = selectedText.match(/\d+/);
        if (match) numQuestions = parseInt(match[0]);
    }

    const pickedQuestions = shuffleArray(sourceQuestions).slice(0, numQuestions);

    currentQuestions = pickedQuestions.map(q => {
        const origAnswerIdx = q.answer !== undefined ? q.answer : 0;
        const correctAnswerText = q.options[origAnswerIdx];
        
        const shuffledOptions = shuffleArray(q.options);
        const newAnswerIdx = shuffledOptions.indexOf(correctAnswerText);

        return {
            question: q.question,
            options: shuffledOptions,
            answer: newAnswerIdx
        };
    });

    currentQuestionIndex = 0; 
    score = 0;
    
    homeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

// Nút Quay về trang chủ
const backBtn = document.getElementById('back-btn');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        playSound('click');
        quizScreen.classList.add('fade-out');
        
        setTimeout(() => {
            quizScreen.classList.remove('active', 'fade-out');
            feedbackBar.classList.add('hidden');
            feedbackBar.classList.remove('correct-theme', 'wrong-theme');
            homeScreen.classList.add('active');
        }, 200);
    });
}

function loadQuestion() {
    feedbackBar.classList.add('hidden');
    quizContent.classList.remove('flip-out');
    quizContent.classList.add('flip-in');
    
    const currentQ = currentQuestions[currentQuestionIndex];
    const cleanQuestionText = currentQ.question.replace(/^Câu\s*\d+[\.:]\s*/i, '');
    questionText.textContent = cleanQuestionText;
    optionsContainer.innerHTML = '';
    
    progressBar.style.width = ((currentQuestionIndex) / currentQuestions.length) * 100 + '%';

    currentQ.options.forEach((optionText, index) => {
        const cleanText = optionText.replace(/^[A-D][\.:]\s*/i, '');
        
        const div = document.createElement('div');
        div.classList.add('option');
        div.innerHTML = `<div class="radio-circle"></div><span>${cleanText}</span>`;
        div.addEventListener('click', () => checkAnswer(div, index, currentQ.answer));
        optionsContainer.appendChild(div);
    });

    setTimeout(() => { quizContent.classList.remove('flip-in'); }, 500);
}

function checkAnswer(selectedDiv, selectedIndex, correctIndex) {
    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.add('disabled'));

    feedbackBar.classList.remove('hidden', 'correct-theme', 'wrong-theme');

    if (selectedIndex === correctIndex) {
        selectedDiv.classList.add('correct');
        playSound('correct');
        shootFireworks();
        score++;
        
        feedbackBar.classList.add('correct-theme');
        feedbackIcon.textContent = '🎉';
        feedbackText.textContent = 'Tuyệt vời!';
    } else {
        selectedDiv.classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
        playSound('wrong');
        
        feedbackBar.classList.add('wrong-theme');
        feedbackIcon.textContent = '❌';
        feedbackText.textContent = 'Sai rồi!';
    }
}

nextBtn.addEventListener('click', () => {
    playSound('click');
    quizContent.classList.add('flip-out'); 
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 400); 
});

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    feedbackBar.classList.add('hidden');
    
    const finalScore = (score / currentQuestions.length) * 10;
    document.getElementById('score-text').textContent = finalScore.toFixed(1);
    
    let isLevelUp = false;

    if (score === currentQuestions.length && currentQuestions.length > 0) {
        streak++;
        if (streak === 10 || streak === 20) {
            isLevelUp = true;
        }
    } else {
        streak = 0;
    }
    
    localStorage.setItem('quiz_streak', streak);
    updateStreakUI(isLevelUp);

    // Cập nhật kỷ lục Streak cao nhất
    if (streak > bestStreak) {
        bestStreak = streak;
        syncScoreToCloud(bestStreak);
    }

    let feedbackMsg = `Bạn làm đúng ${score}/${currentQuestions.length} câu.`;
    if (isLevelUp) {
        feedbackMsg += streak === 10 ? " 🔥 ĐÃ NÂNG CẤP LỬA TÍM!" : " ⚡ ĐÃ NÂNG CẤP LỬA XANH DƯƠNG!";
        shootFireworks();
    }
    document.getElementById('feedback-result').textContent = feedbackMsg;
}

document.getElementById('restart-btn').addEventListener('click', () => {
    playSound('click');
    resultScreen.classList.remove('active');
    homeScreen.classList.add('active');
});

init();

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
        e.preventDefault();
    }
});

// === HIỆU ỨNG SIGNAL PARTICLES ===
(function initSignalParticles() {
    const canvas = document.getElementById('galaxy-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, dpr;
    let cols, rows;
    
    const config = {
        gridSpacing: 16,
        dotSize: 2.2,
        speed: 0.3,
        baseHue: 200,
        saturation: 84,
        brightness: 1.19
    };

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        
        ctx.scale(dpr, dpr);

        cols = Math.ceil(width / config.gridSpacing) + 1;
        rows = Math.ceil(height / config.gridSpacing) + 1;
    }

    window.addEventListener('resize', resize);
    resize();

    let time = 0;

    function drawSignalField() {
        ctx.fillStyle = '#05070a';
        ctx.fillRect(0, 0, width, height);

        time += 0.018 * config.speed;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = i * config.gridSpacing;
                const y = j * config.gridSpacing;

                const u = x / width;
                const v = y / height;

                const diag = u - v;

                const wave1 = Math.sin((diag * 4.5) + time * 2.2);
                const wave2 = Math.cos((u * 3 + v * 3) - time * 1.5);
                
                let signal = Math.pow(Math.max(0, (wave1 + wave2 * 0.5) / 1.5), 3);

                const pseudoNoise = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
                const randomOffset = (pseudoNoise - Math.floor(pseudoNoise));
                
                if (randomOffset > 0.88) {
                    signal += 0.3;
                }

                const activeFactor = Math.min(1, signal);
                const currentHue = (config.baseHue + diag * 60 + activeFactor * 40) % 360;
                
                if (activeFactor > 0.15) {
                    const alpha = Math.min(1, activeFactor * 0.95 * config.brightness);
                    const lightness = 45 + activeFactor * 45;
                    
                    ctx.fillStyle = `hsla(${currentHue}, ${config.saturation}%, ${lightness}%, ${alpha})`;
                    
                    const size = config.dotSize + activeFactor * 1.5;
                    ctx.fillRect(x - size / 2, y - size / 2, size, size);

                    if (activeFactor > 0.7) {
                        ctx.fillStyle = `hsla(${currentHue}, ${config.saturation}%, 70%, ${alpha * 0.25})`;
                        ctx.fillRect(x - size, y - size, size * 2, size * 2);
                    }
                } else {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
                    ctx.fillRect(x - config.dotSize / 2, y - config.dotSize / 2, config.dotSize, config.dotSize);
                }
            }
        }

        requestAnimationFrame(drawSignalField);
    }

    drawSignalField();
})();

// ==========================================================================
// KẾT NỐI FIREBASE & XỬ LÝ USER / BẢNG XẾP HẠNG REALTIME
// ==========================================================================

let currentUser = JSON.parse(localStorage.getItem('quiz_user')) || null;
let bestStreak = parseInt(localStorage.getItem('quiz_best_streak')) || 0;
let currentAuthMode = 'login'; // Mặc định là 'login'

// 1. Khởi tạo Firebase
(function initFirebaseApp() {
    const firebaseConfig = {
      apiKey: "AIzaSyAUfblLs1VxJdDRBEdG61vLyNQuyc4rT3I",
      authDomain: "quiz-triet-hoc.firebaseapp.com",
      projectId: "quiz-triet-hoc",
      storageBucket: "quiz-triet-hoc.firebasestorage.app",
      messagingSenderId: "908580179253",
      appId: "1:908580179253:web:3c3f8f7774e00c43b8107c",
      measurementId: "G-MPEQNB0SVX"
    };

    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        window.db = firebase.firestore();
    } else {
        console.warn("Chưa tải được thư viện Firebase SDK!");
    }
})();

// 2. Cập nhật UI Profile
function updateProfileUI() {
    const headerAvatar = document.getElementById('header-avatar');
    const sheetAvatar = document.getElementById('sheet-avatar');
    const sheetHandle = document.getElementById('sheet-handle'); // Thêm biến này
    const sheetUsername = document.getElementById('sheet-username');
    const statStreak = document.getElementById('stat-streak');
    const statBest = document.getElementById('stat-best');

    if (currentUser) {
        if (headerAvatar) headerAvatar.src = currentUser.avatar;
        if (sheetAvatar) sheetAvatar.src = currentUser.avatar;
        if (sheetHandle) sheetHandle.textContent = `@${currentUser.username}`; // Cập nhật @username
        if (sheetUsername) sheetUsername.textContent = currentUser.displayName || currentUser.username;
    } else {
        const defaultAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest';
        if (headerAvatar) headerAvatar.src = defaultAvatar;
        if (sheetAvatar) sheetAvatar.src = defaultAvatar;
        if (sheetHandle) sheetHandle.textContent = '@guest'; // Mặc định khi chưa đăng nhập
        if (sheetUsername) sheetUsername.textContent = 'Khách (Chưa đăng nhập)';
    }

    if (statStreak) statStreak.textContent = `${streak} 🔥`;
    if (statBest) statBest.textContent = `${bestStreak} 🏆`;
}


// 3. Đóng tất cả Sheets/Modals
function closeAllSheets() {
    const overlay = document.getElementById('overlay');
    const authSheet = document.getElementById('auth-sheet');
    const profileSheet = document.getElementById('profile-sheet');
    const leaderboardModal = document.getElementById('leaderboard-modal');

    if (overlay) overlay.classList.add('hidden');
    if (authSheet) {
        authSheet.classList.add('hidden');
        authSheet.classList.remove('keyboard-active');
        authSheet.style.bottom = '';
    }
    if (profileSheet) {
        profileSheet.classList.add('hidden');
        profileSheet.classList.remove('keyboard-active');
        profileSheet.style.bottom = '';
    }
    if (leaderboardModal) leaderboardModal.classList.add('hidden');
}

const overlayElem = document.getElementById('overlay');
if (overlayElem) {
    overlayElem.addEventListener('click', closeAllSheets);
}

document.querySelectorAll('.close-sheet-btn').forEach(btn => {
    btn.addEventListener('click', closeAllSheets);
});

// 4. Click nút Profile (Avatar góc trên)
const btnProfileElem = document.getElementById('btn-profile');
if (btnProfileElem) {
    btnProfileElem.addEventListener('click', () => {
        if (typeof playSound === 'function') playSound('click');
        const overlay = document.getElementById('overlay');
        const authSheet = document.getElementById('auth-sheet');
        const profileSheet = document.getElementById('profile-sheet');

        if (overlay) overlay.classList.remove('hidden');
        if (currentUser) {
            updateProfileUI();
            if (profileSheet) profileSheet.classList.remove('hidden');
        } else {
            if (authSheet) authSheet.classList.remove('hidden');
        }
    });
}

// === XỬ LÝ TAB ĐĂNG NHẬP / ĐĂNG KÝ VÀ TỰ ĐỘNG ĐẨY SHEET KHI MỞ BÀN PHÍM ===
const authTabLogin = document.getElementById('auth-tab-login');
const authTabRegister = document.getElementById('auth-tab-register');
const authSubtitle = document.getElementById('auth-subtitle');
const loginBtnElem = document.getElementById('login-btn');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');

if (authTabLogin && authTabRegister) {
    authTabLogin.addEventListener('click', () => {
        currentAuthMode = 'login';
        authTabLogin.classList.add('active');
        authTabRegister.classList.remove('active');
        if (authSubtitle) authSubtitle.textContent = 'Đăng nhập tài khoản để lưu điểm lên BXH';
        if (loginBtnElem) loginBtnElem.textContent = 'Đăng Nhập';
    });

    authTabRegister.addEventListener('click', () => {
        currentAuthMode = 'register';
        authTabRegister.classList.add('active');
        authTabLogin.classList.remove('active');
        if (authSubtitle) authSubtitle.textContent = 'Đăng ký tài khoản để lưu điểm lên BXH';
        if (loginBtnElem) loginBtnElem.textContent = 'Đăng Ký';
    });
}

// Hàm lọc bỏ ký tự có dấu và khoảng trắng
function sanitizeAuthInput(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

// Gắn sự kiện cho tất cả các input field trong bottom sheet
const allInputs = document.querySelectorAll('.bottom-sheet .input-field');
allInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (e.target.id === 'username-input' || e.target.id === 'password-input') {
            e.target.value = sanitizeAuthInput(e.target.value);
        }
    });

    // Khi người dùng chạm vào ô nhập trên điện thoại, đẩy khung lên trên bàn phím ngay lập tức
    input.addEventListener('focus', () => {
        const sheet = input.closest('.bottom-sheet');
        if (sheet) {
            sheet.classList.add('keyboard-active');
            setTimeout(() => {
                input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    });

    input.addEventListener('blur', () => {
        const sheet = input.closest('.bottom-sheet');
        if (sheet) {
            sheet.classList.remove('keyboard-active');
            sheet.style.bottom = '';
        }
    });
});

// Lắng nghe sự thay đổi kích thước Visual Viewport thực tế khi bàn phím ảo đẩy lên (Android / iOS)
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        const activeSheet = document.querySelector('.bottom-sheet:not(.hidden)');
        if (!activeSheet) return;

        const keyboardHeight = window.innerHeight - window.visualViewport.height;
        if (keyboardHeight > 120) {
            activeSheet.classList.add('keyboard-active');
            if (keyboardHeight > 200) {
                activeSheet.style.bottom = `${keyboardHeight - 20}px`;
            }
        } else {
            activeSheet.classList.remove('keyboard-active');
            activeSheet.style.bottom = '';
        }
    });
}

// 5. Xử lý Đăng Nhập / Đăng Ký riêng biệt
if (loginBtnElem) {
    loginBtnElem.addEventListener('click', async () => {
        const userVal = usernameInput ? usernameInput.value.trim() : '';
        const passVal = passwordInput ? passwordInput.value.trim() : '';

        if (!userVal) {
            alert("Vui lòng nhập tên tài khoản!");
            return;
        }

        if (!passVal) {
            alert("Vui lòng nhập mật khẩu!");
            return;
        }

        const validRegex = /^[a-zA-Z0-9]+$/;
        if (!validRegex.test(userVal)) {
            alert("Tài khoản không được chứa dấu cách, chữ có dấu hoặc ký tự đặc biệt!");
            return;
        }

        if (!validRegex.test(passVal)) {
            alert("Mật khẩu không được chứa dấu cách, chữ có dấu hoặc ký tự đặc biệt!");
            return;
        }

        if (!window.db) {
            alert("Chưa kết nối được Firebase. Vui lòng kiểm tra lại kết nối mạng!");
            return;
        }

        const docId = userVal.toLowerCase();
        const userDocRef = window.db.collection('users').doc(docId);

        try {
            const doc = await userDocRef.get();

            if (currentAuthMode === 'login') {
                // --- XỬ LÝ ĐĂNG NHẬP ---
                if (!doc.exists) {
                    alert("Tài khoản không tồn tại! Vui lòng chuyển sang tab Đăng Ký.");
                    return;
                }

                const userData = doc.data();
                if (userData.password && userData.password !== passVal) {
                    alert("Mật khẩu không chính xác!");
                    return;
                }

                currentUser = userData;
                if (!userData.password) {
                    currentUser.password = passVal;
                    await userDocRef.update({ password: passVal });
                }
                bestStreak = currentUser.bestStreak || 0;
                alert("Đăng nhập thành công!");

            } else {
                // --- XỬ LÝ ĐĂNG KÝ ---
                if (doc.exists) {
                    alert("Tên tài khoản đã tồn tại! Vui lòng chọn tên khác hoặc chuyển sang tab Đăng Nhập.");
                    return;
                }

                currentUser = {
                    username: docId,
                    displayName: userVal,
                    password: passVal,
                    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userVal)}`,
                    bestStreak: bestStreak || 0
                };

                await userDocRef.set(currentUser);
                alert("Đăng ký tài khoản thành công!");
            }

            localStorage.setItem('quiz_user', JSON.stringify(currentUser));
            localStorage.setItem('quiz_best_streak', bestStreak);
            updateProfileUI();
            closeAllSheets();

            if (usernameInput) usernameInput.value = '';
            if (passwordInput) passwordInput.value = '';

        } catch (err) {
            console.error("Lỗi xác thực Firebase:", err);
            alert("Không thể kết nối Server: " + err.message);
        }
    });
}

// 6. Đồng bộ kỷ lục lên Cloud
async function syncScoreToCloud(newBestStreak) {
    bestStreak = newBestStreak;
    localStorage.setItem('quiz_best_streak', bestStreak);

    if (!currentUser) return;
    currentUser.bestStreak = bestStreak;
    localStorage.setItem('quiz_user', JSON.stringify(currentUser));

    if (window.db) {
        try {
            await window.db.collection('users').doc(currentUser.username).update({
                bestStreak: bestStreak
            });
        } catch (err) {
            console.error("Lỗi đồng bộ điểm:", err);
        }
    }
}

// 7. Đổi Avatar
const avatarClickZoneElem = document.getElementById('avatar-click-zone');
if (avatarClickZoneElem) {
    avatarClickZoneElem.addEventListener('click', () => {
        const fileInput = document.getElementById('avatar-upload');
        if (fileInput) fileInput.click();
    });
}

const avatarUploadElem = document.getElementById('avatar-upload');
if (avatarUploadElem) {
    avatarUploadElem.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && currentUser) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                currentUser.avatar = event.target.result;
                localStorage.setItem('quiz_user', JSON.stringify(currentUser));
                updateProfileUI();
                if (window.db) {
                    await window.db.collection('users').doc(currentUser.username).update({ avatar: currentUser.avatar });
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

// 8. Đổi Tên Hiển Thị
const saveNameBtnElem = document.getElementById('save-name-btn');
if (saveNameBtnElem) {
    saveNameBtnElem.addEventListener('click', async () => {
        const nameInput = document.getElementById('change-name-input');
        if (!nameInput) return;
        const newName = nameInput.value.trim();
        if (newName && currentUser) {
            currentUser.displayName = newName;
            localStorage.setItem('quiz_user', JSON.stringify(currentUser));
            nameInput.value = '';
            updateProfileUI();
            if (window.db) {
                await window.db.collection('users').doc(currentUser.username).update({ displayName: newName });
            }
            alert("Đã đổi tên thành công!");
        }
    });
}

// 9. Đăng xuất
const logoutBtnElem = document.getElementById('logout-btn');
if (logoutBtnElem) {
    logoutBtnElem.addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('quiz_user');
        updateProfileUI();
        closeAllSheets();
    });
}

// 10. Click nút Cúp mở Bảng xếp hạng Realtime
const btnLeaderboardElem = document.getElementById('btn-leaderboard');
if (btnLeaderboardElem) {
    btnLeaderboardElem.addEventListener('click', () => {
        if (typeof playSound === 'function') playSound('click');
        const overlay = document.getElementById('overlay');
        const leaderboardModal = document.getElementById('leaderboard-modal');
        if (overlay) overlay.classList.remove('hidden');
        if (leaderboardModal) leaderboardModal.classList.remove('hidden');
        fetchRealtimeLeaderboard();
    });
}

document.querySelectorAll('.rank-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.rank-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.rank-tab-content').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        const targetTab = document.getElementById(e.target.dataset.tab);
        if (targetTab) targetTab.classList.add('active');
    });
});

function fetchRealtimeLeaderboard() {
    const streakContainer = document.getElementById('streak-rank-list');
    if (!streakContainer) return;

    streakContainer.innerHTML = '<p style="text-align:center; color:#888; padding:15px;">Đang tải Bảng Xếp Hạng Online...</p>';

    if (!window.db) {
        streakContainer.innerHTML = '<p style="text-align:center; color:#ef4444; padding:15px;">Chưa kết nối được Firebase.</p>';
        return;
    }

    // Lọc chỉ những tài khoản có bestStreak từ 1 trở lên
    window.db.collection('users')
      .where('bestStreak', '>=', 1)
      .orderBy('bestStreak', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
          streakContainer.innerHTML = '';
          if (snapshot.empty) {
              streakContainer.innerHTML = '<p style="text-align:center; color:#888; padding:15px;">Chưa có ai đạt từ 1 🔥 trở lên!</p>';
              return;
          }

          let rank = 1;
          snapshot.forEach((doc) => {
              const data = doc.data();
              const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;

              // 1. Kiểm tra xem dòng này có phải của bản thân hay không
              const isMe = currentUser && (currentUser.username.toLowerCase() === doc.id.toLowerCase());
              const isMeClass = isMe ? 'is-me' : '';

              // 2. Kiểm tra nếu tài khoản đang đăng nhập có quyền admin
              const isAdmin = currentUser && currentUser.role === 'admin';
              const adminControls = isAdmin ? `
                  <div class="admin-actions">
                      <button onclick="editUserStreak('${doc.id}', ${data.bestStreak || 0})" class="admin-btn" title="Sửa điểm Top">✏️</button>
                      <button onclick="deleteUserFromRank('${doc.id}')" class="admin-btn" title="Xóa khỏi BXH">🗑️</button>
                  </div>
              ` : '';

              const itemHTML = `
                  <div class="rank-item ${isMeClass}">
                      <div class="rank-left">
                          <span class="rank-badge">${medal}</span>
                          <img src="${data.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest'}" class="rank-avatar-img" alt="Avatar">
                          <span class="rank-user-name">${data.displayName || data.username}</span>
                      </div>
                      <div class="rank-right">
                          <span class="rank-val">${data.bestStreak || 0} 🔥</span>
                          ${adminControls}
                      </div>
                  </div>
              `;
              streakContainer.innerHTML += itemHTML;
              rank++;
          });
      }, (error) => {
          console.error("Lỗi BXH:", error);
          streakContainer.innerHTML = '<p style="text-align:center; color:#ef4444;">Không thể kết nối BXH.</p>';
      });
}

// === CÁC HÀM XỬ LÝ QUYỀN ADMIN (SỬA & XÓA TOP) ===
window.editUserStreak = async function(docId, currentStreak) {
    if (!currentUser || currentUser.role !== 'admin') return;
    const newStreak = prompt(`Nhập số Streak mới cho ${docId}:`, currentStreak);
    if (newStreak !== null && !isNaN(newStreak) && newStreak >= 0) {
        try {
            await window.db.collection('users').doc(docId).update({
                bestStreak: parseInt(newStreak)
            });
            alert("Đã cập nhật điểm thành công!");
        } catch (err) {
            alert("Lỗi khi cập nhật: " + err.message);
        }
    }
};

window.deleteUserFromRank = async function(docId) {
    if (!currentUser || currentUser.role !== 'admin') return;
    if (confirm(`Bạn có chắc chắn muốn xóa tài khoản "${docId}" khỏi Bảng Xếp Hạng?`)) {
        try {
            // Đặt bestStreak về 0 để xoá khỏi BXH
            await window.db.collection('users').doc(docId).update({
                bestStreak: 0
            });
            alert("Đã xóa khỏi Bảng Xếp Hạng!");
        } catch (err) {
            alert("Lỗi khi xóa: " + err.message);
        }
    }
};


// Khởi chạy UI ban đầu
updateProfileUI();
