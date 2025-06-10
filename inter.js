
document.getElementById('Bouton').addEventListener('click',()=>{
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
      if (menuLogo.classList.contains('show')){
            boutonText.textContent = 'Fermer'
      }
      else{
            boutonText.textContent = 'Contact'
      }
})