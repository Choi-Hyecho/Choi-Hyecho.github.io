window.onload = function(){
    const swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

  
    var start_btn = document.getElementsByClassName('start_btn')[0]

    function click_start_btn(){
        alert("do")
    }


}

