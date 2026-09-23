const questions = [
    {
        "question": "Câu 1.1.0,2.1. Điền vào chỗ trống: “Triết học là… về thế giới và vị trí con người, trong\nthế giới đó, là khoa học về sự vận động, phát triển chung nhất của tự nhiên, xã hội và\ntư duy”.",
        "options": [
            "Hệ thống quan điểm duy nhất.",
            "Hệ thống lý luận về quan điểm.",
            "Hệ thống lý luận chung nhất.",
            "Hệ thống luận điểm duy nhất"
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.2.0,2.2. Tư duy triết học bắt đầu từ đâu?",
        "options": [
            "Từ những lực lượng siêu nhiên ở bên ngoài chi phối nhận thức của con người.",
            "Từ những cảm giác, nhận thức chủ quan của con người.",
            "Từ các triết lý, từ sự khôn ngoan, từ tình yêu sự thông thái dần hình thành các hệ thống\nnhững tri thức chung nhất về thế giới.",
            "Tất cả các phương án đều đúng."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.1.0,2.4. Điền vào chỗ trống: “… là khái niệm triết học dùng để chỉ hệ thống các\ntri thức, quan điểm, tình cảm, niềm tin, lý tưởng xác định về thế giới và vị trí con\nngười trong thế giới đó”.",
        "options": [
            "Phương pháp luận.",
            "Thế giới quan.",
            "Chủ nghĩa duy vật.",
            "Chủ nghĩa duy tâm."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.2.0,2.5. Thế giới quan có thể được hiểu một cách ngắn gọn là:",
        "options": [
            "Hệ thống quan điểm của con người về thế giới.",
            "Bức tranh chung về thế giới.",
            "Cảm nhận về thế giới",
            "Nhận thức chung về cuộc đời"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.1.0,2.6. Thế giới quan quy định điều gì trong việc định hướng nhận thức và hoạt\nđộng thực tiễn của con người?",
        "options": [
            "Các nguyên tắc, thái độ, giá trị.",
            "Các nguyên nhân, mức độ và giá trị.",
            "Điều kiện, nền tảng và cách thức.",
            "Điều kiện, giá trị và điều lệ."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.2.0,2.7. Sự hình thành các trường phái khác nhau trong triết học xuất phát từ\nsự khác biệt về:",
        "options": [
            "Trình độ tư duy.",
            "Giai cấp.",
            "Thế giới quan.",
            "Vị trí địa lý."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.2.0,2.9. Thế giới quan và nhân sinh quan có mối quan hệ như thế nào?",
        "options": [
            "Thế giới quan bao hàm cả nhân sinh quan.",
            "Thế giới quan đối lập với nhân sinh quan.",
            "Thế giới quan xuất không có mối liên hệ với nhân sinh quan.",
            "Thế giới quan là một phần của nhân sinh quan."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.1.0,2.10. Triết học có vai trò như thế nào đối với thế giới quan?",
        "options": [
            "Là linh hồn của thế giới quan.",
            "Là nguyên nhân – lý luận của thế giới quan.",
            "Là hạt nhân – lý luận của thế giới quan.",
            "Là vấn đề cơ bản của thế giới quan"
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.2.0,2.11. Triết học là hạt nhân của thế giới quan được hiểu là:",
        "options": [
            "Triết học có chức năng xây dựng thế giới quan.",
            "Thế giới quan là một giai đoạn phát triển cao của triết học.",
            "Không thể xuất hiện thế giới quan nào nếu không có triết học.",
            "Thế giới quan bao trùm cả triết học."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.2.0,2.12. Mối quan hệ giữa tư duy và tồn tại là muốn nói đến mối quan hệ giữa\nhai yếu tố nào?",
        "options": [
            "Những vấn đề không tồn tại và những vấn đề đang tồn tại.",
            "Ý thức và sự tồn vong.",
            "Ý thức và vật chất.",
            "Thế giới ảo và thế giới thực."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.1.0,2.13. Hai mặt trong vấn đề cơ bản của triết học là:",
        "options": [
            "Khả tri luận và bất khả tri luận.",
            "Nhị nguyên luận và nhất nguyên luận.",
            "Hoài nghi luận và ý thức luận.",
            "Bản thể luận và nhận thức luận."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.2.0,2.14. Bản thể luận trong vấn đề cơ bản của triết học được hiểu là:",
        "options": [
            "Bàn luận về bản chất con người.",
            "Bàn về bản chất của triết học",
            "Bàn về yếu tố đầu tiên hình thành và quyết định thế giới.",
            "Bàn về thể thức nghiên cứu của triết học."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.2.0,2.16. Mặt nhận thức luận trong vấn đề cơ bản của triết học giải quyết nội\ndung gì?",
        "options": [
            "Luận giải về nguồn gốc của ý thức.",
            "Xem xét khả năng tư duy trừu tượng của con người về bản thân mình.",
            "Khả năng nhận thức của con người về thế giới.",
            "Bàn luận về nguồn gốc của thế giới."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.2.0,2.17. Việc giải quyết vấn đề cơ bản có ảnh hưởng như thế nào đến sự phát\ntriển của triết học?",
        "options": [
            "Cơ bản giải quyết xong mọi vấn đề của triết học.",
            "Bàn luận những vấn đề của khoa học cơ bản trong triết học.",
            "Giải quyết tranh cãi xem vật chất có trước hay có sau.",
            "Tạo tiền tề cho việc hình thành các trường phái triết học."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.1.0,2.18. Chủ nghĩa duy tâm có những trường phái nào?",
        "options": [
            "Duy tâm thần bí và duy tầm siêu hình.",
            "Duy tâm khách quan và duy tâm chủ quan.",
            "Duy tâm biện chứng và duy tâm siêu hình.",
            "Duy tâm thần thánh và duy tâm con người."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.19. Quan niệm: “Sống chết có mệnh, giàu sang do trời” của Khổng Tử\nphản ánh thế giới quan của trường phái triết học nào?",
        "options": [
            "Duy tâm chủ quan.",
            "Duy tâm khách quan.",
            "Duy vật siêu hình.",
            "Duy vật cổ đại."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.2.0,2.20. Câu nói “\"Vẻ đẹp không nằm ở đôi má hồng của người thiếu\nnữ mà ở trong mắt của kẻ si tình\"” phản ánh quan điểm của trường phái triết học\nnào?",
        "options": [
            "Trường phái duy tâm chủ quan.",
            "Trường phái duy tâm khách quan.",
            "Trường phái duy vật siêu hình.",
            "Trường phái duy vật biện chứng"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.2.0,2.22. Chủ nghĩa duy vật lịch sử là kết quả của hoạt động nào?",
        "options": [
            "Nghiên cứu sự phát triển của chủ nghĩa duy vật trong lịch sử.",
            "Nghiên cứu những quan điểm duy vật trong lịch sử.",
            "Vận dụng và mở rộng quan điểm duy vật biện chứng vào nghiên cứu lịch sử xã hội.",
            "Vận dụng lịch sử trong việc nghiên cứu những vấn đề triết học duy vật."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.3.0,2.23. Câu thành ngữ “Phú quý sinh lễ nghĩa” phản ánh quan điểm của\ntrường phái triết học nào?",
        "options": [
            "Chủ nghĩa duy vật.",
            "Chủ nghĩa duy tâm.",
            "Nhị nguyên luận.",
            "Không thuộc trường phái nào."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.2.0,2.24. Chủ nghĩa duy tâm giải quyết mặt bản thể luận trong vấn đề cơ bản\ncủa triết học như thế nào?",
        "options": [
            "Vật chất và ý thức sinh ra đồng thời và nương tựa vào nhau biến đổi.",
            "Thế giới tinh thần có trước và quyết định sự tồn tại của thế giới vật chất.",
            "Thế giới tinh thần là sản phẩm của các yếu tố vật chất.",
            "Thế giới tinh thần là thế giới duy nhất tồn tại vĩnh hằng."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.2.0,2.25. Chủ nghĩa duy vật giải quyết mặt bản thể luận trong vấn đề cơ bản\ncủa triết học như thế nào?",
        "options": [
            "Vật chất là cái có trước, vật chất quyết định ý thức.",
            "Thế giới tinh thần có trước và quyết định sự tồn tại của thế giới vật chất.",
            "Vật chất và ý thức sinh ra đồng thời và nương tựa vào nhau biến đổi.",
            "Thế giới tinh thần là thế giới duy nhất tồn tại vĩnh hằng."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.2.0,2.27. Nhận định nào đúng về khả năng nhận thức của con người đối với thế\ngiới khách quan?",
        "options": [
            "Con người không thể nhận thức được thế giới khách quan.",
            "Con người có thể nhận thức đầy đủ về thế giới khách quan.",
            "Con người hiện tại chưa thể nhận thức được thế giới khách quan.",
            "Con người hoàn toàn nhận thức được thế giới khách quan nhưng sẽ không đầy đủ."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.2.0,2.28. “Thế giới rộng lớn và phức tạp, con người không thể nào nhận thức\nđược hết, vì vậy nhận thức là bất khả thi.”. Quan điểm trên thuộc lập trường nào về\nmặt nhận thức luận trong triết học?",
        "options": [
            "Duy tâm khách quan.",
            "Thuyết bất khả tri.",
            "Duy vật biện chứng.",
            "Thuyết khả tri"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.29. Câu thành ngữ “Ếch ngồi đáy giếng, coi trời bằng vung” thể hiện vấn\nđề gì về thế giới quan?",
        "options": [
            "Người có nhận thức sai lầm.",
            "Người có nhận thức lệch lạc.",
            "Người ít hiểu biết, kiến thức nông cạn do điều kiện tiếp xúc hạn hẹp; người ngông\nnghênh, tự phụ, phiến diện.",
            "Người có nhận thức cảm tính."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.1.0,2.30. Trong triết học, có hai phương pháp tư duy chung nhất đối lập nhau\nđó là:",
        "options": [
            "Phương pháp quy nạp và phương pháp diễn dịch.",
            "Phương pháp chứng minh và phương pháp phản chứng.",
            "Phương pháp trừu tượng và phương pháp cụ thể.",
            "Phương pháp biện chứng và phương pháp siêu hình."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.2.0,2.32. Câu nói “Không ai tắm hai lần trên một dòng sông” cho thấy phương\npháp tư duy nào trong triết học?",
        "options": [
            "Tư duy biện chứng.",
            "Tư duy siêu hình.",
            "Tư duy trừu tượng.",
            "Tư duy độc lập."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.2.0,2.33. Khi vận dụng, phương pháp tư duy biện chứng sẽ ưu việt hơn phương\npháp tư duy siêu hình ở điểm nào?",
        "options": [
            "Có cái nhìn một chiều, sâu sắc hơn.",
            "Có cái nhìn đa chiều, đầy đủ hơn.",
            "Đầy đủ chứng cứ hơn.",
            "Tính phản biện cao hơn."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.34. Người học cần vận dụng phương pháp tư duy nào trong triết học Mác\n– Lênin để có thể đánh giá sự vật, hiện tượng hoặc hành động đúng đắn, khách quan\nvà khoa học?",
        "options": [
            "Tư duy trừu tượng.",
            "Phương pháp tư duy siêu hình.",
            "Tư duy phiến diện.",
            "Phương pháp tư duy biện chứng."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.3.0,2.35. Ông cha ta có câu: “Không thầy đố mày làm nên”, đồng thời lại có câu\n“Học thầy không tày học bạn” điều này thể hiện tư duy gì của người Việt Nam?",
        "options": [
            "Siêu hình, tuyệt đối hóa một chiều.",
            "Biện chứng.",
            "Duy tâm.",
            "Duy vật."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.1.0,2.36. Các hình thức cơ bản của phép biện chứng trong lịch sử là:",
        "options": [
            "Phép biện chứng tự phát, phép biện chứng duy tâm và phép biện chứng duy vật.",
            "Phép biện chứng tự nhiên, phép biện chứng xã hội và phép biện chứng tư duy.",
            "Phép biện chứng khách quan, phép biện chứng chủ quan và phép biện chứng duy ý chí.",
            "Phép biện chứng toàn diện, phép biện chứng cụ thể và phép biện chứng lịch sử."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.3.0,2.37. Trong quá trình nghiên cứu khoa học, một giả thuyết mới được chấp\nnhận không phải vì nó phù hợp với mong muốn chủ quan của nhà nghiên cứu mà phải\nđược kiểm nghiệm bằng thực tiễn và bằng chứng khách quan. Cách tiếp cận này gần\nnhất với lập trường nào?",
        "options": [
            "Chủ nghĩa duy tâm chủ quan, vì tri thức khoa học vẫn được hình thành thông qua hoạt\nđộng ý thức của con người.",
            "Chủ nghĩa duy vật, vì thừa nhận hiện thực khách quan là cơ sở để kiểm nghiệm và điều\nchỉnh nhận thức.",
            "Chủ nghĩa duy tâm khách quan, vì các quy luật khoa học tồn tại độc lập với ý thức cá\nnhân.",
            "Nhị nguyên luận, vì hoạt động khoa học luôn đồng thời phụ thuộc vào cả vật chất và ý"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.38. Khi đánh giá biến đổi khí hậu, có quan điểm cho rằng chỉ cần xử lý\nmột nguồn phát thải riêng lẻ là có thể giải quyết toàn bộ vấn đề, không cần quan tâm\nđến năng lượng, giao thông, sản xuất, tiêu dùng và chính sách quốc tế. Cách tiếp cận\nnày có hạn chế gì?",
        "options": [
            "Quá chú trọng vào mối liên hệ giữa các sự vật",
            "Là biểu hiện của chủ nghĩa duy vật biện chứng vì tập trung vào phân tích nguyên nhân\ncụ thể khi giải quyết từng trường hợp.",
            "Thể hiện đầy đủ quan điểm phát triển khi xem xét vấn đề.",
            "Có biểu hiện xem xét sự vật cô lập, tách rời, phiến diện, gần với phương pháp siêu hình."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.4.0,2.39. Sự khác nhau cơ bản giữa chủ nghĩa duy vật biện chứng và chủ nghĩa\nduy vật siêu hình được thể hiện rõ nhất ở cách giải thích nào về sự biến đổi của sự\nvật?",
        "options": [
            "Chủ nghĩa duy vật biện chứng thừa nhận sự vật biến đổi do tác động bên ngoài, còn chủ\nnghĩa duy vật siêu hình nhấn mạnh nguyên nhân bên trong.",
            "Chủ nghĩa duy vật biện chứng xem sự vật trong mối liên hệ, vận động và mâu thuẫn nội\ntại; chủ nghĩa duy vật siêu hình thường xem xét sự vật cô lập và tương đối tĩnh tại.",
            "Chủ nghĩa duy vật biện chứng phủ nhận tính ổn định của sự vật, còn chủ nghĩa duy vật\nsiêu hình khẳng định mọi sự vật hoàn toàn bất biến.",
            "Chủ nghĩa duy vật biện chứng chỉ nghiên cứu sự phát triển về chất, còn chủ nghĩa duy"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.41. Trong quá trình phát triển của các nền văn minh cổ đại, tri thức của\ncon người dần vượt khỏi những kinh nghiệm riêng lẻ về sản xuất, thiên nhiên và đời\nsống xã hội để hình thành khả năng khái quát các mối liên hệ và quy luật chung. Việc\nxuất hiện triết học trong điều kiện đó phản ánh sự vận động nào của nhận thức?",
        "options": [
            "Nhận thức chuyển từ việc tiếp nhận các hiện tượng riêng lẻ sang khả năng khái quát lý\nluận về những vấn đề chung của thế giới.",
            "Nhận thức chuyển từ kinh nghiệm cảm tính sang việc giải thích thế giới chủ yếu bằng\ncác niềm tin siêu nhiên có tính hệ thống.",
            "Nhận thức đạt tới trình độ lý luận khi con người có thể thay thế hoàn toàn kinh nghiệm\nthực tiễn bằng tư duy trừu tượng.",
            "Nhận thức triết học xuất hiện chủ yếu do con người đã tích lũy đủ số lượng tri thức,"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.3.0,2.42. Sự hình thành các trung tâm văn minh cổ đại gắn với sự phát triển của\nsản xuất, phân công lao động xã hội, sự phân hóa giai cấp và sự tách biệt tương đối\ngiữa lao động trí óc với lao động chân tay. Khi phân tích điều kiện này, theo anh (chị)\nnhận định nào sau đây là phù hợp nhất?",
        "options": [
            "Triết học ra đời chủ yếu vì tầng lớp trí thức có nhu cầu tách khỏi đời sống vật chất để\ntheo đuổi nhận thức thuần túy.",
            "Triết học xuất hiện trong điều kiện xã hội đã tạo ra cơ sở vật chất, sự phân công xã hội\nvà lực lượng trí tuệ cần thiết cho tư duy lý luận.",
            "Sự xuất hiện của giai cấp là nguyên nhân duy nhất quyết định sự ra đời của triết học, còn\ntrình độ sản xuất chỉ có vai trò hỗ trợ.",
            "Sự phát triển sản xuất tự nó tất yếu tạo ra triết học, bất kể xã hội có phân công lao động"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.4.0,2.44. Việc giải thích sự phát triển xã hội chỉ bằng “ý chí của các nhà lãnh\nđạo” hoặc “tư tưởng của một cá nhân” mà bỏ qua điều kiện kinh tế - xã hội phản ánh\nhạn chế nào sau đây?",
        "options": [
            "Tuyệt đối hóa vai trò của nhân tố chủ quan và xem nhẹ cơ sở khách quan của đời sống\nxã hội.",
            "Nhấn mạnh đúng vai trò của ý thức nhưng chưa phân biệt được ý thức cá nhân với ý\nthức xã hội.",
            "Vận dụng quan điểm duy vật lịch sử nhưng chưa đánh giá đầy đủ tác động của tư tưởng.",
            "Phân tích mối quan hệ giữa điều kiện vật chất và ý thức nhưng ưu tiên quá mức yếu tố"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.4.0,2.45. Đâu là sự đối lập đúng về nguồn gốc của sự vận động và thay đổi theo\nhai phương pháp?",
        "options": [
            "Siêu hình: nguồn gốc vận động nằm bên ngoài đối tượng; biện chứng: nguồn gốc vận\nđộng là sự đấu tranh của các mặt đối lập, của mâu thuẫn nội tại trong bản thân sự vật.",
            "Siêu hình: nguồn gốc vận động là mâu thuẫn nội tại; biện chứng: nguồn gốc vận động\nnằm bên ngoài đối tượng.",
            "Siêu hình: nguồn gốc vận động là sự đấu tranh của các mặt đối lập; biện chứng: nguồn\ngốc vận động là sự biến đổi về số lượng.",
            "Siêu hình và biện chứng đều cho rằng nguồn gốc của vận động nằm bên ngoài đối tượng,"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.5.0,2.47. Từ nhận định của Ăngghen về phương pháp siêu hình là phương pháp\n“chỉ nhìn thấy cây mà không thấy rừng”, có thể đánh giá rằng hạn chế cơ bản nhất\ncủa phương pháp này là:",
        "options": [
            "Nhận thức các mặt đối lập với nhau có một ranh giới tuyệt đối, chưa thấy được sự lệ\nthuộc, ảnh hưởng, ràng buộc và quy định lẫn nhau của các mặt đối lập.",
            "Nhận thức đối tượng ở trạng thái cô lập, tách rời đối tượng ra khỏi các quan hệ được\nxem xét, qua đó chưa nhận thức được đối tượng trong các mối liên hệ phổ biến vốn có của\nnó.",
            "Nhận thức đối tượng ở trạng thái tĩnh, đồng nhất đối tượng với trạng thái tĩnh trước đó\nvà chỉ thừa nhận sự biến đổi về số lượng, về các hiện tượng bề ngoài.",
            "Coi nguyên nhân của sự biến đổi nằm bên ngoài đối tượng, do đó chưa nhận thức được"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.6.0,2.48. Trong một bài tập nghiên cứu khoa học, sinh viên được yêu cầu đề\nxuất cách tiếp cận để nghiên cứu sự phát triển của một công nghệ mới. Phương án nào\nsau đây thể hiện sự sáng tạo dựa trên quan điểm biện chứng?",
        "options": [
            "Nhận thức công nghệ từ những đặc điểm cơ bản đang tồn tại, đồng thời theo dõi sự thay\nđổi của các đặc điểm đó qua quá trình vận động để xác định xu hướng phát triển của công\nnghệ.",
            "Nhận thức công nghệ thông qua việc phân tích các thành phần cấu thành của nó, tách\ntừng thành phần khỏi các quan hệ liên quan để xác định chính xác đặc điểm và vai trò của\ntừng thành phần.",
            "Nhận thức công nghệ trong các mối liên hệ phổ biến vốn có của nó, xem xét sự lệ thuộc,\nảnh hưởng, ràng buộc, quy định giữa các thành phần, đồng thời phân tích quá trình vận\nđộng, biến đổi và sự đấu tranh của các mặt đối lập.",
            "Nhận thức sự phát triển của công nghệ thông qua những biến đổi về số lượng của các"
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.1.0,2.50. Điền vào chỗ trống: “… là hệ thống quan điểm duy vật biện chứng về\ntự nhiên, xã hội và tư duy – thế giới quan và phương pháp luận khoa học, cách mạng\ncủa giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ trong nhận\nthức và cải tạo thế giới”.",
        "options": [
            "Triết học.",
            "Triết học hiện sinh.",
            "Triết học cổ điển Anh",
            "Triết học Mác – Lênin."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.1.0,2.51. Điền vào chỗ trống: “Triết học Mác – Lênin là hệ thống quan điểm …\nvề tự nhiên, xã hội và tư duy – thế giới quan và phương pháp luận khoa học, cách\nmạng của giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ trong\nnhận thức và cải tạo thế giới”.",
        "options": [
            "Duy vật biện chứng.",
            "Duy vật siêu hình.",
            "Duy tâm khách quan.",
            "Duy tâm chủ quan."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.1.0,2.53. Yếu tố nào không phải là điều kiện khách quan cho sự ra đời của triết\nhọc Mác - Lênin?",
        "options": [
            "Sự phát triển của phong trào công nhân.",
            "Triết học cổ điển Đức.",
            "Sự ra đời của nền đại công nghiệp.",
            "Sự thay đổi lập trường triết học của C. Mác."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.2.0,2.54. Trong ba bộ phận cấu thành nên chủ nghĩa Mác - Lênin, bộ phận nào\ngiữ vai trò là thế giới quan và phương pháp luận chung nhất?",
        "options": [
            "Triết học Mác – Lênin.",
            "Kinh tế chính trị Mác – Lênin.",
            "Chủ nghĩa xã hội khoa học.",
            "Chủ nghĩa duy vật lịch sử."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.2.0,2.55. Những điều kiện và tiền đề cơ bản nào dẫn đến sự ra đời và phát triển\ncủa triết học Mác – Lênin?",
        "options": [
            "Sự phát triển của chủ nghĩa tư bản và phong trào công nhân; những tiền đề lý luận từ\ntriết học cổ điển Đức, kinh tế chính trị học cổ điển Anh và chủ nghĩa xã hội không tưởng;\ncác thành tựu khoa học tự nhiên thế kỷ XIX; đồng thời được phát triển qua thực tiễn cách\nmạng và sự đóng góp của Mác, Ăngghen và Lênin.",
            "Chủ yếu do sự phát triển của triết học cổ điển Đức, còn các yếu tố kinh tế – xã hội và\nkhoa học tự nhiên chỉ có vai trò thứ yếu.",
            "Chủ yếu do sự phát triển của khoa học tự nhiên và kinh tế tư bản chủ nghĩa, không liên\nquan trực tiếp đến phong trào công nhân và các tiền đề lý luận.",
            "Do sự kế thừa trực tiếp toàn bộ tư tưởng triết học, kinh tế và xã hội trước đó, kết hợp"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.2.0,2.56. Phát kiến vĩ đại thiên tài của Mác trong lĩnh vực triết học là:",
        "options": [
            "Học thuyết giá trị thặng dư.",
            "Chủ nghĩa duy vật lịch sử.",
            "Sứ mệnh lịch sử của giai cấp công nhân.",
            "Không có phát kiến thiên tài nào."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.58. Ý nghĩa lịch sử to lớn của triết học Mác – Lênin là gì?",
        "options": [
            "Là học thuyết triết học đầu tiên trong lịch sử nhân loại kết hợp được lý luận của ba nhà\ntư tưởng lỗi lạc của nhân loại.",
            "Là học thuyết triết học đầu tiên trong lịch sử nhân loại đứng trên lập trường của người\nlao động.",
            "Là học thuyết triết học đầu tiên trong lịch sử nhân loại nghiên cứu về mối quan hệ giữa\nvật chất và ý thức.",
            "Là học thuyết triết học đầu tiên trong lịch sử nhân loại có chức năng xây dựng thế giới"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.59. Phát biểu nào sau đây thể hiện bản chất cách mạng của triết học Mác\n- Lênin?",
        "options": [
            "Triết học Mác - Lênin chỉ tập trung vào việc giải thích thế giới.",
            "Triết học Mác - Lênin phục vụ lợi ích cho mọi giai cấp trong quá trình phát triển xã hội.",
            "Triết học Mác - Lênin gắn liền với sự nghiệp giải phóng giai cấp, giải phóng dân tộc và\ngiải phóng con người.",
            "Triết học Mác - Lênin phủ nhận vai trò của thực tiễn cách mạng."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.3.0,2.61. Đại hội Đảng lần thứ XIV xác định khoa học, công nghệ, đổi mới sáng\ntạo và chuyển đổi số là những động lực quan trọng của mô hình tăng trưởng mới,\nđồng thời nhấn mạnh phát triển kinh tế số, kinh tế xanh và kinh tế tuần hoàn. Nếu\nvận dụng phương pháp luận duy vật biện chứng để phân tích định hướng này, nhận\nđịnh nào phù hợp nhất?",
        "options": [
            "Chỉ cần phát triển công nghệ là có thể tự động tạo ra phát triển bền vững.",
            "Kinh tế xanh và kinh tế số là hai xu hướng hoàn toàn đối lập nhau khó có thể dung hòa.",
            "Công nghệ cần được đặt trong mối liên hệ với mô hình tăng trưởng, thể chế, nhân lực,\nmôi trường và mục tiêu xã hội.",
            "Phát triển công nghệ phải được tách khỏi các vấn đề xã hội để bảo đảm tính khách quan"
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.3.0,2.62. Qua 40 năm “Đổi mới”, Việt Nam vừa đạt được nhiều thành tựu vừa\nphải tiếp tục nhận diện những hạn chế, mâu thuẫn và vấn đề mới nảy sinh để điều\nchỉnh đường lối phát triển. Theo phương pháp luận của triết học Mác – Lênin, cách\ntiếp cận nào sau đây là phù hợp nhất?",
        "options": [
            "Chỉ tập trung vào thành tựu để khẳng định đường lối đề ra đã đúng và hoàn thiện.",
            "Chỉ tập trung vào hạn chế để tìm ra cách thức, phương hướng giải quyết điểm nghẽn,\nkhó khăn trong giai đoạn phát triển tiếp theo của đất nước.",
            "Đánh giá khách quan cả thành tựu và hạn chế, phân tích mối liên hệ, nguyên nhân và\nđiều kiện phát triển để tiếp tục bổ sung lý luận và chính sách.",
            "Giữ nguyên mọi quan điểm đã có trong các kỳ đại hội của Đảng trước đó để bảo đảm"
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.3.0,2.63. Tại sao sinh viên cần phải học, học phần Triết học Mác - Lênin? Chọn\nđáp án đúng nhất trong các đáp án sau:",
        "options": [
            "Triết học Mác – Lênin là một học phần bắt buộc trong chương trình học, nếu không học\ntốt sẽ ảnh hưởng đến kết quả học tập và cơ hội việc làm.",
            "Triết học Mác – Lênin là một học phần bắt buộc trong chương trình học, giúp cho sinh\nviên trang bị được thế giới quan và phương pháp luận khoa học, cách mạng.",
            "Triết học rất khó, nếu học được nó sẽ khiến mọi người thán phục, vì không phải ai cũng\nhọc được triết học.",
            "Triết học là khoa học của mọi khoa học."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.65. Học triết học và những khoa học khác cần nắm vững nguyên tắc nào?",
        "options": [
            "Học liên tục không được ngắt quãng.",
            "Học theo năng lực của bản thân.",
            "Học tập lý luận gắn với vận dụng thực tiễn sinh động.",
            "Cần có tâm lý tốt và ý chí sắt đá."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.3.0,2.66. Trong quá trình học tập và nghiên cứu kỹ thuật tại Trường Đại học\nKỹ thuật Công nghiệp, sinh viên tiếp cận đồng thời kiến thức cơ khí, điện, tự động\nhóa và công nghệ thông tin. Việc sử dụng triết học Mác – Lênin để khái quát mối liên\nhệ giữa các lĩnh vực trên thể hiện yêu cầu nào?",
        "options": [
            "Tách biệt các lĩnh vực khoa học để bảo đảm tính chuyên môn hóa tuyệt đối.",
            "Nhận thức các sự vật trong mối liên hệ và tác động qua lại với nhau.",
            "Xem triết học có thể thay thế toàn bộ các khoa học chuyên ngành.",
            "Chỉ sử dụng tri thức triết học khi kiến thức chuyên ngành không đủ để giải quyết vấn"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.3.0,2.67. Khi thực hiện một đề tài kỹ thuật, sinh viên thu thập số liệu thí nghiệm,\nkiểm tra sai số và đối chiếu với kết quả thực tế trước khi đưa ra kết luận. Cách làm\nnày vận dụng trực tiếp quan điểm nào?",
        "options": [
            "Lấy suy luận lý luận làm căn cứ chủ yếu, không cần kiểm chứng thực nghiệm.",
            "Xem kết quả nghiên cứu phụ thuộc chủ yếu vào ý muốn của người nghiên cứu.",
            "Xuất phát từ hiện thực khách quan và kiểm nghiệm nhận thức bằng thực tiễn.",
            "Chỉ dựa vào những kết luận đã được thừa nhận trong giáo trình."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.3.0,2.69. Khi một thiết bị kỹ thuật liên tục phát sinh lỗi, nhóm sinh viên không\nchỉ thay thế linh kiện mà còn phân tích thiết kế, điều kiện vận hành, quy trình lắp ráp\nvà dữ liệu sử dụng. Cách xử lý này vận dụng chủ yếu:",
        "options": [
            "Quan điểm toàn diện và quan điểm phát triển trong nhận thức sự vật.",
            "Quan điểm cô lập sự vật để xác định một nguyên nhân duy nhất.",
            "Phương pháp siêu hình nhằm phân chia hệ thống thành các bộ phận độc lập.",
            "Quan điểm duy tâm vì coi trọng vai trò của hoạt động tư duy."
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.4.0,2.70. Tại sao hiện nay việc bổ sung, phát triển lý luận của triết học Mác–\nLênin là cấp thiết? Chọn đáp án sai trong các đáp án sau:",
        "options": [
            "Do mong muốn chủ quan của các nhà nghiên cứu lý luận.",
            "Do đặc điểm thời đại: sự tương tác giữa cách mạng khoa học công nghệ và cách mạng\nxã hội đã tạo nên sự biến đổi rất năng động của đời sống xã hội.",
            "Do sự khủng hoảng của chủ nghĩa xã hội làm cho yêu cầu phát triển triết học Mác –\nLênin càng trở nên cấp bách.",
            "Do sự phát triển lý luận triết học mácxít và đổi mới chủ nghĩa xã hội trong thực tiễn là"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.4.0,2.71. Thực chất và ý nghĩa cuộc cách mạng trong triết học do C. Mác và Ph.\nĂngghen thực hiện?",
        "options": [
            "Khắc phục được hạn chế của các trường phái triết học trong lịch sử để xây dựng chủ\nnghĩa duy vật biện chứng.",
            "Vận dụng và mở rộng quan điểm duy vật biện chứng vào nghiên cứu lịch sử xã hội, sáng\ntạo ra chủ nghĩa duy vật lịch sử.",
            "Bổ sung những đặc tính mới vào triết học, sáng tạo ra triết học chân chính khoa học –\ntriết học duy vật biện chứng.",
            "Tất cả các đáp án đều đúng."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.4.0,2.72. Vai trò của triết học Mác – Lênin đối với sự nghiệp đổi mới theo định\nhướng xã hội chủ nghĩa ở Việt Nam?",
        "options": [
            "Là nền tảng, cơ sở cho quá trình đổi mới tư duy ở Việt Nam.",
            "Góp phần tìm được lời giải đáp về con đường đi lên chủ nghĩa xã hội ở Việt Nam. Đồng\nthời, qua thực tiễn để bổ sung, phát triển tư duy lý luận về chủ nghĩa xã hội.",
            "Giúp giải quyết những vấn đề đặt ra trong thực tiễn xây dựng chủ nghĩa xã hội và thực\ntiễn đổi mới của đất nước ta.",
            "Tất cả các đáp án đều đúng."
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.4.0,2.74. Trong bối cảnh toàn cầu hóa và cuộc Cách mạng công nghiệp lần thứ\ntư, triết học Mác – Lênin vẫn được khẳng định có vai trò quan trọng đối với sự nghiệp\nđổi mới ở Việt Nam. Theo anh (chị) nhận định nào dưới đây làm rõ bản chất của vai\ntrò đó?",
        "options": [
            "Triết học Mác – Lênin cung cấp các giải pháp kỹ thuật để phát triển khoa học và công\nnghệ.",
            "Triết học Mác – Lênin là cơ sở thế giới quan và phương pháp luận khoa học giúp nhận\nthức đúng xu hướng vận động của xã hội, từ đó định hướng xây dựng đường lối và chính\nsách phù hợp.",
            "Triết học Mác – Lênin thay thế toàn bộ các ngành khoa học xã hội trong việc hoạch định\nchính sách.",
            "Triết học Mác Lênin chỉ có giá trị trong nghiên cứu lịch sử tư tưởng."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.4.0,2.75. Công cuộc Đổi mới ở Việt Nam cho thấy việc vận dụng triết học Mác\n– Lênin vào thực tiễn không thể chỉ dừng ở việc lặp lại các kết luận có sẵn. Phân tích\nnào sau đây làm rõ nhất yêu cầu đó?",
        "options": [
            "Lý luận phải được giữ nguyên để bảo đảm tính ổn định, còn thực tiễn cần điều chỉnh\ntheo lý luận.",
            "Thực tiễn có thể thay thế hoàn toàn lý luận trong quá trình hoạch định đường lối phát\ntriển.",
            "Cần xuất phát từ điều kiện thực tiễn, nhận thức quy luật khách quan, tổng kết kinh\nnghiệm và phát triển lý luận phù hợp với yêu cầu lịch sử cụ thể.",
            "Chỉ cần thay đổi phương thức tổ chức thực hiện mà không cần đổi mới tư duy lý luận."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.4.0,2.76. Trong nội dung giáo trình Triết học Mác – Lênin có viết: “Trong\nnhững năm đầu của công cuộc đổi mới, việc giải quyết vấn đề kinh tế - xã hội còn gặp\nkhông ít khó khăn do quan điểm chỉ đạo chưa thật sự thống nhất”. Vậy, nguyên nhân\nchủ yếu của tình trạng này là gì?",
        "options": [
            "Những quan điểm lý luận làm cơ sở định hướng cho việc giải quyết các vấn đề thực tiễn\nchưa thực sự rõ ràng, đồng bộ và nhất quán.",
            "Điều kiện kinh tế và nguồn lực vật chất của đất nước chưa đáp ứng đầy đủ yêu cầu đặt\nra trong quá trình đổi mới.",
            "Cơ sở vật chất – kỹ thuật của nền kinh tế còn nhiều hạn chế, chưa phát triển đồng bộ\ngiữa các ngành và lĩnh vực.",
            "Năng lực tổ chức, quản lý và kinh nghiệm thực tiễn của đội ngũ cán bộ chưa theo kịp"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.4.0,2.77. Điều gì phản ánh rõ nhất vai trò của triết học Mác – Lênin trong đời\nsống xã hội hiện nay?",
        "options": [
            "Triết học cung cấp các giải pháp kỹ thuật cụ thể cho từng lĩnh vực nên có thể thay thế\ncác khoa học chuyên ngành.",
            "Triết học cung cấp hệ thống thế giới quan và phương pháp luận chung, giúp định hướng\nviệc phân tích các vấn đề thực tiễn trên cơ sở kết hợp lý luận với tri thức cụ thể.",
            "Triết học chủ yếu có giá trị trong việc giải thích các vấn đề lịch sử, còn những vấn đề\nmới của khoa học và xã hội cần được giải quyết độc lập với triết học.",
            "Triết học giữ vai trò định hướng nhận thức bằng cách cung cấp những kết luận cố định,"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.4.0,2.78. Sự phát triển của trí tuệ nhân tạo đặt ra đồng thời những vấn đề về\nkhoa học, lao động, đạo đức, pháp luật và tổ chức xã hội. Điều gì phản ánh đúng nhất\nyêu cầu phương pháp luận của triết học Mác – Lênin trong việc phân tích hiện tượng\nnày?",
        "options": [
            "Cần ưu tiên phân tích công nghệ vì các yếu tố xã hội chỉ là hệ quả thứ yếu.",
            "Cần tách riêng từng lĩnh vực để tránh làm phức tạp việc nhận thức bản chất của trí tuệ\nnhân tạo.",
            "Cần xem xét hiện tượng trong hệ thống các mối liên hệ giữa khoa học – công nghệ, con\nngười và các quan hệ xã hội.",
            "Cần tập trung vào những tác động trước mắt vì các xu hướng dài hạn chưa thể được nhận"
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.5.0,2.80. Đánh giá nào phù hợp nhất về vai trò của ba phát minh lớn trong khoa\nhọc tự nhiên thế kỷ XIX đối với sự ra đời của triết học Mác?",
        "options": [
            "Các phát minh này trực tiếp tạo ra triết học Mác mà không cần điều kiện kinh tế – xã\nhội.",
            "Các phát minh này cung cấp cơ sở khoa học quan trọng để nhận thức tính thống nhất vật\nchất và sự vận động, phát triển của thế giới.",
            "Các phát minh này chứng minh rằng khoa học tự nhiên có thể thay thế triết học.",
            "Các phát minh này chỉ có ý nghĩa kỹ thuật, không ảnh hưởng đến thế giới quan triết học."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.5.0,2.81. Đại hội XIV xác định mục tiêu tăng trưởng GDP bình quân giai đoạn\n2026–2030 từ 10%/năm trở lên, đồng thời nhấn mạnh phát triển nhanh và bền vững.\nTheo phương pháp luận duy vật biện chứng, phương án đánh giá nào phù hợp nhất?",
        "options": [
            "Mục tiêu tăng trưởng cao cần được ưu tiên tuyệt đối vì quy mô kinh tế là cơ sở của mọi\ntiến bộ xã hội.",
            "Mục tiêu tăng trưởng cao chỉ có thể đạt được nếu tạm thời giảm yêu cầu về môi trường\nvà công bằng xã hội.",
            "Mục tiêu tăng trưởng cần được đánh giá trong mối quan hệ với năng suất, chất lượng,\nmôi trường, xã hội và các điều kiện thực tế.",
            "Mục tiêu tăng trưởng cần được giữ nguyên bất kể điều kiện khách quan thay đổi như thế"
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.5.0,2.82. Trong quá trình xây dựng chủ nghĩa xã hội ở Việt Nam, có nhiều định\nhướng chính sách được đề xuất. Từ phương pháp luận của triết học Mác – Lênin, theo\nanh (chị) chính sách nào nên được ưu tiên thực hiện?",
        "options": [
            "Duy trì cơ chế quản lý tập trung, quan liêu, bao cấp để đảm bảo tính thống nhất.",
            "Chỉ tập trung phát triển kinh tế thị trường mà không quan tâm đến định hướng xã hội\nchủ nghĩa.",
            "Hạn chế hội nhập quốc tế để tránh tác động từ bên ngoài để bảo tồn văn hóa Việt Nam.",
            "Tiếp tục hoàn thiện nền kinh tế thị trường định hướng xã hội chủ nghĩa trên cơ sở đổi"
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.5.0,2.84. Khi đánh giá thành tựu của công cuộc Đổi mới ở Việt Nam, theo anh\n(chị) nhận định nào sau đây là thuyết phục nhất?",
        "options": [
            "Cần dựa vào các chỉ tiêu tăng trưởng để khẳng định thành công của Đổi mới.",
            "Cần đánh giá đồng thời những thành tựu, hạn chế, nguyên nhân và yêu cầu phát triển\nmới.",
            "Những hạn chế còn tồn tại làm giảm đáng kể giá trị của các thành tựu đã đạt được.",
            "Thành công của Đổi mới chủ yếu chứng minh tính đúng đắn của một mô hình chính sách"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.5.0,2.85. Đại hội XIV của Đảng đặt đồng thời các mục tiêu về tăng trưởng, năng\nsuất, kinh tế số, đời sống xã hội và môi trường. Điều gì phản ánh rõ nhất phương pháp\nluận được thể hiện trong hệ thống mục tiêu này?",
        "options": [
            "Ưu tiên nhiều mục tiêu để phân tán rủi ro chính sách.",
            "Đặt mục tiêu xã hội và môi trường nhằm bù đắp những hạn chế của tăng trưởng kinh tế.",
            "Nhận thức phát triển như một chỉnh thể gồm nhiều mặt có quan hệ tác động qua lại.",
            "Xem các chỉ tiêu kinh tế là nền tảng, còn các chỉ tiêu khác có vai trò hỗ trợ."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.5.0,2.86. Có quan điểm cho rằng “lý luận Mác – Lênin phải được giữ nguyên\ntừng luận điểm cụ thể để bảo đảm tính trung thành”. Theo anh (chị) đánh giá nào phù\nhợp nhất?",
        "options": [
            "Đúng vì mọi sự điều chỉnh lý luận đều có thể dẫn đến xa rời nguyên lý nền tảng.",
            "Chưa phù hợp vì trung thành với lý luận phải gắn với vận dụng sáng tạo và phát triển\nphù hợp thực tiễn.",
            "Sai vì lý luận chỉ có giá trị lịch sử và không còn ý nghĩa phương pháp luận.",
            "Đúng trong lĩnh vực triết học nhưng không áp dụng đối với các lĩnh vực khác."
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.6.0,2.88. Trong quá trình chuyển đổi số quốc gia, nếu anh/chị là thành viên ban\nchỉ đạo xây dựng một hệ thống ra quyết định dựa trên dữ liệu, mô hình nào phù hợp\nnhất với chức năng phương pháp luận của triết học Mác – Lênin?",
        "options": [
            "Sử dụng dữ liệu quá khứ làm căn cứ chính để dự báo và giữ ổn định các quyết định.",
            "Kết hợp dữ liệu thực tế, phân tích các mối liên hệ, nhận diện xu hướng vận động, kiểm\nnghiệm bằng thực tiễn và điều chỉnh quyết định khi điều kiện thay đổi.",
            "Để thuật toán tự động đưa ra quyết định nhằm hạn chế sự can thiệp của yếu tố chủ quan.",
            "Ưu tiên những dữ liệu có lợi cho mục tiêu phát triển để bảo đảm tính thống nhất của"
        ],
        "answer": 1
    },
    {
        "question": "Câu 1.6.0,2.89. Nếu anh (chị) được giao xây dựng chương trình phát triển kỹ năng\nnghề nghiệp cho sinh viên học tại trường Đại học Kỹ thuật Công nghiệp, anh (chị) sẽ\nvận dụng quan điểm của triết học Mác – Lênin để đề xuất phương án phù hợp nhất\nlà?",
        "options": [
            "Chỉ tăng số lượng giờ thực hành và giờ thực tập doanh nghiệp và giảm bớt lý thuyết.",
            "Giảm thời gian học lỳ thuyết và thực hành so với hệ thống hiện hành để tạo điều kiện\ncho sinh viên sớm ra trường.",
            "Thiết kế chương trình tích hợp giữa lý luận và thực tiễn; kết hợp kiến thức chuyên môn\nvới kỹ năng nghề nghiệp, kỹ năng số, nghiên cứu khoa học, đạo đức nghề nghiệp, khả năng\nthích ứng với chuyển đổi số và học tập suốt đời.",
            "Thiết kế giảm bớt thời gian học lý thuyết và thực hành để tăng cường đào tạo các kỹ"
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.6.0,2.91. Nếu anh (chị) được giao xây dựng “Mô hình sinh viên kỹ thuật TNUT chủ\nđộng đổi mới sáng tạo trong thời đại số”, phương án tổng thể nào nên được lựa chọn?",
        "options": [
            "Xây dựng hệ sinh thái gồm nền tảng lý luận khoa học, năng lực chuyên môn, tư duy biện\nchứng, kỹ năng số, nghiên cứu thực tiễn, hợp tác liên ngành và cơ chế thử nghiệm – phản\nhồi – cải tiến.",
            "Tập trung đào tạo kỹ năng sử dụng công nghệ mới, vì công nghệ là yếu tố trung tâm của\nđổi mới sáng tạo.",
            "Tập trung vào các cuộc thi đổi mới sáng tạo để tạo động lực cạnh tranh giữa sinh viên.",
            "Ưu tiên đào tạo những sinh viên có thành tích cao để hình thành các nhóm nghiên cứu"
        ],
        "answer": 0
    },
    {
        "question": "Câu 1.6.0,2.92. Nếu được giao xây dựng một kế hoạch nâng cao năng lực đổi mới sáng\ntạo của sinh viên kỹ thuật, phương án nào thể hiện rõ nhất sự kế thừa và phát triển?",
        "options": [
            "Loại bỏ hoàn toàn các phương pháp học tập truyền thống để thay thế bằng phương pháp\nmới.",
            "Giữ nguyên toàn bộ phương pháp hiện có để bảo đảm sự ổn định của quá trình đào tạo.",
            "Đánh giá những yếu tố còn phù hợp của phương pháp cũ, loại bỏ những hạn chế và tích\nhợp các phương pháp mới dựa trên kết quả thực tiễn.",
            "Chọn phương pháp hiện đại nhất từ một trường đại học tiên tiến và áp dụng trực tiếp."
        ],
        "answer": 2
    },
    {
        "question": "Câu 1.6.0,2.93. Nếu phải thiết kế một mô hình hợp tác giữa sinh viên kỹ thuật, giảng\nviên và doanh nghiệp trong nghiên cứu công nghệ, phương án nào thể hiện tốt nhất\nsự thống nhất giữa khoa học cụ thể và triết học?",
        "options": [
            "Để các nhà khoa học kỹ thuật quyết định toàn bộ nội dung vì họ có chuyên môn sâu\nnhất.",
            "Để triết học định hướng trực tiếp mọi giải pháp kỹ thuật cụ thể.",
            "Tách triết học khỏi nghiên cứu kỹ thuật vì các ngành khoa học cụ thể đã có phương pháp\nriêng.",
            "Kết hợp tri thức chuyên ngành, dữ liệu thực tế và phương pháp luận triết học để phân"
        ],
        "answer": 3
    },
    {
        "question": "Câu 1.6.0,2.95. Nếu phải xây dựng kế hoạch giúp sinh viên kỹ thuật tham gia giải\nquyết các vấn đề phát triển bền vững, phương án nào là phù hợp nhất?",
        "options": [
            "Tập trung vào các giải pháp kỹ thuật có hiệu suất cao nhất.",
            "Tập trung vào mục tiêu giảm tác động môi trường, bất kể chi phí và khả năng triển khai.",
            "Thiết kế giải pháp trên cơ sở đánh giá đồng thời hiệu quả kỹ thuật, kinh tế, xã hội, môi\ntrường và khả năng phát triển lâu dài.",
            "Ưu tiên các giải pháp có thể triển khai nhanh nhất để tạo ra kết quả tức thời."
        ],
        "answer": 2
    },
    {
        "question": "Câu 2.1.0,2.1. Đặc điểm chung của các quan niệm triết học duy vật thời kỳ cổ đại về\nvật chất là gì?",
        "options": [
            "Đồng nhất vật chất với nguyên tử.",
            "Đồng nhất vật chất với dạng cụ thể của vật chất.",
            "Đồng nhất vật chất với khối lượng.",
            "Đồng nhất vật chất với ý thức."
        ],
        "answer": 1
    },
    {
        "question": "Câu 2.1.0,2.3. Chọn đáp án đúng điền vào chỗ trống sau: … là một phạm trù triết học\ndùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được\ncảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại không lệ thuộc vào cảm\ngiác?",
        "options": [
            "Vật chất.",
            "Ý thức.",
            "Cảm giác.",
            "Tri giác."
        ],
        "answer": 0
    },
    {
        "question": "Câu 2.1.0,2.4. Theo Ph. Ăngghen, một trong những phương thức tồn tại cơ bản của\nvật chất là gì?",
        "options": [
            "Phát triển.",
            "Vận động.",
            "Chuyển hóa.",
            "Vật thể hữu hình."
        ],
        "answer": 1
    },
    {
        "question": "Câu 2.1.0,2.5. Tính thống nhất vật chất của thế giới được hiểu như thế nào?",
        "options": [
            "Chỉ có một thế giới tồn tại đó là thế giới vật chất, ngoài ra không có thế giới nào khác.",
            "Thế giới vật chất là một chỉnh thể vừa thống nhất, vừa đa dạng. Thống nhất ở tính vật\nchất và đa dạng ở các hình thức tồn tại của nó.",
            "Lịch sử loài người là kết quả của sự tiến hoá lâu dài của giới tự nhiên, của vật chất nói\nghung, nó không phải là thế giới bên cạnh của thế giới tự nhiên.",
            "Tất cả đáp án đều đúng."
        ],
        "answer": 3
    },
    {
        "question": "Câu 2.1.0,2.6. Theo quan niệm của Triết học Mác - Lênin, ý thức là gì?",
        "options": [
            "Hình ảnh của thế giới khách quan.",
            "Hình ảnh phản ánh sự vận động và phát triển của thế giới khách quan.",
            "Là một phần chức năng của bộ óc con người.",
            "Là hình ảnh phản ánh sáng tạo lại hiện thực khách quan."
        ],
        "answer": 3
    },
    {
        "question": "Câu 2.1.0,2.8. Điều kiện đủ cho sự ra đời của ý thức là gì?",
        "options": [
            "Lao động và ngôn ngữ.",
            "Bộ não người và hiện thực khách quan.",
            "Năng lực chế tạo và sử dụng công cụ lao động.",
            "Ngôn ngữ phát triển với cả tiếng nói và chữ viết."
        ],
        "answer": 0
    },
    {
        "question": "Câu 2.1.0,2.9. Nội dung nào dưới đây phản ánh đầy đủ nhất về bản chất của ý thức?",
        "options": [
            "Ý thức mang bản chất xã hội.",
            "Ý thức mang bản chất tự nhiên",
            "Ý thức có tính năng động, sáng tạo và mang bản chất xã hội.",
            "Tất cả đáp án đều đúng."
        ],
        "answer": 2
    },
    {
        "question": "Câu 2.1.0,2.10. Ý nghĩa phương pháp luận được rút ra từ Mối quan hệ giữa vật chất\nvà ý thức là gì?",
        "options": [
            "Trong nhận thức và hoạt động phải có quan điểm khách quan.",
            "Mục tiêu và phương pháp đều phải căn cứ vào điều kiện khách quan thực tế, không được\nchủ quan duy ý chí.",
            "Cần Phát huy tính năng động sáng tạo của ý thức.",
            "Tất cả đáp án đều đúng."
        ],
        "answer": 3
    },
    {
        "question": "Câu 2.2.0,2.11. Bổ sung để được một khẳng định đúng: “Định nghĩa về vật chất của\nV.I.Lênin...”?",
        "options": [
            "Thừa nhận vật chất tồn tại bên ngoài và độc lập với ý thức con người, thông qua các\ndạng cụ thể của vật chất.",
            "Thừa nhận vật chất nói chung tồn tại vĩnh viễn, tách rời các dạng cụ thể của vật chất.",
            "Đồng nhất vật chất nói chung với một dạng cụ thể của vật chất.",
            "Đồng nhất vật chất với khối lượng."
        ],
        "answer": 0
    },
    {
        "question": "Câu 2.2.0,2.12. Theo quan điểm của chủ nghĩa duy vật biện chứng, vật chất là:",
        "options": [
            "Thực tại khách quan và chủ quan, được ý thức phản ánh.",
            "Tồn tại ở các dạng vật chất cụ thể, có thể cảm nhận được.",
            "Thực tại khách quan độc lập với ý thức, không phụ thuộc vào ý thức.",
            "Thực tại khách quan không nhận thức được."
        ],
        "answer": 2
    },
    {
        "question": "Câu 2.2.0,2.14. Nội dung nào dưới đây trong định nghĩa vật chất của V.I. Lênin giải\nquyết được mặt thứ nhất của vấn đề cơ bản của triết học?",
        "options": [
            "Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan.",
            "Vật chất phụ thuộc vào cảm giác của con người.",
            "Thực tại khách quan tồn tại không lệ thuộc vào cảm giác.",
            "Thực tại chủ quan được cảm giác chép lại, chụp lại, phản ảnh."
        ],
        "answer": 2
    },
    {
        "question": "Câu 2.2.0,2.15. Chọn đáp án đúng về điểm đặc biệt và tính sáng tạo trong phương\npháp định nghĩa vật chất của V.I. Lênin?",
        "options": [
            "Định nghĩa vật chất thông qua đối lập với ý thức.",
            "Định nghĩa vật chất thông qua vận động.",
            "Định nghĩa vật chất thông qua tồn tại.",
            "Định nghĩa vật chất thông qua khái niệm."
        ],
        "answer": 0
    },
    {
        "question": "Câu 2.2.0,2.16. Hãy chỉ ra một đáp án sai khi phân tích về nội dung định nghĩa vật\nchất dưới đây?",
        "options": [
            "Vật chất là tất cả những gì tồn tại trong thế giới khách quan.",
            "Vật chất là tất cả những cái gây nên cảm giác ở con người khi bằng cách nào đó trực tiếp\nhay gián tiếp tác động nên giác quan của con người.",
            "Vật chất là những vật cụ thể tồn tại trong thế giới chủ quan và khách quan.",
            "Khái niệm vật chất không có nghĩa gì khác hơn là thực tại khách quan tồn tại độc lập"
        ],
        "answer": 2
    },
    {
        "question": "Câu 2.2.0,2.17. Khẳng định: “vật chất là phức hợp những cảm giác của con người\", đó\nlà quan điểm của trường phái triết học nào?",
        "options": [
            "Chủ nghĩa duy tâm khách quan.",
            "Chủ nghĩa duy tâm chủ quan.",
            "Chủ nghĩa duy vật biện chứng.",
            "Chủ nghĩa duy vật siêu hình."
        ],
        "answer": 1
    },
    {
        "question": "Câu 2.2.0,2.18. Theo quan điểm của chủ nghĩa duy vật biện chứng, khẳng định nào\nsau đây là đúng?",
        "options": [
            "Vận động là tuyệt đối, đứng im là tương đối, tạm thời.",
            "Vận động và đứng im phải được quan niệm là tuyệt đối.",
            "Vận động và đứng im chỉ là tương đối, tạm thời.",
            "Đứng im là tuyệt đối, vận động là tương đối."
        ],
        "answer": 0
    },
    {
        "question": "Câu 2.2.0,2.20. Nguồn gốc vận động của vật chất theo triết học Mác - Lênin là:",
        "options": [
            "Ở bên ngoài sự vật hiện tượng do sự tương tác hay do sự tác động.",
            "Do ý thức tinh thần tư tưởng quyết định.",
            "Ở trong bản thân sự vật hiện tượng do sự tác động của các mặt, các yếu tố trong sự vật\nhiện tượng gây ra.",
            "Do các lực lượng siêu nhiên tạo ra."
        ],
        "answer": 2
    },
    {
        "question": "Câu 2.2.0,2.21. Quan điểm nào cho rằng, không gian, thời gian, vận động không liên\nquan với nhau và ở bên ngoài vật chất?",
        "options": [
            "Chủ nghĩa duy vật siêu hình.",
            "Chủ nghĩa duy vật biện chứng.",
            "Chủ nghĩa duy tâm khách quan.",
            "Chủ nghĩa duy vật chất phác."
        ],
        "answer": 0
    },
    {
        "question": "Câu 2.2.0,2.22. Bản chất của ý thức theo quan điểm của chủ nghĩa duy vật biện chứng\nlà gì?",
        "options": [
            "Hình ảnh của thế giới chủ quan và khách quan.",
            "Quá trình vật chất vận động bên trong bộ脑.",
            "Sự phản ánh tích cực, năng động, sáng tạo thế giới khách quan vào trong đầu óc con\nngười.",
            "Tiếp nhận và xử lý các kích thích từ môi trường bên ngoài vào bên trong bộ脳."
        ],
        "answer": 2
    },
    {
        "question": "Câu 2.2.0,2.23. Yếu tố nào sau đây thuộc về hình thái ý thức xã hội?",
        "options": [
            "Đạo đức.",
            "Tôn giáo.",
            "Nhà nước.",
            "Giáo hội."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.30. Trong thực tiễn đổi mới ở Việt Nam, việc phát triển kinh tế thị trường\nđịnh hướng xã hội chủ nghĩa phản ánh nguyên lý nào của học thuyết hình thái kinh tế\n- xã hội?",
        "options": [
            "Quan hệ sản xuất quyết định lực lượng sản xuất.",
            "Lực lượng sản xuất quyết định quan hệ sản xuất.",
            "Ý thức xã hội quyết định tồn tại xã hội.",
            "Chính trị quyết định kinh tế."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.31. Khi nghiên cứu sự phát triển của một xã hội, nhà nghiên cứu trước hết\ncần phải xem xét trình độ công cụ lao động, khoa học - kỹ thuật và năng lực của người\nlao động. Cách tiếp cận này dựa trên quan điểm nào dưới đây?",
        "options": [
            "Sản xuất vật chất giữ vai trò quyết định đối với đời sống xã hội.",
            "Ý thức xã hội quyết định tồn tại xã hội.",
            "Nhà nước quyết định sự phát triển kinh tế.",
            "Đạo đức quyết định phương thức sản xuất."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.32. Khi phân tích sự thay thế phương thức sản xuất phong kiến bằng tư\nbản chủ nghĩa, theo quan điểm duy vật lịch sử của chủ nghĩa Mác – Lênin, yếu tố nào\ngiữ vai trò quyết định?",
        "options": [
            "Sự phát triển của lực lượng sản xuất, đặc biệt là những biến đổi trong công cụ lao động,\nkỹ thuật sản xuất và trình độ tổ chức lao động, làm nảy sinh yêu cầu về một quan hệ sản\nxuất mới phù hợp hơn.",
            "Sự thay đổi trong ý thức xã hội, đặc biệt là sự phát triển của các tư tưởng tiến bộ, quan\nđiểm về tự do cá nhân và quyền kinh doanh trong xã hội tư bản.",
            "Sự biến đổi của kiến trúc thượng tầng chính trị, thông qua các cuộc cách mạng xã hội\nnhằm thiết lập nhà nước và thể chế phù hợp với giai cấp tư sản.",
            "Sự phát triển của các yếu tố văn hóa, giáo dục và đời sống tinh thần, tạo điều kiện hình"
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.34. Trong quá trình đẩy mạnh công nghiệp hóa, hiện đại hóa ở Việt Nam,\nchủ trương ưu tiên phát triển giáo dục, đào tạo và nâng cao chất lượng nguồn nhân\nlực thể hiện sự vận dụng trực tiếp quy luật nào của chủ nghĩa duy vật lịch sử?",
        "options": [
            "Sự biến đổi của cơ sở hạ tầng tất yếu kéo theo sự cải biến của kiến trúc thượng tầng.",
            "Sự phát triển của nhân tố trung tâm trong lực lượng sản xuất làm nảy sinh yêu cầu khách\nquan phải hoàn thiện các quan hệ kinh tế tương ứng.",
            "Sự tác động trở lại của kiến trúc thượng tầng là nhân tố quyết định tốc độ phát triển của\nphương thức sản xuất.",
            "Sự thay đổi của hình thái ý thức xã hội là điều kiện tiên quyết để xuất hiện phương thức"
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.35. Theo học thuyết hình thái kinh tế – xã hội của chủ nghĩa duy vật lịch\nsử, nguyên nhân có tính quy luật chủ yếu dẫn đến sự khủng hoảng và tan rã của mô\nhình xã hội chủ nghĩa ở Liên Xô là gì?",
        "options": [
            "Sự không phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất,\nlàm mâu thuẫn cơ bản trong phương thức sản xuất trở nên gay gắt và kìm hãm sự phát triển\nxã hội.",
            "Ý thức xã hội phát triển vượt trước tồn tại xã hội nên quyết định sự biến đổi của phương\nthức sản xuất.",
            "Tồn tại xã hội hoàn toàn độc lập với ý thức xã hội, do đó sự biến đổi của xã hội không\nchịu sự tác động của nhân tố tinh thần.",
            "Sự biến đổi của kiến trúc thượng tầng là nguyên nhân quyết định trực tiếp sự thay thế"
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.37. Theo quan điểm của triết học Mác – Lênin, việc Việt Nam đẩy mạnh\nhội nhập kinh tế quốc tế và mở rộng quan hệ hợp tác với các quốc gia để phát triển\nkinh tế phản ánh luận điểm nào dưới đây?",
        "options": [
            "Ý thức xã hội quyết định sự phát triển của tồn tại xã hội.",
            "Sự phát triển của lực lượng sản xuất đòi hỏi quan hệ sản xuất và các quan hệ kinh tế phải\nđược mở rộng, hoàn thiện cho phù hợp.",
            "Chính trị luôn giữ vai trò quyết định trực tiếp đối với sự phát triển kinh tế.",
            "Văn hóa là nhân tố quyết định sự phát triển của lực lượng sản xuất."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.38..Theo quan điểm của triết học Mác – Lênin về mối quan hệ giữa lực\nlượng sản xuất và quan hệ sản xuất, việc đẩy mạnh hiện đại hóa nông nghiệp làm cho\nnăng suất lao động tăng và trình độ của lực lượng sản xuất được nâng cao. Điều này\nđặt ra yêu cầu gì đối với quan hệ sản xuất?",
        "options": [
            "Giữ nguyên quan hệ sản xuất hiện có, không cần thay đổi khi lực lượng sản xuất phát\ntriển.",
            "Coi văn hóa là nhân tố quyết định trực tiếp đối với sự phát triển của lực lượng sản xuất.",
            "Xem ý thức xã hội là yếu tố quyết định sự phát triển của lực lượng sản xuất.",
            "Điều chỉnh, hoàn thiện quan hệ sản xuất để bảo đảm sự phù hợp với trình độ phát triển"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.3.0,2.39. Theo quan điểm của triết học Mác – Lênin về mối quan hệ giữa cơ sở\nhạ tầng và kiến trúc thượng tầng, việc đổi mới chương trình đào tạo đại học để đáp\nứng yêu cầu phát triển nguồn nhân lực trong bối cảnh mới phản ánh nội dung nào\ndưới đây?",
        "options": [
            "Kiến trúc thượng tầng có tính độc lập tương đối và tác động trở lại cơ sở hạ tầng, góp\nphần thúc đẩy sự phát triển kinh tế – xã hội.",
            "Lực lượng sản xuất quyết định hoàn toàn sự thay đổi của mọi yếu tố trong đời sống xã\nhội.",
            "Quan hệ sản xuất quyết định trực tiếp sự phát triển của giáo dục và đào tạo.",
            "Tất cả các đáp án."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.40. Trong quá trình phát triển kinh tế, một quốc gia tập trung đổi mới\ncông nghệ, nâng cao trình độ người lao động và cải tiến công cụ sản xuất. Theo quan\nđiểm của triết học Mác – Lênin, quốc gia đó đang tác động chủ yếu đến yếu tố nào của\nphương thức sản xuất?",
        "options": [
            "Quan hệ sản xuất.",
            "Lực lượng sản xuất.",
            "Kiến trúc thượng tầng.",
            "Quan hệ chính trị - xã hội."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.41. Trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư, sự phát triển\ncủa trí tuệ nhân tạo, công nghệ số và tự động hóa làm thay đổi phương thức lao động,\ncông cụ sản xuất và trình độ ứng dụng khoa học – kỹ thuật. Theo quan điểm của chủ\nnghĩa duy vật lịch sử, sự thay đổi này trước hết biểu hiện sự phát triển của yếu tố nào?",
        "options": [
            "Lực lượng sản xuất.",
            "Quan hệ sản xuất.",
            "Kiến trúc thượng tầng xã hội.",
            "Ý thức xã hội."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.42. Trong quá trình phát triển kinh tế - xã hội, một quốc gia tiến hành\nhoàn thiện hệ thống pháp luật, đổi mới cơ chế quản lý kinh tế và xây dựng các chính\nsách thúc đẩy các quan hệ sản xuất phát triển. Theo quan điểm của chủ nghĩa duy vật\nlịch sử, hoạt động này thể hiện luận điểm nào dưới đây?",
        "options": [
            "Kiến trúc thượng tầng tác động trở lại cơ sở hạ tầng.",
            "Cơ sở hạ tầng quyết định kiến trúc thượng tầng.",
            "Kiến trúc thượng tầng giữ vai trò quyết định đối với cơ sở hạ tầng.",
            "Ý thức xã hội quyết định sự vận động của đời sống kinh tế."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.43. Trong quá trình phát triển xã hội, khi cơ cấu kinh tế và các quan hệ\nsản xuất có sự biến đổi, kéo theo sự thay đổi của bộ máy nhà nước, hệ thống pháp luật\nvà các quan điểm chính trị. Theo quan điểm của chủ nghĩa duy vật lịch sử, nguyên\nnhân sâu xa của sự biến đổi trong kiến trúc thượng tầng là gì?",
        "options": [
            "Sự biến đổi của cơ sở hạ tầng.",
            "Sự thay đổi trong nhận thức, tư tưởng của cá nhân.",
            "Sự tác động ngẫu nhiên của các sự kiện lịch sử.",
            "Sự quyết định của các yếu tố tinh thần đối với đời sống xã hội."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.44. Trong quá trình phát triển kinh tế - xã hội, một quốc gia ban hành hệ\nthống pháp luật và chính sách quản lý không còn phù hợp với cơ cấu kinh tế hiện có,\nlàm cản trở hoạt động sản xuất, kinh doanh và sự phát triển của xã hội. Theo quan\nđiểm của chủ nghĩa duy vật lịch sử, tình huống trên phản ánh luận điểm\nnào dưới đây?.",
        "options": [
            "Kiến trúc thượng tầng cần phù hợp với cơ sở hạ tầng để thúc đẩy sự phát triển của xã\nhội.",
            "Kiến trúc thượng tầng giữ vai trò quyết định đối với cơ sở hạ tầng.",
            "Cơ sở hạ tầng hoàn toàn phụ thuộc vào kiến trúc thượng tầng.",
            "Cơ sở hạ tầng và kiến trúc thượng tầng tồn tại độc lập, không tác động lẫn nhau."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.45. Trong quá trình hội nhập quốc tế, Việt Nam vừa phát triển nền kinh\ntế thị trường định hướng xã hội chủ nghĩa, vừa xây dựng và hoàn thiện Nhà nước\npháp quyền xã hội chủ nghĩa. Theo quan điểm của chủ nghĩa duy vật lịch sử, ý nghĩa\nphương pháp luận quan trọng nhất của chủ trương này là gì?",
        "options": [
            "Chỉ ưu tiên phát triển kinh tế, các lĩnh vực khác sẽ tự phát triển.",
            "Chỉ cần hoàn thiện hệ thống chính trị là đủ để phát triển đất nước.",
            "Phải đồng thời phát triển cơ sở hạ tầng và xây dựng kiến trúc thượng tầng phù hợp, phát\nhuy vai trò định hướng, quản lý và thúc đẩy sự phát triển kinh tế - xã hội.",
            "Kiến trúc thượng tầng có thể thay thế hoàn toàn vai trò của cơ sở hạ tầng."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.3.0,2.46. Nhà nước ban hành chính sách bảo tồn và phát huy các giá trị văn hóa dân\ntộc nhằm góp phần phát triển du lịch, nâng cao đời sống nhân dân và thúc đẩy phát triển\nkinh tế - xã hội. Theo quan điểm của chủ nghĩa duy vật lịch sử, tình huống trên phản ánh\nnội triết học nào dưới đây?",
        "options": [
            "Kiến trúc thượng tầng có tính độc lập tương đối và tác động trở lại cơ sở hạ tầng theo\nhướng thúc đẩy sự phát triển kinh tế - xã hội.",
            "Lực lượng sản xuất là nhân tố quyết định trực tiếp sự phát triển của kiến trúc thượng\ntầng.",
            "Chính trị là nhân tố quyết định sự phát triển của nền kinh tế.",
            "Văn hóa giữ vai trò quyết định đối với sự phát triển của cơ sở hạ tầng."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.48. Khi nghiên cứu về sự phát triển của các xã hội trong lịch sử, chủ nghĩa\nMác - Lênin khẳng định rằng: “Mỗi hình thái kinh tế - xã hội có sự thống nhất giữa\nlực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng”. Vậy, ý nghĩa phương\npháp luận quan trọng nhất của quan điểm này là gì?",
        "options": [
            "Có thể áp dụng một mô hình phát triển xã hội giống nhau cho mọi quốc gia.",
            "Cần xem xét sự phát triển xã hội trong tính lịch sử - cụ thể, dựa trên điều kiện kinh tế,\nxã hội của từng quốc gia.",
            "Chỉ cần thay đổi kiến trúc thượng tầng là có thể thay đổi toàn bộ xã hội.",
            "Sự phát triển xã hội hoàn toàn phụ thuộc vào yếu tố tinh thần."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.49. Có ý kiến cho rằng: “Muốn xây dựng một xã hội phát triển chỉ cần\nthay đổi hệ thống chính trị và pháp luật, không cần quan tâm đến trình độ phát triển\ncủa lực lượng sản xuất”. Theo học thuyết hình thái kinh tế - xã hội, nhận định trên là\nđúng hay sai?",
        "options": [
            "Đúng, vì kiến trúc thượng tầng quyết định toàn bộ sự phát triển xã hội.",
            "Đúng, vì ý thức và chính trị có thể thay thế vai trò của kinh tế.",
            "Sai, vì sự phát triển xã hội trước hết phải dựa trên sự phát triển của phương thức sản\nxuất, trong đó lực lượng sản xuất giữ vai trò quyết định.",
            "Sai, vì quan hệ sản xuất không có vai trò trong sự phát triển xã hội."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.3.0,2.51. Thực tiễn nghiên cứu và vận dụng học thuyết hình thái kinh tế - xã hội\ncủa chủ nghĩa Mác - Lênin vào quá trình phát triển của một quốc gia cần phải dựa\ntrên yếu tố cơ bản nào?",
        "options": [
            "Có thể áp dụng nguyên mẫu mô hình phát triển của một quốc gia khác vì các hình thái\nkinh tế - xã hội đều vận động theo cùng một cách thức.",
            "Cần thay đổi kiến trúc thượng tầng chính trị là có thể tạo ra sự thay đổi căn bản của toàn\nbộ đời sống xã hội.",
            "Cần xuất phát từ điều kiện lịch sử cụ thể, trình độ phát triển của lực lượng sản xuất và\nyêu cầu hoàn thiện quan hệ sản xuất phù hợp.",
            "Vì kinh tế giữ vai trò quyết định nên có thể xem nhẹ vai trò của khoa học, văn hóa, chính"
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.3.0,2.52. Một quốc gia áp dụng nguyên mẫu mô hình phát triển kinh tế - xã hội\ncủa một nước khác mà không xem xét đến điều kiện lịch sử, trình độ phát triển kinh\ntế và đặc điểm văn hóa của mình. Theo học thuyết hình thái kinh tế - xã hội, hạn chế\ncơ bản của cách tiếp cận này là gì?",
        "options": [
            "Chưa nhận thức đầy đủ tính phổ biến của các quy luật phát triển xã hội nên không thể\náp dụng kinh nghiệm quốc tế.",
            "Vi phạm nguyên tắc phương pháp luận về việc phải xuất phát từ điều kiện lịch sử - cụ\nthể và sự phù hợp giữa quan hệ sản xuất với lực lượng sản xuất.",
            "Phủ nhận hoàn toàn vai trò của kiến trúc thượng tầng trong sự phát triển của xã hội.",
            "Không đánh giá đúng vai trò quyết định tuyệt đối của chính trị đối với sự phát triển kinh"
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.4.0,2.54. Một nhà nghiên cứu nhận định: “Sự thay đổi của phương thức sản xuất\ntrong lịch sử chủ yếu bắt nguồn từ sự thay đổi của quan hệ sở hữu; khi quan hệ sở hữu thay\nđổi thì phương thức sản xuất tất yếu thay đổi theo.” Nhận định trên được đánh giá như thế\nnào theo quan điểm của chủ nghĩa duy vật lịch sử?",
        "options": [
            "Đúng, vì quan hệ sở hữu là toàn bộ nội dung của quan hệ sản xuất và quyết định trực tiếp phương\nthức sản xuất.",
            "Đúng, vì quan hệ sản xuất quyết định sự phát triển của lực lượng sản xuất trong mọi điều kiện\nlịch sử.",
            "Chưa chính xác, vì sự biến đổi của phương thức sản xuất bắt nguồn từ sự phát triển của lực\nlượng sản xuất, làm nảy sinh yêu cầu điều chỉnh quan hệ sản xuất; trong đó quan hệ sở hữu chỉ là\nmột bộ phận của quan hệ sản xuất.",
            "Sai, vì quan hệ sản xuất không có bất kỳ vai trò nào trong sự vận động của phương thức sản"
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.4.0,2.55. Theo chủ nghĩa duy vật lịch sử, nhận định nào sau đây đúng nhất về vai trò\ncủa công cụ lao động trong lực lượng sản xuất?",
        "options": [
            "Công cụ lao động là yếu tố quan trọng nhất, quyết định trực tiếp toàn bộ sự phát triển của lực\nlượng sản xuất.",
            "Công cụ lao động là tiêu chuẩn cơ bản nhất để đánh giá sự phát triển của xã hội vì nó quyết định\nphương thức sản xuất.",
            "Công cụ lao động là yếu tố động của lực lượng sản xuất, phản ánh trình độ chinh phục tự nhiên\ncủa con người nhưng chỉ phát huy tác dụng thông qua người lao động.",
            "Công cụ lao động giữ vai trò trung gian trong sản xuất, còn sự phát triển của lực lượng sản xuất"
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.4.0,2.57. Động lực sâu xa của sự thay thế các hình thái kinh tế – xã hội trong lịch sử\nlà gì?",
        "options": [
            "Sự thay đổi của các tư tưởng chính trị.",
            "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất.",
            "Sự thay đổi của phong tục, tập quán xã hội.",
            "Sự thay đổi trong nhận thức của con người."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.4.0,2.58. Có ý kiến cho rằng: \"Chỉ cần thay đổi kiến trúc thượng tầng thì nền kinh tế\nsẽ phát triển, không phụ thuộc vào cơ sở hạ tầng.\" Theo chủ nghĩa duy vật lịch sử, đánh giá\nnào dưới đây là đúng nhất?",
        "options": [
            "Đồng ý, vì kiến trúc thượng tầng quyết định trực tiếp cơ sở hạ tầng.",
            "Đồng ý, vì thay đổi kiến trúc thượng tầng luôn làm kinh tế phát triển.",
            "Không đồng ý, vì kiến trúc thượng tầng chỉ phản ánh cơ sở hạ tầng.",
            "Không đồng ý, vì kiến trúc thượng tầng chỉ tác động trở lại cơ sở hạ tầng và chỉ phát huy hiệu"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.4.0,2.59. Có quan điểm cho rằng: \"Sự chuyển biến từ chủ nghĩa tư bản lên chủ nghĩa\nxã hội chủ yếu là kết quả của ý chí chính trị và cải cách thể chế.\" Theo chủ nghĩa duy vật lịch\nsử, đánh giá nào dưới đây là phù hợp nhất?",
        "options": [
            "Không đồng ý, vì sự thay thế chủ nghĩa tư bản chỉ trở thành tất yếu khi mâu thuẫn giữa lực\nlượng sản xuất và quan hệ sản xuất phát triển đến trình độ nhất định.",
            "Đồng ý, vì ý chí chính trị là nhân tố quyết định sự thay đổi của mọi hình thái kinh tế – xã hội.",
            "Đồng ý, vì cải cách thể chế có thể thay thế quy luật phát triển khách quan của lịch sử.",
            "Không đồng ý, vì mọi biến đổi xã hội chỉ do đấu tranh giai cấp quyết định."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.4.0,2.61. Có ý kiến cho rằng: \"Chỉ cần nắm quyền lực chính trị thì có thể tạo ra mọi biến\nđổi kinh tế, bất kể điều kiện kinh tế hiện có.\" Theo chủ nghĩa duy vật lịch sử, đánh giá nào đúng\nnhất?",
        "options": [
            "Đồng ý, vì chính trị quyết định trực tiếp sự phát triển kinh tế.",
            "Không đồng ý, vì chính trị chỉ phát huy vai trò khi phù hợp với cơ sở hạ tầng; nó tác động trở\nlại nhưng không thay thế vai trò quyết định của cơ sở hạ tầng.",
            "Đồng ý, vì kiến trúc thượng tầng luôn giữ vai trò quyết định đối với cơ sở hạ tầng.",
            "Không đồng ý, vì chính trị không có ảnh hưởng đến sự phát triển kinh tế."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.4.0,2.62. Theo chủ nghĩa duy vật lịch sử, nhận định nào giải thích đúng nhất cơ sở lý\nluận của những thành tựu trong công cuộc đổi mới ở Việt Nam?",
        "options": [
            "Thành công chủ yếu do thay đổi hệ tư tưởng xã hội.",
            "Thành công là kết quả của việc chính trị giữ vai trò quyết định tuyệt đối đối với kinh tế.",
            "Thành công gắn với việc điều chỉnh quan hệ sản xuất phù hợp hơn với trình độ phát triển của\nlực lượng sản xuất.",
            "Thành công chủ yếu do văn hóa trở thành nhân tố quyết định sự phát triển kinh tế."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.4.0,2.63. Khi nghiên cứu một hình thái kinh tế - xã hội, yếu tố nào sau đây cần được\nxem là cơ sở để giải thích bản chất và sự vận động của nó theo quan điểm của triết học Mác\n- Lênin?",
        "options": [
            "Hệ thống quan điểm tư tưởng chi phối đời sống xã hội.",
            "Các thiết chế chính trị và tổ chức quản lý xã hội.",
            "Phương thức sản xuất với sự thống nhất giữa lực lượng sản xuất và quan hệ sản xuất.",
            "Các đặc điểm văn hóa, tâm lý và truyền thống của cộng đồng."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.5.0,2.65. Theo quan điểm của chủ nghĩa duy vật lịch sử, nhận định nào sau đây\nlà đúng nhất về vai trò quyết định của phương thức sản xuất đối với sự phát triển xã\nhội?",
        "options": [
            "Phương thức sản xuất quyết định toàn bộ mọi biểu hiện của đời sống xã hội một cách\ntrực tiếp và tức thời.",
            "Phương thức sản xuất quyết định sự vận động và biến đổi của xã hội trong tính tổng thể,\nnhưng sự tác động đó thông qua các quan hệ xã hội khác nhau.",
            "Quan hệ sản xuất quyết định hoàn toàn sự phát triển của lực lượng sản xuất vì nó quy\nđịnh mục đích của sản xuất.",
            "Lực lượng sản xuất chỉ giữ vai trò quyết định trong xã hội nguyên thủy, còn các xã hội"
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.5.0,2.66. Theo phương pháp luận của chủ nghĩa duy vật lịch sử, sai lầm nào cần\ntránh khi vận dụng quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực\nlượng sản xuất?",
        "options": [
            "Điều chỉnh quan hệ sản xuất nhằm khai thác tiềm năng phát triển của lực lượng sản xuất\ntrên cơ sở những điều kiện lịch sử - xã hội cụ thể.",
            "Thừa nhận khả năng quan hệ sản xuất có thể tác động thúc đẩy hoặc kìm hãm sự phát\ntriển của lực lượng sản xuất tùy thuộc vào mức độ phù hợp.",
            "Thiết lập một kiểu quan hệ sản xuất mới với trình độ phát triển cao hơn nhằm tạo ra sự\nphát triển tất yếu của lực lượng sản xuất, bất chấp điều kiện vật hiện có.",
            "Nhận thức sự phù hợp giữa quan hệ sản xuất và lực lượng sản xuất là một quá trình vận"
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.5.0,2.68. Theo phương pháp luận của chủ nghĩa duy vật lịch sử, khi vận dụng\nnguyên lý về mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng để phân tích\nthực tiễn xã hội, quan điểm nào sau đây là phù hợp nhất?",
        "options": [
            "Coi cơ sở hạ tầng giữ vai trò quyết định đối với kiến trúc thượng tầng, vì vậy sự biến\nđổi của các quan hệ kinh tế là điều kiện đủ để giải thích toàn bộ sự vận động của đời sống\nxã hội.",
            "Coi kiến trúc thượng tầng có khả năng định hướng và điều chỉnh các quan hệ xã hội, do\nđó trong nhiều trường hợp có thể giữ vai trò quyết định đối với sự biến đổi của cơ sở hạ\ntầng.",
            "Xem xét sự quy định của cơ sở hạ tầng đối với kiến trúc thượng tầng trong tính biện\nchứng với sự tác động trở lại của kiến trúc thượng tầng, đồng thời đặt quá trình này trong\nnhững điều kiện lịch sử - xã hội cụ thể.",
            "Coi cơ sở hạ tầng và kiến trúc thượng tầng là hai phương diện có vai trò tương đương"
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.5.0,2.69. Trong việc vận dụng học thuyết hình thái kinh tế – xã hội của chủ\nnghĩa Mác – Lênin vào thực tiễn, sai lầm nghiêm trọng nhất là gì?",
        "options": [
            "Nhận thức các quy luật xã hội trong điều kiện lịch sử cụ thể.",
            "Kết hợp giữa phát triển kinh tế với phát triển chính trị, văn hóa, xã hội.",
            "Coi quy luật phát triển xã hội là bất biến, áp dụng một mô hình phát triển giống nhau\ncho mọi quốc gia.",
            "Xuất phát từ thực tiễn để điều chỉnh chính sách phát triển."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.6.0,2.71. Nếu được giao xây dựng mô hình phát triển kinh tế - xã hội bền vững\ntrong bối cảnh Cách mạng công nghiệp lần thứ tư, phương án nào thể hiện đúng\nphương pháp luận của học thuyết hình thái kinh tế - xã hội theo quan điểm của chủ\nnghĩa duy vật lịch sử?",
        "options": [
            "Ưu tiên phát triển khoa học – công nghệ hiện đại như yếu tố quyết định duy nhất của sự\nphát triển xã hội.",
            "Kết hợp phát triển lực lượng sản xuất hiện đại với từng bước hoàn thiện quan hệ sản xuất\nphù hợp với trình độ phát triển của lực lượng sản xuất.",
            "Vận dụng nguyên mẫu mô hình phát triển của các quốc gia tiên tiến để rút ngắn quá trình\nphát triển.",
            "Tập trung tối đa vào tăng trưởng kinh tế trước mắt, sau đó mới giải quyết các vấn đề xã"
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.6.0,2.72. Trong quá trình hoàn thiện nền kinh tế thị trường định hướng xã hội\nchủ nghĩa ở Việt Nam, chính sách nào phản ánh đúng nhất việc vận dụng quy luật\nquan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất?",
        "options": [
            "Mở rộng sở hữu nhà nước trong mọi lĩnh vực để bảo đảm định hướng xã hội chủ nghĩa.",
            "Ưu tiên phát triển lực lượng sản xuất, còn quan hệ sản xuất sẽ có cơ chế tự thích ứng mà\nkhông cần cải cách thể chế.",
            "Hoàn thiện thể chế nhằm đa dạng hóa hình thức sở hữu, phát triển các thành phần kinh\ntế và điều chỉnh quan hệ sản xuất theo yêu cầu phát triển lực lượng sản xuất.",
            "Duy trì ổn định quan hệ sản xuất hiện hành nhằm tránh biến động kinh tế - xã hội."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.6.0,2.74. Nếu được giao nhiệm vụ là thành viên Ban Chỉ đạo Chuyển đổi số quốc\ngia, mô hình nào dưới đây phản ánh đúng nhất việc vận dụng học thuyết hình thái\nkinh tế – xã hội vào quá trình chuyển đổi số ở Việt Nam?",
        "options": [
            "Ưu tiên phát triển lực lượng sản xuất số thông qua đầu tư công nghệ và hạ tầng; việc\nhoàn thiện quan hệ sản xuất được thực hiện theo tiến độ phát triển kinh tế.",
            "Kết hợp cải cách thể chế, phát triển nguồn nhân lực và ứng dụng công nghệ số nhằm tạo\nđộng lực thúc đẩy tăng trưởng kinh tế.",
            "Phân tích điều kiện lịch sử – cụ thể, phát triển đồng bộ lực lượng sản xuất số, hoàn thiện\nquan hệ sản xuất và đổi mới kiến trúc thượng tầng trên cơ sở tổng kết thực tiễn.",
            "Tiếp thu mô hình chuyển đổi số của các quốc gia phát triển, đồng thời điều chỉnh chính"
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.1.0,2.75. Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội\nnào?",
        "options": [
            "Cộng sản nguyên thủy.",
            "Chiếm hữu nô lệ.",
            "Phong kiến.",
            "Tư bản chủ nghĩa."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.1.0,2.77. Cơ sở hình thành và phân chia giai cấp trong xã hội là do nguyên nhân\nnào?",
        "options": [
            "Chiếm hữu tư nhân về tư liệu sản xuất.",
            "Chiến tranh của các bộ lạc.",
            "Sản xuất nông nghiệp phát triển.",
            "Tất cả các đáp án đều đúng."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.1.0,2.78. “Cuộc đấu tranh của quần chúng lao động bị áp bức, bóc lột chống lại\ngiai cấp áp bức, bóc lột nhằm lật đổ ách thống trị của chúng” thuộc khái niệm nào\ndưới đây?",
        "options": [
            "Cải cách xã hội.",
            "Đảo chính.",
            "Đấu tranh giai cấp.",
            "Liên minh giai cấp."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.1.0,2.79. Hình thức cộng đồng người nào hình thành khi xã hội bắt đầu có sự\nphân chia thành giai cấp?",
        "options": [
            "Thị tộc",
            "Bộ lạc",
            "Bộ tộc",
            "Dân tộc"
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.1.0,2.80. Sự hình thành dân tộc phổ biến trong lịch sử gắn với xã hội nào?",
        "options": [
            "Xã hội phong kiến.",
            "Sự hình thành và phát triển của chủ nghĩa tư bản.",
            "Phong trào công nhân và cách mạng vô sản.",
            "Xã hội cổ đại."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.1.0,2.82. Đặc điểm hình thành Dân tộc ở Phương Tây:",
        "options": [
            "Giống như các dân tộc ở Phương Đông.",
            "Gắn liền với sự hình thành và phát triển của chủ nghĩa tư bản.",
            "Ra đời từ thời kỳ nguyên thủy.",
            "Ra đời cùng với thời kỳ phong kiến."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.1.0,2.83. Đặc điểm hình thành Dân tộc ở Phương Đông:",
        "options": [
            "Ra đời sớm hơn ở Phương Tây và không gắn với sự ra đời của chủ nghĩa tư bản.",
            "Ra đời giống như các dân tộc ở Phương Tây.",
            "Ra đời từ thời kỳ nguyên thủy.",
            "Ra đời cùng với sự hình thành và phát triển của chủ nghĩa tư bản."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.2.0,2.84. Đâu không phải là đặc trưng cơ bản của một giai cấp?",
        "options": [
            "Giai cấp là những tập đoàn người có địa vị kinh tế - xã hội khác nhau trong một hệ thống\nsản xuất xã hội nhất định trong lịch sử.",
            "Dấu hiệu chủ yếu quy đinh địa vị kinh tế-xã hội của các giai cấp là các mối quan hệ kinh\ntế - vật chất giữa các tập đoàn người trong phương thức sản xuất.",
            "Thực chất của quan hệ giai cấp là quan hệ giữa bóc lột và bị bóc lột.",
            "Giai cấp là những tập đoàn người khác nhau về sở thích, ngôn ngữ."
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.2.0,2.86. Mâu thuẫn đối kháng giữa các giai cấp là do:",
        "options": [
            "Sự khác nhau về tư tưởng, lối sống.",
            "Sự đối lập về lợi ích cơ bản – lợi ích kinh tế.",
            "Sự khác nhau giữa giàu và nghèo.",
            "Sự khác nhau về mức thu nhập."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.2.0,2.87. Theo chủ nghĩa duy vật lịch sử, giai cấp nắm giữ quyền lực nhà nước\nlà giai cấp nào?",
        "options": [
            "Có tư tưởng cách mạng và tiên tiến nhất.",
            "Đại biểu cho ý chí của cộng đồng xã hội.",
            "Nắm giữ tư liệu sinh hoạt chủ yếu của xã hội.",
            "Nắm giữ tư liệu sản xuất chủ yếu của xã hội."
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.2.0,2.88. Sự ra đời của giai cấp trong lịch sử có ý nghĩa như thế nào?",
        "options": [
            "Là một bước tiến của lịch sử.",
            "Là một sai lầm của lịch sử.",
            "Là một phạm trù của lịch sử.",
            "Là một dấu ấn của lịch sử."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.2.0,2.89. Vai trò của đấu tranh giai cấp trong lịch sử nhân loại:",
        "options": [
            "Là động lực cơ bản của sự phát triển xã hội.",
            "Là một động lực trực tiếp, quan trọng của sự phát triển xã hội trong các xã hội có giai\n\ncấp.",
            "Thay thế các hình thái kinh tế - xã hội từ thấp đến cao.",
            "Lật đổ và thay đổi người cầm quyền."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.2.0,2.90. Nội dung nào dưới đây không phải là vai trò của đấu tranh giai cấp\ntrong xã hội có giai cấp?",
        "options": [
            "Nhằm mục đích thay đổi người cầm quyền.",
            "Đấu tranh giai cấp là động lực trực tiếp, quan trọng của lịch sử.",
            "Đấu tranh giai cấp là động lực để phát triển của xã hội có đối kháng giai cấp.",
            "Đấu tranh giai cấp có tác dụng cải tạo xã hội, xoá bỏ các lực lượng xã hội phản động và cải"
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.2.0,2.92. Cuộc đấu tranh giai cấp của giai cấp vô sản là:",
        "options": [
            "Chống lại xã hội phong kiến, xã hội cũ.",
            "Nhằm mục đích cuối cùng là thiết lập quyền thống trị của giai cấp vô sản, cải tạo xã hội\n\ncũ, xây dựng thành công xã hội mới.",
            "Cuộc đấu tranh gay go, quyết liệt nhất nhằm thiết lập nền chuyên chính vô sản, cải tạo\n\ntriệt để xã hội cũ, xoá bỏ mọi đối kháng giai cấp, xây dựng thành công xã hội cộng sản chủ\nnghĩa và đồng thời là cuộc đấu tranh giai cấp cuối cùng trong lịch sử.",
            "Nhằm thay đổi người cầm quyền."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.2.0,2.93. Đặc điểm nào sau đây đóng vai trò quan trọng nhất, quy định đặc\ntrưng của cộng đồng dân tộc?",
        "options": [
            "Lãnh thổ và kinh tế.",
            "Kinh tế và văn hóa.",
            "Lãnh thổ và ngôn ngữ.",
            "Kinh tế và ngôn ngữ."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.2.0,2.94. Theo quan điểm của triết học Mác - Lênin, nguyên nhân khách quan\ncủa đấu tranh giai cấp là gì?",
        "options": [
            "Do một lý thuyết khoa học về giai cấp thúc đẩy quần chúng nhân dân nổi dậy.",
            "Do sự lôi kéo của một thủ lĩnh có uy tín trong nhân dân phát động và lãnh đạo.",
            "Do sự nghèo khổ của quần chúng nhân dân.",
            "Do mâu thuẫn giữa trình độ phát triển của lực lượng sản xuất xã hội với quan hệ sản"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.2.0,2.96. Chọn đáp án SAI về mối quan hệ giữa giai cấp, dân tộc và nhân loại\ntheo quan điểm của triết học Mác – Lênin.",
        "options": [
            "Trong xã hội có giai cấp, lợi ích nhân loại không tách rời với lợi ích giai cấp, lợi ích dân\ntộc và bị chi phối bởi lợi ích giai cấp và dân tộc.",
            "Sự tồn tại của nhân loại là tiền đề, là điều kiện tất yếu thường xuyên của sự tồn tại dân\ntộc và giai cấp.",
            "Sự phát triển về mọi mặt của nhân loại tạo ra những điều kiện thuận lợi cho cuộc đấu\ntranh giải phóng dân tộc và giai cấp.",
            "Nhân loại đứng trên giai cấp và dân tộc, còn giai cấp và dân tộc có mối quan hệ biện"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.2.0,2.97. Chọn đáp án SAI về mối quan hệ giữa giai cấp và dân tộc.",
        "options": [
            "Giai cấp quyết định dân tộc nhưng đồng thời vấn đề dân tộc có ảnh hưởng lớn đến vấn\nđề giai cấp.",
            "Đấu tranh giải phóng dân tộc là điều kiện, tiền đề cho đấu tranh giải phóng giai cấp.",
            "Giai cấp và dân tộc có mối quan hệ biện chứng, tác động qua lại lẫn nhau.",
            "Giai cấp và dân tộc là những phạm trù chỉ các quan hệ xã hội khác nhau nên không có"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.2.0,2.98. Trong các đặc trưng của giai cấp thì đặc trưng nào bao trùm và chi\nphối các đặc trưng khác?",
        "options": [
            "Khác nhau về quan hệ sở hữu tư liệu sản xuất của xã hội.",
            "Khác nhau về vai trò trong tổ chức, quản lý sản xuất.",
            "Khác nhau về cách thức hưởng thụ phần của cải xã hội.",
            "Khác nhau về địa vị trong phương thức sản xuất."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.99. Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, giai cấp\n\ncông nhân có sự biến đổi mạnh mẽ về cơ cấu ngành nghề, tăng nhanh số lượng\nlao động trong các ngành công nghiệp công nghệ cao. Hiện tượng này phản ánh\ntrực tiếp sự vận động của cơ cấu giai cấp dưới tác động của nhân tố nào sau\nđây?",
        "options": [
            "Sự áp đặt ý chí chính trị từ kiến trúc thượng tầng xã hội.",
            "Sự biến mất của chế độ sở hữu tư nhân về tư liệu sản xuất.",
            "Quá trình công nghiệp hóa, hiện đại hóa và Cách mạng công nghiệp lần thứ tư.",
            "Xu hướng hòa nhập của các giai cấp vào một tập đoàn duy nhất."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.3.0,2.100. Sau năm 1986, Việt Nam chuyển dịch từ nền kinh tế kế hoạch\n\nhóa tập trung bao cấp sang kinh tế thị trường định hướng xã hội chủ nghĩa. Sự\nxuất hiện của tầng lớp doanh nhân bên cạnh giai cấp công nhân và nông dân là\nminh chứng thực tế cho luận điểm nào của triết học Mác - Lênin?",
        "options": [
            "Sự biến đổi của kết cấu giai cấp bị quyết định bởi sự biến đổi của cơ cấu kinh tế\nnhiều thành phần.",
            "Đấu tranh giai cấp đã kết thúc và chuyển sang trạng thái hợp tác.",
            "Giai cấp công nhân đã chuyển giao vai trò lãnh đạo cách mạng cho tầng lớp doanh\nnhân.",
            "Nhà nước xã hội chủ nghĩa đã hoàn thành mục tiêu xóa bỏ bóc lột giai cấp."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.101. Dự án “Đường dây 500kV mạch 3 Quảng Trạch - Phố Nối” hoàn\n\nthành thần tốc năm 2024 có đóng góp to lớn của các kỹ sư, chuyên gia công nghệ\n(trí thức) phối hợp cùng lực lượng công nhân ngành điện lực. Xét dưới góc độ\ntriết học, sự hợp tác này biểu hiện thực tiễn cho nội dung nào?",
        "options": [
            "Sự xóa nhòa ranh giới lao động chân tay và lao động trí óc trong thời kỳ quá độ.",
            "Khối liên minh giữa giai cấp công nhân và tầng lớp trí thức trong thời kỳ quá độ.",
            "Sự tan rã của kết cấu giai cấp cũ dưới áp lực của kinh tế thị trường.",
            "Sự hình thành một kiểu giai cấp mới thay thế giai cấp công nhân truyền thống."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.102. Để thực hiện “Chương trình mục tiêu quốc gia phát triển kinh\n\ntế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021 - 2030”,\nNhà nước Việt Nam đã đầu tư mạnh mẽ vào cơ sở hạ tầng giao thông và giáo\ndục tại Tây Bắc và Tây Nguyên. Chính sách này vận dụng nguyên lý nào của\nchủ nghĩa duy vật lịch sử về mối quan hệ giai cấp - dân tộc?",
        "options": [
            "Giải quyết vấn đề dân tộc phải bắt đầu từ việc xóa bỏ áp bức giai cấp bằng bạo\n\nlực.",
            "Đồng hóa các nền văn hóa của đồng bào thiểu số vào một khuôn mẫu văn hóa duy\n\nnhất của Quốc gia.",
            "Giải quyết vấn đề dân tộc gắn liền với nâng cao đời sống vật chất và tinh thần của\ncác cộng đồng dân cư.",
            "Tách rời sự phát triển kinh tế khỏi các đặc trưng văn hóa - tâm lý dân tộc."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.3.0,2.103. Luận điểm của Chủ tịch Hồ Chí Minh khẳng định: “Nước độc\n\nlập mà dân không được hưởng hạnh phúc, tự do, thì độc lập cũng chẳng có nghĩa\nlý gì” phản ánh sự vận dụng sáng tạo mối quan hệ nào sau đây vào thực tiễn\ncách mạng Việt Nam?",
        "options": [
            "Sự thống nhất biện chứng giữa giải phóng dân tộc và giải phóng giai cấp, giải\nphóng con người.",
            "Sự tách biệt giữa độc lập chủ quyền quốc gia và quyền tự do cá nhân.",
            "Vai trò quyết định của lợi ích nhân loại đối với lợi ích giai cấp thống trị.",
            "Sự phủ nhận vai trò của nhà nước pháp quyền trong việc quản lý và điều hành xã"
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.105. Việc Đảng và Nhà nước ta khuyến khích phát triển kinh tế tư\n\nnhân, coi kinh tế tư nhân là một động lực quan trọng của nền kinh tế thị trường\nđịnh hướng xã hội chủ nghĩa tại Đại hội XIII thực chất là sự vận dụng quy luật\nnào vào kết cấu giai cấp Việt Nam?",
        "options": [
            "Xóa bỏ các giai cấp bóc lột để tiến thẳng lên chủ nghĩa cộng sản.",
            "Phủ nhận vai trò chủ đạo của thành phần kinh tế nhà nước.",
            "Hợp nhất giai cấp công nhân vào giai cấp tư sản để xóa bỏ mâu thuẫn đối kháng.",
            "Vận dụng quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.3.0,2.106. Các ngày lễ hội truyền thống như Giỗ Tổ Hùng Vương, Tết\n\nNguyên Đán được tổ chức trang trọng trên cả nước và trong cộng đồng kiều bào\nở nước ngoài là minh chứng cho đặc trưng nào của cộng đồng dân tộc Việt Nam?",
        "options": [
            "Sự bền vững về văn hóa, tâm lý, tính cách và ý thức nguồn cội dân tộc.",
            "Tính thống nhất về địa giới hành chính và phân chia giai cấp.",
            "Sự phụ thuộc của đời sống tinh thần vào công nghệ kỹ thuật phương Tây.",
            "Xu hướng hòa tan văn hóa bản địa vào xu thế toàn cầu hóa toàn diện."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.108. Trong bối cảnh toàn cầu hóa, biến đổi khí hậu đã gây ra hiện\n\ntượng xâm nhập mặn nghiêm trọng tại Đồng bằng sông Cửu Long. Việt Nam\nđã chủ động hợp tác với các quốc gia thuộc tiểu vùng sông Mê Công để chia sẻ\nnguồn nước. Việc này thể hiện sự vận dụng mối quan hệ nào?",
        "options": [
            "Sự áp đặt của lợi ích quốc gia lớn đối với lợi ích của quốc gia nhỏ hơn.",
            "Sự kết hợp hài hòa giữa lợi ích dân tộc (an ninh nguồn nước) và lợi ích nhân loại\n(bảo vệ môi trường sinh thái toàn cầu).",
            "Sự triệt tiêu mâu thuẫn giai cấp trong quan hệ ngoại giao quốc tế.",
            "Vai trò tự quyết của Việt Nam trước các vấn đề an ninh phi truyền thống."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.109. Trong tác phẩm “Sáng kiến vĩ đại”, V.I.Lênin đưa ra định nghĩa\n\ngiai cấp. Nếu một kỹ sư công nghệ tại một nhà máy liên doanh FDI sở hữu cổ\nphần nhỏ của công ty nhưng vai trò chính vẫn là trực tiếp vận hành hệ thống\nmáy móc, xét về mặt lý luận, thuộc tính nào quyết định địa vị giai cấp của người\nnày?",
        "options": [
            "Tỷ lệ cổ phần nhỏ mà họ sở hữu trong công ty.",
            "Mức lương và các khoản thưởng phúc lợi nhận được hàng tháng.",
            "Xuất thân gia đình của họ trong quá khứ.",
            "Quan hệ thực tế của họ đối với việc quản lý và vận hành trực tiếp lực lượng sản"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.3.0,2.111. Đại dịch COVID-19 bùng phát đã thúc đẩy Việt Nam triển khai\n\nứng dụng quản lý dân cư, tiêm chủng quốc gia (VNeID). Công nghệ này được\nchia sẻ và sử dụng thống nhất trên toàn lãnh thổ cho mọi công dân không phân\nbiệt thành phần dân tộc. Hiện tượng này chứng minh cho thuộc tính nào của\ndân tộc?",
        "options": [
            "Sự đồng hóa hành chính của nhà nước đối với các dân tộc thiểu số.",
            "Sự thống nhất về mặt quản lý nhà nước và pháp luật đối với toàn bộ cộng đồng\ndân tộc.",
            "Sự triệt tiêu bản sắc văn hóa riêng của các tộc người.",
            "Củng cố tính chất biệt lập về văn hóa của các vùng miền trong cả nước."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.112. Khi Việt Nam tham gia vào Hiệp định Đối tác Toàn diện và Tiến\n\nbộ xuyên Thái Bình Dương (CPTPP), chúng chấp nhận các tiêu chuẩn khắt\nkhe về lao động và môi trường. Hành động này phản ánh việc giải quyết mối\nquan hệ nào trong thực tiễn?",
        "options": [
            "Sự chủ động hội nhập, hài hòa lợi ích giai cấp, lợi ích dân tộc với các chuẩn mực\nchung của nhân loại.",
            "Sự hy sinh lợi ích quốc gia để phục vụ cho lợi ích toàn cầu.",
            "Sự mâu thuẫn giữa hệ tư tưởng xã hội chủ nghĩa và hệ tư tưởng tư bản chủ nghĩa.",
            "Sự tách biệt giữa luật pháp quốc gia và luật pháp quốc tế."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.3.0,2.114. Thực tiễn quá trình liên minh giai cấp ở Việt Nam hiện nay cho\n\nthấy, việc xây dựng các “Hợp tác xã nông nghiệp kiểu mới” đòi hỏi sự hợp tác\ngiữa người nông dân, các doanh nghiệp thu mua và các nhà khoa học nông\nnghiệp công nghệ cao. Bản chất của mối quan hệ này là gì?",
        "options": [
            "Sự cạnh tranh ngày càng khốc liệt giữa các thành phần kinh tế trong nước.",
            "Sự áp đặt mệnh lệnh hành chính của cơ quan quản lý nhà nước cấp tỉnh.",
            "Sự suy giảm vai trò của kinh tế tập thể ở khu vực nông thôn mới.",
            "Sự liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức trên"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.3.0,2.115. Một nhóm thanh niên Việt Nam tự hào chia sẻ các video clip giới\n\nthiệu trang phục áo dài và ẩm thực truyền thống… lên nền tảng mạng xã hội\ntoàn cầu TikTok thu hút hàng triệu lượt xem quốc tế. Hành động này phản ánh\nphương thức vận dụng thực tiễn nào sau đây?",
        "options": [
            "Phủ nhận xu hướng toàn cầu hóa để quay về lối sống cô lập, tự cung tự cấp.",
            "Giữ gìn và phát huy bản sắc văn hóa dân tộc thông qua các phương tiện truyền\nthông hiện đại của thời đại 4.0.",
            "Sự sùng bái thái quá công nghệ nước ngoài gây phương hại đến an ninh tư tưởng.",
            "Quá trình đồng hóa văn hóa Việt Nam vào văn hóa phương Tây."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.117. Trong thời kỳ quá độ, các mâu thuẫn giữa giai cấp công nhân và\n\ngiai cấp tư sản ở Việt Nam được giải quyết chủ yếu thông qua phương thức nào\nsau đây để bảo đảm sự ổn định chính trị?",
        "options": [
            "Sử dụng bạo lực vũ trang để làm giảm hiệu quả các chủ doanh nghiệp tư nhân.",
            "Quốc hữu hóa tài sản của các nhà đầu tư nước ngoài.",
            "Hợp tác và đấu tranh trong khuôn khổ pháp luật của Nhà nước pháp quyền xã hội\nchủ nghĩa.",
            "Khu biệt hóa và tách biệt hóa lợi ích giữa giai cấp công nhân với giai cấp tư sản."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.3.0,2.118. Việc thành lập các trường phổ thông dân tộc nội trú, bán trú tại\n\ncác địa bàn đặc biệt khó khăn vùng đồng bào dân tộc thiểu số thể hiện sự quan\ntâm của Đảng và Nhà nước ta trong việc giải quyết đặc trưng nào của dân tộc?",
        "options": [
            "Tạo ra sự đồng nhất về trình độ học vấn giữa thành thị và nông thôn.",
            "Nâng cao trình độ dân trí, phát triển nguồn nhân lực tại chỗ, củng cố nền tảng văn\nhóa dân tộc.",
            "Thay thế triệt để ngôn ngữ truyền thống của các tộc người bằng chữ quốc ngữ.",
            "Hạn chế quyền tự do di cư của đồng bào thiểu số sang các tỉnh khác."
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.3.0,2.119. Khi phân tích sự biến đổi của giai cấp nông nhân Việt Nam hiện\n\nnay, hiện tượng một bộ phận lớn lao động nông thôn chuyển dịch ra các thành\nphố lớn làm việc trong các công ty, nhà máy phản ánh xu hướng thực tiễn nào?",
        "options": [
            "Sự bần cùng hóa của người nông dân dưới tác động của thiên tai.",
            "Dấu hiệu của sự rạn nứt khối liên minh công - nông - trí thức.",
            "Quá trình vô sản hóa và chuyển dịch cơ cấu lao động từ nông nghiệp sang công\nnghiệp.",
            "Sự suy giảm vai trò của sản xuất nông nghiệp truyền thống ở Việt Nam."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.3.0,2.121. Nhiều trí thức trẻ Việt Nam sau khi hoàn thành chương trình\n\nđào tạo thạc sĩ, tiến sĩ tại nước ngoài đã tự nguyện trở về nước đầu tư khởi\nnghiệp trong lĩnh vực công nghệ xanh, nông nghiệp tuần hoàn. Hiện tượng thực\ntiễn này phản ánh điều gì?",
        "options": [
            "Ý thức trách nhiệm dân tộc sâu sắc của tầng lớp trí thức đối với sự nghiệp xây\ndựng đất nước.",
            "Sự suy giảm niềm tin của trí thức vào sự phát triển của khoa học phương Tây.",
            "Sự dự báo về sụp đổ của nền kinh tế tư bản chủ nghĩa trên quy mô toàn cầu.",
            "Sức mạnh của các biện pháp hành chính do Nhà nước ban hành."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.4.0,2.122. Hãy phân tích mâu thuẫn cơ bản trong định nghĩa giai cấp của\n\nV.I.Lênin dưới góc độ kinh tế: “tập đoàn này có thể chiếm đoạt lao động của tập\nđoàn khác, do chỗ họ có địa vị khác nhau trong một chế độ kinh tế - xã hội nhất\nđịnh”. Sự khác biệt về địa vị này được quyết định sâu xa nhất bởi yếu tố nào?",
        "options": [
            "Vai trò quản lý trực tiếp quy trình công nghệ của nhà máy.",
            "Cách thức phân phối và thụ hưởng của cải xã hội ít hay nhiều.",
            "Trình độ học vấn và văn bằng chuyên môn của người lao động.",
            "Quan hệ sở hữu đối với tư liệu sản xuất chủ yếu của xã hội."
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.4.0,2.124. Khi phân tích kết cấu xã hội - giai cấp trong thời kỳ quá độ lên\n\nchủ nghĩa xã hội ở nước ta, nhận định nào dưới đây phản ánh đúng bản chất\ncủa kết cấu này?",
        "options": [
            "Là một kết cấu đơn nhất, thuần nhất chỉ gồm giai cấp công nhân và nông dân đã\nđược đồng hóa.",
            "Là một kết cấu hoàn toàn ổn định tĩnh tại, không có sự chuyển dịch lao động giữa\ncác nhóm xã hội.",
            "Là một kết cấu đa dạng, phức tạp và có sự biến đổi mạnh mẽ do sự tồn tại của nền\nkinh tế nhiều thành phần.",
            "Là kết cấu đối kháng quyết liệt về mặt lợi ích giống như trong thời kỳ xã hội"
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.4.0,2.126. Nhận định nào dưới đây làm rõ bản chất luận điểm của Hồ Chí\n\nMinh về mối quan hệ giữa cách mạng vô sản ở chính quốc và cách mạng giải\nphóng dân tộc ở thuộc địa như “đôi cánh của một con chim”.?",
        "options": [
            "Cách mạng ở thuộc địa luôn bị động và phụ thuộc một chiều vào sự thắng lợi của\ncách mạng ở chính quốc.",
            "Cách mạng ở thuộc địa và chính quốc không có bất kỳ mối liên hệ nào về mặt lợi\ních giai cấp.",
            "Giải phóng giai cấp ở chính quốc là mục tiêu duy nhất quyết định mọi biến động\n\nlịch sử toàn cầu.",
            "Hai cuộc cách mạng có mối quan hệ bình đẳng, hỗ trợ, tác động biện chứng lẫn"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.4.0,2.127. Phân tích nguồn gốc sâu xa của sự hình thành giai cấp trong lịch\n\nsử, sự phát triển của công cụ sản xuất bằng kim loại cuối thời kỳ nguyên thủy\ncó tác động thế nào đến quan hệ xã hội?",
        "options": [
            "Thúc đẩy phân công lao động xã hội, tăng năng suất lao động, tạo ra của cải dư\nthừa tương đối và dẫn đến sự xuất hiện chế độ tư hữu.",
            "Làm giảm năng suất lao động xã hội, buộc con người phải quay lại lối sống hái\nlượm hoang dã.",
            "Xóa bỏ sự phân biệt giữa lao động trí óc và lao động chân tay.",
            "Tạo ra sự bình đẳng về mặt phân phối tài sản giữa các thành viên trong cộng đồng."
        ],
        "answer": 0
    },
    {
        "question": "Câu 3.4.0,2.129. Khi phân tích sự tác động biện chứng giữa giai cấp và dân tộc,\n\nnhận định nào dưới đây phản ánh đúng thế giới quan duy vật lịch sử?",
        "options": [
            "Dân tộc toàn quyền quyết định sự hình thành và tiêu vong của giai cấp.",
            "Giai cấp quyết định dân tộc, vấn đề dân tộc có ảnh hưởng quan trọng đến cuộc\nđấu tranh giai cấp.",
            "Giai cấp và dân tộc là hai phạm trù độc lập, không có bất kỳ sự tác động qua lại\nnào.",
            "Việc giải phóng dân tộc có thể thực hiện triệt để mà không cần quan tâm đến địa"
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.4.0,2.130. Tại sao trong lịch sử, giai cấp nông dân Việt Nam là lực lượng\n\ncách mạng đông đảo và kiên quyết nhất nhưng lại không thể tự mình lãnh đạo\ncuộc cách mạng giải phóng dân tộc đi đến thành công cuối cùng?",
        "options": [
            "Vì họ thiếu lòng yêu nước và ý chí đấu tranh chống ngoại xâm.",
            "Vì họ luôn bị áp bức bóc lột ít hơn so với giai cấp công nhân.",
            "Vì họ không đại diện cho phương thức sản xuất tiên tiến và không có hệ tư tưởng\nđộc lập, khoa học.",
            "Vì họ từ chối liên minh với giai cấp công nhân và tầng lớp trí thức."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3.4.0,2.132. Mâu thuẫn giai cấp chủ yếu ở Việt Nam hiện nay đang được giải\n\nquyết nhằm phục vụ cho mục tiêu chiến lược nào của đất nước?",
        "options": [
            "Ngăn chặn sự hình thành và phát triển của thành phần kinh tế tư nhân hướng đến\nxây dựng nền kinh tế nhà nước phát triển cao.",
            "Thiết lập nền chuyên chính vô sản bằng phương pháp bạo lực vũ trang trong nội\nbộ nhân dân.",
            "Đóng cửa nền kinh tế, hạn chế hội nhập quốc tế để tự bảo vệ đất nước trước những\nnguy cơ bên ngoài.",
            "Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa, xây dựng xã hội"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.5.0,2.134. Một số học giả phương Tây cho rằng: Trong nền kinh tế hiện đại,\n\nsự xuất hiện của tầng lớp “công nhân cổ trắng” (làm việc văn phòng, lương cao,\nsở hữu cổ phần) đã làm cho học thuyết giai cấp của triết học Mác lỗi thời, ranh\ngiới giai cấp đã hoàn toàn biến mất. Từ thế giới quan duy vật lịch sử, anh (chị)\nđánh giá quan điểm này như thế nào?",
        "options": [
            "Quan điểm này hoàn toàn đúng vì công nhân văn phòng hiện nay đã trở thành\nnhững nhà tư bản thực thụ.",
            "Đồng ý một nửa vì ranh giới giai cấp chỉ còn tồn tại ở những nước kém phát triển\ntrong nông nghiệp.",
            "Học thuyết giai cấp của Mác cần được thay thế bằng lý thuyết phân tầng xã hội\ndựa trên dấu ấn cá nhân.",
            "Quan điểm này sai lầm; sự thay đổi về mức lương hay tính chất công việc (lao"
        ],
        "answer": 3
    },
    {
        "question": "Câu 3.5.0,2.135. Đánh giá tầm quan trọng của tư tưởng Hồ Chí Minh về tính chủ\n\nđộng của cách mạng giải phóng dân tộc ở thuộc địa trước các điều chỉnh của\nthực tiễn lịch sử. Nhận định nào sau đây làm rõ ý nghĩa phương pháp luận của\ntư tưởng này đối với công cuộc phát triển đất nước hiện nay?",
        "options": [
            "Việt Nam cần tập trung phát triển nội lực, không nên quan tâm đến các nguồn lực\nvà xu thế toàn cầu.",
            "Khẳng định giá trị của tinh thần tự lực tự cường, khơi dậy khát vọng phát triển đất\nnước phồn vinh, hạnh phúc, kết hợp sức mạnh dân tộc với sức mạnh thời đại.",
            "Chứng minh rằng cách mạng Việt Nam nên đi sau và chỉ cần học hỏi mô hình của\ncác nước lớn.",
            "Phủ nhận hoàn toàn vai trò của các khối liên minh kinh tế quốc tế đối với sự phát"
        ],
        "answer": 1
    },
    {
        "question": "Câu 3.5.0,2.137. Từ thế giới quan duy vật lịch sử, anh (chị) đánh giá thế nào về quan điểm cho rằng: Toàn cầu hóa và hội nhập quốc tế sâu rộng sẽ làm biến mất hoàn toàn ranh giới quốc gia, bản sắc văn hóa dân tộc sẽ bị hòa tan vào văn hóa toàn cầu?",
        "options": [
            "Quan điểm này sai lầm, phiến diện; toàn cầu hóa làm tăng sự tương tác nhưng cũng khơi dậy ý thức tự khẳng định bản sắc dân tộc; bản sắc văn hóa độc đáo chính là thực lực để dân tộc hội nhập mà không bị hòa tan.",
            "Quan điểm này hoàn toàn đúng vì xu hướng toàn cầu hóa sẽ triệt tiêu bản sắc riêng.",
            "Quan điểm này đúng một phần vì ranh giới quốc gia đang mờ dần.",
            "Tất cả các đáp án trên đều sai."
        ],
        "answer": 0
    }
];
