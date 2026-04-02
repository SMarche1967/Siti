// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}
// Close menu on link click
document.querySelectorAll('#nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Form handler — opens mailto with pre-filled content
function handleSubmit(e) {
  e.preventDefault();
  const f = e.target;
  const nome = f.nome.value;
  const cognome = f.cognome.value;
  const email = f.email.value;
  const telefono = f.telefono.value;
  const servizio = f.servizio.value;
  const messaggio = f.messaggio.value;

  const subject = encodeURIComponent(`Richiesta preventivo – ${nome} ${cognome}`);
  const body = encodeURIComponent(
    `Buongiorno,\n\nVi contatto tramite il sito web.\n\n` +
    `Nome: ${nome} ${cognome}\n` +
    `Email: ${email}\n` +
    `Telefono: ${telefono}\n` +
    `Tipo di lavoro: ${servizio}\n\n` +
    `Messaggio:\n${messaggio}\n\n` +
    `Cordiali saluti,\n${nome} ${cognome}`
  );

  window.location.href = `mailto:emanuelecanu@hotmail.it?subject=${subject}&body=${body}`;

  f.style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}  