document.addEventListener("DOMContentLoaded", function () {
    const columns = [
        document.getElementById("column1"),
        document.getElementById("column2"),
        document.getElementById("column3"),
        document.getElementById("column4"),
        document.getElementById("column5")
    ];

    const movies = [
        { title: "인셉션", genre: ["액션","모험","SF","스릴러"], poster: "인셉션.png", description: "꿈 속에서 벌어지는 환상적인 모험", rating: 4.5 },
        { title: "어벤져스: 엔드게임", genre: ["액션","SF"], poster: "어벤져스.png", description: "마블의 역대 최강의 결전", rating: 4.5 },
        { title: "라라랜드", genre: ["드라마","로맨스","음악"], poster: "라라랜드.png", description: "현대적인 음악 로맨스", rating: 4.5 },
        { title: "위플래쉬", genre: ["드라마","음악"], poster: "위플래시.png", description: "꿈과 열정 사이에서", rating: 4.5 },
        { title: "토이 스토리 3", genre: ["코미디","모험","판타지","애니"], poster: "토이스토리3.png", description: "감동적인 토이 스토리의 마지막 장", rating: 4.5 },
        { title: "인터스텔라", genre: ["SF", "드라마"], poster: "인터스텔라.png", description: "우주와 인류의 생존을 건 여정", rating: 4.7 },
        { title: "어바웃 타임", genre: ["코미디","로맨스", "판타지"], poster: "어바웃타임.png", description: "사랑과 시간을 넘나드는 판타지", rating: 4.5 },
        { title: "호빗", genre: ["모험", "판타지"], poster: "호빗.png", description: "호빗 '빌보 배긴스'와 동료들의 모험을 그린 작품", rating: 4.5 },
        { title: "다크 나이트", genre: ["범죄","액션", "드라마"], poster: "다크나이트.png", description: "고담 시티의 어둠을 벗어나라", rating: 4.5 },
        { title: "레옹", genre: ["액션", "드라마","범죄"], poster: "레옹.png", description: "소녀와 암살자의 독특한 우정", rating: 4.5 },
        { title: "포레스트 검프", genre: ["드라마"], poster: "포레스트검프.png", description: "인생은 마치 초콜릿 상자처럼", rating: 4.5 },
        { title: "라이언 일병 구하기", genre: ["액션","전쟁","드라마"], poster: "라이언일병구하기.png", description: "전쟁 속 인간적인 용기", rating: 4.5 },
        { title: "백 투 더 퓨처", genre: ["코미디","SF", "모험"], poster: "빽투더퓨처.png", description: "시간을 건너서, 재밌는 모험", rating: 4.5 },
        { title: "짱구 3D", genre: ["코미디","모험", "판타지","애니"], poster: "짱구3d.png", description: "짱구 최초 3D", rating: 4.0 },
        { title: "인사이드 아웃 2", genre: ["코미디","드라마","애니"], poster: "인사이드아웃２.png", description: "라엘리가 사춘기 소녀가 되어 돌아왔다", rating: 4.5 },
        { title: "극한직업", genre: ["액션","코미디"], poster: "극한직업.png", description: "적성을 찾은 경찰들의 잠복 영화", rating: 4.5 },
        { title: "나를 찾아줘", genre: ["스릴러"], poster: "나를찾아줘.png", description: "흥미로운 이야기를 더욱 팽팽하게 잡아당기는 데이빗 핀처의 장력.", rating: 4.1 },
        { title: "그린북", genre: ["코미디","드라마"], poster: "그린북.png", description: "누가 더 약자인지 서로의 불행을 경쟁하지 않는, 어른의 우정", rating: 4.5 },
        { title: "사운드 오브 뮤직", genre: ["드라마","고전", "음악"], poster: "사운드오브뮤직.png", description: "고전적인 노래와 거부할 수 없는 따뜻함으로 모든 사람들의 마음을 사로잡음", rating: 4.5 },
        { title: "한산", genre: ["전쟁", "실화"], poster: "한산.png", description: "이순신 장군의 서사", rating: 4.5 },
        { title: "덩케르크", genre: ["전쟁", "드라마"], poster: "덩케르크.png", description: "2차 세계대전, 생존영화", rating: 4.5 },
        { title: "미션 임파서블", genre: ["액션", "첩보"], poster: "미션임파서블.png", description: "시간과의 싸움을 보여주는 전형적 액션 첩보물", rating: 4.5 },
        { title: "범죄도시", genre: ["액션","범죄"], poster: "범죄도시.png", description: "조선족 범죄도시를 소탕하는 형사들의 이야기", rating: 4.5 },
        { title: "메리 포핀스", genre: ["음악","고전", "가족"], poster: "메리포핀스.png", description: "부모님의 애정관심이 고픈 뱅크스 남매에게 찾아온, 메리 포핀스", rating: 4.5 },
        { title: "비포 선라이즈", genre: ["로맨스"], poster: "비포선라이즈.png", description: "여행 중 우연히 만난 두 남녀가 딱 하루라는 제한된 시간 동안 사랑에 빠지는 이야기", rating: 4.5 },
        { title: "헥소 고지", genre: ["전쟁", "드라마","실화"], poster: "헥소고지.png", description: "2차 세계대전에 참여했던 실존 인물의 실화를 바탕으로 한 이야기", rating: 4.5 },
        { title: "존 윅", genre: ["액션"], poster: "존윅.png", description: "전설적인 킬러가 복수를 위해 다시 돌아와 펼치는 압도적 액션", rating: 4.5 },
        { title: "티파니에서 아침을", genre: ["고전", "로맨스"], poster: "티파니.png", description: "자유로운 영혼의 뉴욕에서 펼쳐지는 사랑과 우정의 이야기", rating: 4.5 },
        { title: "기생충", genre: ["스릴러", "드라마"], poster: "기생충.png", description: "가난한 가정이 부유한 집에 얽혀 벌어지는 비극적인 이야기", rating: 4.5 },
        { title: "데드풀과 울버린", genre: ["코미디", "액션"], poster: "데드풀.png", description: "데드풀이 예상치 못한 위기를 맞아 울버린과 함께 펼치는 액션 블록버스터", rating: 4.5 },
        { title: "윙카", genre: ["음악","판타지"], poster: "윙카.png", description: "마법사이자 초콜릿 메이커 '윌리 웡카'의 꿈은 디저트의 성지", rating: 4.5 },
        { title: "캐리비안의 해적", genre: ["모험", "판타지"], poster: "캐리비안의 해적.png", description: "대장장이 윌 터너가 해적 잭 스패로우를 만나 해적들과 싸우며 사랑을 쟁취한다는 내용", rating: 4.5 },
        { title: "듄", genre: ["SF", "모험"], poster: "듄.png", description: "듄을 지배하는 자가 우주를 지배한다!", rating: 4.5 },
        { title: "조커", genre: ["스릴러", "드라마"], poster: "조커.png", description: "이제껏 본 적 없는 진짜 '조커'를 만나라!", rating: 4.5 },
        { title: "알라딘", genre: ["음악","판타지", "모험"], poster: "알라딘.png", description: "지니와 함께 떠나는 신나는 모험", rating: 4.5 },
        { title: "윌터의 상상은 현실이 된다", genre: ["판타지", "드라마"], poster: "윌터.png", description: "누구보다 평범한 일상을 살던 월터가 겪는 특별한 생애 최고의 순간", rating: 4.5 },
        { title: "벤허", genre: ["모험", "고전"], poster: "벤허.png", description: "지니와 함께 떠나는 고전적인 모험", rating: 4.5 },
        { title: "쥬만지:새로운 세계", genre: ["코미디", "모험"], poster: "쥬만지.png", description: "보드게임에서 비디오 게임으로 돌아왔다!", rating: 4.5 },
        { title: "리틀포레스트", genre: ["드라마"], poster: "리틀포레스트.png", description: "우린 모두 쉼이 필요하다", rating: 4.5 },
        { title: "위대한 쇼맨", genre: ["음악", "모험"], poster: "위대한쇼맨.png", description: "보드게임에서 비디오 게임으로 돌아왔다!", rating: 4.5 },
        { title: "라스트홀리데이", genre: ["코미디", "드라마"], poster: "라스트홀리데이.png", description: "보드게임에서 비디오 게임으로 돌아왔다!", rating: 4.5 },
        { title: "뷰티인사이드", genre: ["코미디", "로맨스"], poster: "뷰티인사이드.png", description: "드라마도 좋지만 영화는 아주 깊은 울림을 준다.한효주 연기 대박!우린 사실 날마다 다른 모습이지 않을까?그리고 다름속에 늘 같은 내면을 지닌것은 아닐까", rating: 4.5 },
        { title: "도라에몽,진구와 지구교향곡", genre: ["코미디", "애니"], poster: "도라에몽.png", description: "마지막 음원을 다운받고 싶을정도로 좋았다", rating: 4.5 },
        { title: "100만달러의 펜타그램", genre: ["범죄","애니"], poster: "코난.png", description: "반전 맘에 듦", rating: 4.5 },
        { title: "플레닛", genre: ["SF"], poster: "플래닛.png", description: "러시아어라서 그랬나? 집중이 잘 안됨", rating: 3.5 },   
    ];

    function displayMovies(genre) {
        columns.forEach(column => column.innerHTML = ""); // Clear columns

        const filteredMovies = genre === "전체" ? movies : movies.filter(movie => movie.genre.includes(genre));

        filteredMovies.forEach((movie, index) => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("card-1");

            const movieFront = document.createElement("div");
            movieFront.classList.add("front-face-1");

            const movieImage = document.createElement("img");
            movieImage.src = movie.poster;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement("h3");
            movieTitle.textContent = movie.title;

            movieFront.appendChild(movieImage);
            movieFront.appendChild(movieTitle);

            const movieBack = document.createElement("div");
            movieBack.classList.add("back-face-1");

            movieBack.innerHTML = `
                <span>${movie.description}</span>
                <div class="rating-counter">Rating: ${movie.rating}</div>
                <div class="starpoint_wrap">
                    <div class="starpoint_box">
                        <label for="starpoint_${index * 10 + 1}" class="label_star" title="0.5"><span class="blind">0.5점</span></label>
                        <label for="starpoint_${index * 10 + 2}" class="label_star" title="1"><span class="blind">1점</span></label>
                        <label for="starpoint_${index * 10 + 3}" class="label_star" title="1.5"><span class="blind">1.5점</span></label>
                        <label for="starpoint_${index * 10 + 4}" class="label_star" title="2"><span class="blind">2점</span></label>
                        <label for="starpoint_${index * 10 + 5}" class="label_star" title="2.5"><span class="blind">2.5점</span></label>
                        <label for="starpoint_${index * 10 + 6}" class="label_star" title="3"><span class="blind">3점</span></label>
                        <label for="starpoint_${index * 10 + 7}" class="label_star" title="3.5"><span class="blind">3.5점</span></label>
                        <label for="starpoint_${index * 10 + 8}" class="label_star" title="4"><span class="blind">4점</span></label>
                        <label for="starpoint_${index * 10 + 9}" class="label_star" title="4.5"><span class="blind">4.5점</span></label>
                        <label for="starpoint_${index * 10 + 10}" class="label_star" title="5"><span class="blind">5점</span></label>
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 1}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 2}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 3}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 4}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 5}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 6}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 7}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 8}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 9}" class="star_radio">
                        <input type="radio" name="starpoint_${index}" id="starpoint_${index * 10 + 10}" class="star_radio">
                        <span class="starpoint_bg"></span>
                    </div>
                </div>
            `;

            movieElement.appendChild(movieFront);
            movieElement.appendChild(movieBack);

            // Add event listener to flip the card
            movieElement.addEventListener("click", () => {
                movieElement.classList.toggle("flip");
                setTimeout(() => {
                    movieElement.classList.remove("flip");
                }, 2500); // Card flips back after 2.5 seconds
            });

            // Prevent click on star rating from flipping the card
            const starRadios = movieBack.querySelectorAll('.star_radio');
            starRadios.forEach(star => {
                star.addEventListener('click', function(event) {
                    event.stopPropagation(); // Prevent the card from flipping
                });
            });

            columns[index % columns.length].appendChild(movieElement);
        });
    }

    // Genre buttons functionality
    document.querySelectorAll('.genre-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Remove 'active' class from all buttons
            document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');
            const genre = this.getAttribute('data-genre');
            displayMovies(genre);
        });
    });

    // Initial load
    displayMovies("전체");
});
