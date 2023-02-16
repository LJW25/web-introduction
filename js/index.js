let myMovies = initMovieData();
document.getElementById('movie-table').innerHTML = makeTable(myMovies);
document.getElementById('movie-checkbox').innerHTML = makeCheckbox(myMovies);


document.getElementById("submit").onclick = getCntChecked;
document.getElementById("cancel").onclick = cancel;



// functions

function initMovieData(){
    //movie# = ['제목', '포스터', '줄거리', '바로가기'];
    let movie1 = ['보헤미안 랩소디', 'bohemianrapsody.jpg', '\“나는 스타가 되지 않을 것이다, 전설이 될 것이다\”<br>공항에서 수하물 노동자로 일하며 음악의 꿈을 키우던 이민자 출신의 아웃사이더 ‘파록버사라’ 보컬을 구하던 로컬 밴드에 들어가게 되면서 ‘프레디 머큐리’라는 이름으로 밴드 ‘퀸’을 이끌게 된다.<br>시대를 앞서가는 독창적인 음악과 화려한 퍼포먼스로 관중들을 사로잡으며 성장하던 ‘퀸’은 라디오와 방송에서 외면을 받을 것이라는 음반사의 반대에도 불구하고무려 6분 동안 이어지는 실험적인 곡 ‘보헤미안 랩소디’로 대성공을 거두며 월드스타 반열에 오른다.<br>그러나 독보적인 존재감을 뿜어내던 ‘프레디 머큐리’는 솔로 데뷔라는 유혹에 흔들리게 되고 결국 오랜 시간 함께 해왔던 멤버들과 결별을 선언하게 되는데…<br>세상에서 소외된 아웃사이더에서 전설의 록밴드 ‘퀸’이 되기까지,우리가 몰랐던 그들의 진짜 이야기가 시작된다!', 'https://movie.naver.com/movie/bi/mi/basic.naver?code=156464'];
    let movie2 = ['해리 포터와 혼혈 왕자', 'harry_potter.jpg', '어둠의 세력이 더욱 강력해져 머글 세계와 호그와트까지 위협해온다. 위험한 기운을 감지한 덤블도어 교수는 다가올 전투에 대비하기 위해 해리 포터와 함께 대장정의 길을 나선다. 볼드모트를 물리칠 수 있는 유일한 단서이자 그의 영혼을 나누어 놓은 7개의 호크룩스를 파괴하는 미션을 수행해야만 하는 것! 또한 덤블도어 교수는 호크룩스를 찾는 기억여행에 결정적 도움을 줄 슬러그혼 교수를 호그와트로 초청한다.', 'https://movie.naver.com/movie/bi/mi/basic.naver?code=67900'];
    let movie3 = ['어벤져스: 엔드게임','end_game.jpg',`인피니티 워 이후 절반만 살아남은 지구<br>마지막 희망이 된 어벤져스 먼저 떠난 그들을 위해 모든 것을 걸었다!<br>위대한 어벤져스 운명을 바꿀 최후의 전쟁이 펼쳐진다!`, 'https://movie.naver.com/movie/bi/mi/basic.naver?code=136900'];
    let movie4 = ['스파이더맨: 노 웨이 홈','spiderman.jpg','‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…','https://movie.naver.com/movie/bi/mi/basic.naver?code=208077'];
    let movie5 = ['센과 치히로의 행방불명', 'sen_and_chihiro.jpg', '금지된 세계의 문이 열렸다!<br>이사 가던 날, 수상한 터널을 지나자 인간에게는 금지된 신들의 세계로 오게 된 치히로..신들의 음식을 먹은 치히로의 부모님은 돼지로 변해버린다.<br>\“걱정마, 내가 꼭 구해줄게…\”<br>겁에 질린 치히로에게 다가온 정체불명의 소년 하쿠. 그의 따뜻한 말에 힘을 얻은 치히로는 인간 세계로 돌아가기 위해 사상 초유의 미션을 시작하는데…', 'https://movie.naver.com/movie/bi/mi/basic.naver?code=32686'];

    let movies = [movie1, movie2, movie3, movie4, movie5];
    return movies;
}

function makeTable(movies){
    let HTML_allMovies = `
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>포스터</th>
                            <th>줄거리</th>
                            <th>바로가기</th>
                        </tr>
                        `;
    for(let idx in movies){
        HTML_allMovies += addMovieInTable(idx, movies[idx]);
    }
    return HTML_allMovies
}

function addMovieInTable(idx, movie){
    idx++;
    let HTML_movie = `
                        <tr>
                            <td>${idx}</td>
                            <td>${movie[0]}</td>
                            <td><img src="../images/${movie[1]}" alt=""></td>
                            <td>${movie[2]}</td>
                            <td><a href="${movie[3]}">바로가기</a></td>
                        </tr>
    `;
    return HTML_movie;
}

function makeCheckbox(movies){
    let HTML_checkbox = ``;
    for(let idx in movies){
        HTML_checkbox += addMovieInCheckbox(idx, movies[idx]);
    }
    return HTML_checkbox
}

function addMovieInCheckbox(idx, movie){
    idx++;
    return `
        <input type='checkbox' name='movies' value='movie${idx}'/> ${movie[0]}<br>
    `;
}

function getCntChecked(){
    const query = 'input[name="movies"]:checked';
    const selectedElements = document.querySelectorAll(query);

    var name = document.getElementById('name').value;
    var text = `${name}님, 저와 ${selectedElements.length}개의 취향이 같으시네요!`;
    alert(text);
}

function cancel(){
    
}