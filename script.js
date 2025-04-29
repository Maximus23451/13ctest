document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

const learnBtn = document.getElementById('learn-btn');
const learnText = document.getElementById('learn-text');

if (learnBtn && learnText) {
  learnBtn.addEventListener('click', () => {
    learnText.classList.toggle('hidden');
  });
}
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = e.target.getAttribute('href').substring(1);
                document.querySelectorAll('.content-section, .hero').forEach(section => {
                    section.style.display = 'none';
                });
                if (target === 'home') {
                    document.getElementById('home').style.display = 'flex';
                } else {
                    document.getElementById(`${target}-content`).style.display = 'block';
                }
                history.pushState(null, null, `#${target}`);
            });
        });
        document.getElementById('hehehe-btn').addEventListener('click', (e) => {
            e.preventDefault();
            alert('A 13.c búcsúzik! Sziasztok és jók legyetek! ツ');
        });
        window.addEventListener('load', () => {
            const hash = window.location.hash.substring(1) || 'home';
            document.querySelectorAll('.content-section, .hero').forEach(section => {
                section.style.display = 'none';
            });
            if (hash === 'home') {
                document.getElementById('home').style.display = 'flex';
            } else {
                const targetSection = document.getElementById(`${hash}-content`);
                if (targetSection) targetSection.style.display = 'block';
            }
        });
        document.querySelectorAll('.lightbox').forEach(lightbox => {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    window.location.hash = '';
                }
            });
        });
        document.querySelectorAll('.lightbox-close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.hash = '';
                window.scrollTo(0, 0); 
            });
        });