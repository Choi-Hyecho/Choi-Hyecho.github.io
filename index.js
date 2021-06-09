window.addEventListener('load', function () {
    
  })

Kakao.init('f61d8da7a7592cf7832d8263a79eb5ce');
Kakao.isInitialized();

var navi = document.getElementsByTagName('nav')[0]
var modal = document.getElementById('myModal');
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
    modal.style.display = "none";
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
        for (let j = 0; j < btn_list.length; j++) {
            btn_list[j].innerText = a_list[j].text        
        }
     }
}


var share_btn =  document.getElementsByClassName('share_btn')[0];


share_btn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Get the <span> element that closes the modal
var span = document.getElementsByTagName("span")[0];                                          
span.addEventListener('click',function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


function sendLink() {
    Kakao.Link.sendCustom({
      templateId: 54986,
      templateArgs: {title: '오늘 나에게 가장 잘 맞는 술은?'}
    })
  }

  function copyToClipboard(val) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  function copy() {
    copyToClipboard('https://blissful-thompson-67c8f7.netlify.app/');
    alert("복사 완료!")
  }