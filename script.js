/* CONFIGURACIÓN: completar antes de publicar. */
const SITE_CONFIG={whatsapp:"5491167024220",siteUrl:"https://sandra-pena-acompanamiento.damian8306.chatgpt.site",instagram:"https://instagram.com/coach_sandrapena"};
const message="Hola Sandra, estuve viendo tu página y quería consultarte por las sesiones individuales.";
document.querySelectorAll('a[href^="#"]:not([data-whatsapp])').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(!/^#[A-Za-z][A-Za-z0-9_-]*$/.test(id))return;const target=document.querySelector(id);if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}}));
document.querySelector('#year').textContent=new Date().getFullYear();
if(SITE_CONFIG.whatsapp){const url=`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;document.querySelectorAll('[data-whatsapp]').forEach(a=>{a.href=url;a.removeAttribute('target');});document.querySelector('.whatsapp').hidden=false;}
const observer=new IntersectionObserver(items=>items.forEach(i=>{if(i.isIntersecting){i.target.classList.add('visible');observer.unobserve(i.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
