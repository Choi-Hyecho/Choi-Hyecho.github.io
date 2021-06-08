var navi = document.getElementsByTagName('nav')[0]
var swiper = new Swiper('.main_box', {
    effect: 'flip',
    allowTouchMove: true,
    breakpointsInverse: true,
    breakpoints: {
        1023: {
            allowTouchMove: false
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

swiper.on('slideChange', function(){
    if(swiper.activeIndex === 0){
            navi.style.display = 'none';
        }
    })

var start_btn = document.getElementsByClassName('start_btn')[0];

start_btn.addEventListener('click', function () {
    swiper.slideNext();
    navi.style.display = 'block';
})


var request = new XMLHttpRequest();

request.open('GET',"./data/q.json" );
request.responseType = 'json';
request.send();


// for문 돌면서 다 세팅할지 아니면 다이나믹하게 그때그때 생성? 
request.onload = function() {
    var datalist = request.response;
    var q1 = document.getElementsByClassName('q1')[0]
    var title = q1.getElementsByClassName('q_title')[0]
    title.innerText = datalist.q_list[0].q1.q_text
    console.log(datalist)
    a_list = datalist.q_list[0].q1.a_list
    console.log(a_list)
    var btn_list = q1.getElementsByClassName('select_btn_box')[0].getElementsByTagName('button')
    for (let index = 0; index < btn_list.length; index++) {
        btn_list[index].innerText = a_list[index].text
        console.log(a_list[index])
    }
  }