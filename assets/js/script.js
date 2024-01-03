/////////preloader function
var load=document.getElementById("preloader")
      window.addEventListener("load",function(){
        setTimeout(function () {
         load.style.display = "none";
        }, 500);
      })
      
//////navbar fixed
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('headerNav');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });

  //////whatsapp and call buttons arrive
  document.addEventListener('DOMContentLoaded', function () {
    const navbars = document.querySelectorAll('.quick-contact'); // Use querySelectorAll to get a NodeList
  
    navbars.forEach(function (navbar) {
      window.addEventListener('scroll', function () {
        if (window.scrollY >= 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    });
  });
  

//////////navbar toggler onclick function
function navScrolled() {
  var navbarLinks = document.getElementById('headerNav');
  navbarLinks.classList.add('bg-white');
}

//////////navbar dropdown mouseover
document.addEventListener('DOMContentLoaded', function () {
  var dropdownNavItem = document.querySelector('.navbar-nav .nav-item.dropdown');
  var dropdownMenu = dropdownNavItem.querySelector('.dropdown-menu');

  dropdownNavItem.addEventListener('mouseenter', function () {
    dropdownMenu.classList.add('show');
    dropdownMenu.setAttribute('data-bs-popper', 'none');
  });

  dropdownNavItem.addEventListener('mouseleave', function () {
    dropdownMenu.classList.remove('show');
    dropdownMenu.removeAttribute('data-bs-popper');
  });
});



  /////////////scroll y animation 
  document.addEventListener("DOMContentLoaded", function () {
    var boxes = document.querySelectorAll('.anime');

    function handleIntersect(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }

    var options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5 // Trigger when 50% of the box is visible
    };

    var observer = new IntersectionObserver(handleIntersect, options);

    // Observe each box
    boxes.forEach(function (box) {
        observer.observe(box);
    });
});

////// (onclick) JavaScript function to handle the redirection
function service(a) {
  if(a==1){
      window.location.href = 'tour_packages.html';
  }else if(a==2){
      window.location.href = 'visa.html'
  }else if(a==3){
    window.location.href = 'accomodations.html'
  }
  
}
//////speciality slider
  $(document).ready(function(){
    $('.speciality-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
  });





  