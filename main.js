window.addEventListener('scroll', async () => {
    await new Promise(resolve => setTimeout(resolve, 10)); // Asynchronous operation (1 second delay)
  
    document.querySelector('nav').classList.toggle(
      'window-scroll',
      window.scrollY > 0
    );
  });
  
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', async () => {
    await new Promise(resolve => setTimeout(resolve, 10)); // Asynchronous operation (1 second delay)
    
    faq.classList.toggle('open');
    
    const icon = faq.querySelector('.faq_icon i');
    
    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
  });
});

const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

const openMenu = async () => {
  await new Promise(resolve => setTimeout(resolve, 10)); // Asynchronous operation (1 second delay)
  
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
};

menubtn.addEventListener('click', openMenu);

const closeNav = () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
};

closebtn.addEventListener('click', closeNav);

