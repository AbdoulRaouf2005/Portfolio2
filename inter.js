
document.getElementById('Bouton').addEventListener('click', () => {
      const menuLogo = document.getElementById('Menu_Logo')
      menuLogo.classList.toggle('show')

      const whatsapp = document.querySelector('.whatsapp')
      const linkedin = document.querySelector('.linkedin')
      const email = document.querySelector('.email')
      const github = document.querySelector('.github')

      whatsapp.classList.toggle('derou')
      linkedin.classList.toggle('derou')
      email.classList.toggle('derou')
      github.classList.toggle('derou')

      const boutonText = document.getElementById('Bouton1')
      if (menuLogo.classList.contains('show')) {
            boutonText.textContent = 'Fermer'
      }
      else {
            boutonText.textContent = 'Contact'
      }
})

const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
            if (entry.isIntersecting) {
                  entry.target.classList.add('vue');
            }
            else {
                  entry.target.classList.remove('vue');
            }
      });
}, {
      threshold: 0.3
});

document.querySelectorAll('.box').forEach(el => observer.observe(el));

let bar_charge = document.querySelector('.Bar_charge'),
      Bar_Progre = document.querySelector('.progre_bar'),
      bar_charge2 = document.querySelector('.Bar_charge2'),
      Bar_Progre2 = document.querySelector('.progre_bar2');

let debut = 0,
      debut2 = 0,
      Fin = 60,
      Fin2 = 40;

let Progress = setInterval(() => {
      debut++;
      bar_charge.style.background = `conic-gradient(#FFD700 ${debut * 3.6}deg,#0D2847 0deg)`;
      Bar_Progre.textContent = debut + '%';
      if (debut == Fin) {
            clearInterval(Progress);
      }

}, 40);

let Progress2 = setInterval(() => {
      debut2++;
      bar_charge2.style.background = `conic-gradient(#FFD700 ${debut2 * 3.6}deg,#0D2847 0deg)`;
      Bar_Progre2.textContent = debut + '%';
      if (debut2 == Fin2) {
            clearInterval(Progress2);
      }

}, 40);
