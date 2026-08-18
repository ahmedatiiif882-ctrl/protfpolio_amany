// Navigation toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href && href.startsWith('#')){
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav if open
        if(navLinks.classList.contains('open')){
          navLinks.classList.remove('open');
          navToggle.setAttribute('aria-expanded','false');
        }
      }
    }
  })
});

// Simple contact form handling
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if(!name || !email || !message){
      alert('Please complete all fields before sending.');
      return;
    }
    // Simulate successful send
    contactForm.querySelectorAll('input,textarea,button').forEach(el=>el.disabled=true);
    setTimeout(()=>{
      alert('Thanks '+name+' — your message was sent successfully. I will contact you soon.');
      contactForm.reset();
      contactForm.querySelectorAll('input,textarea,button').forEach(el=>el.disabled=false);
    },800);
  });
}
