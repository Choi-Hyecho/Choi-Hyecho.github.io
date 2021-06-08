
var navi = document.getElementsByTagName('nav')[0]
var swiper = new Swiper('.main_box', {
    speed : 500,
    effect : 'fade',
    fadeEffect: {
        crossFade: true
      },
    allowTouchMove: false,
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
var icon = document.getElementsByClassName('prog')[0].getElementsByTagName('img')[0]
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
    load_text(datalist)
  }

  function load_text(datalist) {
    var q_class_list = document.getElementsByClassName('q')
     for (let index = 0; index < q_class_list.length; index++) {
        q_class = q_class_list[index]
        title = q_class.getElementsByClassName('q_title')[0]
        title.innerText = datalist.q_list[index].q_text
        a_list = datalist.q_list[index].a_list
        var btn_list = q_class.getElementsByClassName('select_btn_box')[0].getElementsByTagName('button')
        console.log(btn_list)
        // for (let j = 0; j < btn_list.length; index++) {
        //     btn_list[j].innerText = a_list[j].text
        // }
     }
  }

