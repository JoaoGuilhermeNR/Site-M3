const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
});

// Função para rolar suavemente até uma âncora
function scrollToAnchor(event) {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    const offsetTop = document.querySelector(target).offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Adiciona o evento de clique aos links de navegação
let navigationLinks = document.querySelectorAll(".navigation a");
navigationLinks.forEach(link => {
    link.addEventListener("click", scrollToAnchor);
});
// Adiciona o evento de clique aos links de navegação

content