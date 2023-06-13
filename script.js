/* menu na rolagem */
window.addEventListener('scroll', function() {
  // Obtém o elemento do menu
  var menu = document.getElementById('menu');
  // Obtém a posição atual da rolagem em relação ao topo da página
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Verifica se a posição de rolagem é maior que zero
  if (scrollTop > 0) {
    // Se for maior que zero, adiciona a classe 'scrolled' ao elemento do menu
    menu.classList.add('scrolled');
  } else {
    // Caso contrário, remove a classe 'scrolled' do elemento do menu
    menu.classList.remove('scrolled');
  }
});

// Função auxiliar para rolagem suave
function smoothScroll(target) {
  // Obtém o elemento alvo da rolagem com base no seletor fornecido
  const element = document.querySelector(target);
  // Realiza a animação de rolagem suave usando window.scrollTo
  window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
  });
}

// Obtém todos os links do menu
const menuLinks = document.querySelectorAll('.menu a');
// Obtém o elemento do menu
const menu = document.querySelector('.menu');

// Itera sobre cada link do menu
menuLinks.forEach(link => {
  // Adiciona um ouvinte de evento de clique a cada link
  link.addEventListener('click', function(event) {
      // Impede o comportamento padrão do link (redirecionamento)
      event.preventDefault();
      // Obtém o destino da rolagem com base no atributo 'href' do link
      const target = this.getAttribute('href');
      // Chama a função de rolagem suave para rolar até o destino
      smoothScroll(target);
      // Fecha o menu ao clicar em um link (remove a classe 'open')
      menu.classList.remove('open');
  });
});

// Adiciona um ouvinte de evento de clique ao menu
menu.addEventListener('click', function() {
  // Toggles (adiciona ou remove) a classe 'open' no menu
  menu.classList.toggle('open');
});

/* animação de rolagem */
$(document).ready(function() {
  // Adiciona um ouvinte de evento de clique a todos os links com a classe 'scroll-link'
  $('.scroll-link').on('click', function(event) {
      // Impede o comportamento padrão do link (redirecionamento)
      event.preventDefault();
      // Obtém o destino da rolagem com base no atributo 'href' do link
      var target = $(this).attr('href');
      // Realiza a animação de rolagem suave usando jQuery.animate
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 800);
  });
});
