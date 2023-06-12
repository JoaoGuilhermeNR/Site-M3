/* menu na rolagem */
window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });

  function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

const menuLinks = document.querySelectorAll('.menu a');
const menu = document.querySelector('.menu');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
        menu.classList.remove('open');
    });
});

menu.addEventListener('click', function() {
    menu.classList.toggle('open');
});

/* animação de rolagem */
$(document).ready(function() {
  $('.scroll-link').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 800);
  });
});
