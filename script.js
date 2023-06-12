window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });
  
  const produtosSection = document.querySelector('#produtos');
  const menuLinks = document.querySelectorAll('#menu a');
  
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const offsetTop = produtosSection.offsetTop;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    });
  });
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const sectionOffset = produtosSection.offsetTop;
    const windowHeight = window.innerHeight;
  
    if (scrollPosition > sectionOffset - windowHeight + 100) {
      produtosSection.classList.add('scroll-active');
    } else {
      produtosSection.classList.remove('scroll-active');
    }
  });

  