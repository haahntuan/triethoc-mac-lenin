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

// Nạp Streak từ localStorage (F5 không bao giờ mất)
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
    updateStreakUI(); // Load Streak ngay khi mở app hoặc F5

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

// XỬ LÝ NÚT BACK (</) QUAY VỀ TRANG CHỦ CÓ ANIMATION MƯỢT
const backBtn = document.getElementById('back-btn');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        playSound('click');
        
        // Thêm animation mờ dần khi thoát khỏi quiz
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

    // TÍNH TOÁN STREAK VÀ NÂNG CẤP LỬA
    if (score === currentQuestions.length && currentQuestions.length > 0) {
        streak++;
        // Kiểm tra xem có vừa chạm mốc 10 hoặc 20 Streak không
        if (streak === 10 || streak === 20) {
            isLevelUp = true;
        }
    } else {
        streak = 0; // Sai dù 1 câu -> Mất Streak
    }
    
    // Lưu vĩnh viễn vào bộ nhớ trình duyệt
    localStorage.setItem('quiz_streak', streak);
    
    // Cập nhật lại UI Lửa (kèm hiệu ứng level up nếu chạm 10 hoặc 20)
    updateStreakUI(isLevelUp);

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
// Thêm đoạn mã này vào cuối file script.js để chống phím tắt copy/chụp nguồn
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
        e.preventDefault();
    }
});
