// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.card,.step,.hero-text,.hero-visual').forEach(el => io.observe(el));

// Navbar shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10 ? '0 8px 30px #0008' : 'none';
});

// Filtros de projetos
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('#projectGrid .project').forEach(card => {
      const show = f === 'all' || card.dataset.cat.includes(f);
      card.style.display = show ? '' : 'none';
      if (show) card.classList.add('visible');
    });
  });
});

// FAQ
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const a = q.nextElementSibling;
    const open = a.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(x => x.classList.remove('open'));
    if (!open) a.classList.add('open');
  });
});

// Form -> WhatsApp Estevão Goiânia
const WHATS_NUMBER = '5562981273701';
document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('fName').value.trim();
  const site = document.getElementById('fSite').value.trim();
  const problem = document.getElementById('fProblem').value;
  const msg = `ORÇAMENTO - Olá Estevão, sou ${name}. Tipo de projeto: ${problem}. Referência atual: ${site || 'não possuo'}. Aguardo proposta com valor e prazo.`;
  window.open(`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});
