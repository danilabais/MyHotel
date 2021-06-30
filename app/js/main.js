const swiper = new Swiper('.main-fullpage', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    
  });




const screenWidth = window.screen.width
  window.addEventListener('scroll', function() {
      
      let last_known_scroll_position = window.pageYOffset;
      if (screenWidth>1100) {
        if (last_known_scroll_position<=100)  {
          document.querySelector('.header').classList.remove('scrolling');
        }
        else document.querySelector('.header').classList.add('scrolling');

      }
      });

  document.getElementsByClassName("burger")[0].addEventListener("click", e => {
    document.getElementsByClassName("header")[0].classList.toggle('active')
  
});



var map = L.map('map', {
  scrollWheelZoom:false,
}).setView([60.025502, 30.341760], 16);

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);



var marker2 = L.marker([60.025502, 30.341760], {
}).addTo(map);





