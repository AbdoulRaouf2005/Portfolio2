const Menu_Bar = document.querySelector('.MenuNav')
const icone_Menu = document.querySelector('.fa-bars')
const Desact = document.querySelector('.Desactive')

icone_Menu.addEventListener('click',()=>{
      icone_Menu.classList.toggle('fa-xmark')
      Menu_Bar.classList.toggle('visible')
})

window.addEventListener('scroll',()=>{
      icone_Menu.classList.remove('fa-xmark')
      Menu_Bar.classList.remove('visible')
})

Desact.addEventListener('click',()=>{
      icone_Menu.classList.remove('fa-xmark')
      Menu_Bar.classList.remove('visible')
})

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
      threshold: 0.1
});

document.querySelectorAll('.box').forEach(el => observer.observe(el));

let bar_charge = document.querySelector('.Bar_charge'),
      Bar_Progre = document.querySelector('.progre_bar'),
      bar_charge2 = document.querySelector('.Bar_charge2'),
      Bar_Progre2 = document.querySelector('.progre_bar2'),
       bar_charge3 = document.querySelector('.Bar_charge3'),
      Bar_Progre3 = document.querySelector('.progre_bar3');

let debut = 0,
      debut2 = 0,
      debut3 =0,
      Fin = 70,
      Fin2 = 60,
      Fin3 = 30;

let Progress = setInterval(() => {
      debut++;
      bar_charge.style.background = `conic-gradient(#26B2C3 ${debut * 3.6}deg,#173053 0deg)`;
      Bar_Progre.textContent = debut + '%';
      if (debut == Fin) {
            clearInterval(Progress);
      }

}, 40);

let Progress2 = setInterval(() => {
      debut2++;
      bar_charge2.style.background = `conic-gradient(#26B2C3 ${debut2 * 3.6}deg,#173053 0deg)`;
      Bar_Progre2.textContent = debut2 + '%';
      if (debut2 == Fin2) {
            clearInterval(Progress2);
      }

}, 40);

let Progress3 = setInterval(() => {
      debut3++;
      bar_charge3.style.background = `conic-gradient(#26B2C3 ${debut3 * 3.6}deg,#173053 0deg)`;
      Bar_Progre3.textContent = debut3 + '%';
      if (debut3 == Fin3) {
            clearInterval(Progress3);
      }

}, 40);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

