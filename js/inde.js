
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', 
    loop: true, 
    speed:1000,
    
    pagination :{
        el: '.swiper-pagination',
        clickable :true,
      },
    
    
   
   
   autoplay:true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
   
  })         