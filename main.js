/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  //Validate that variables exist

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*zamyka, zwija menu po kliknięciu na link*/

/*===== SCROLL SECTIONS ACTIVE LINK =====*/


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  section.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('nav__menu a[href*=' + sectionId +']').classList.add('active-link')
    }else{
      document.querySelector('nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader(){
  //kiedy scroll jest wiekszy niż 200 viewport height, add the scroll header class w przeciwnym wypadku remove
  const header = document.getElementById('header')
  if (this.scrollY >=200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)


/*===== Show scroll top =====*/
function scrollTop(){

  const scrollTop = document.getElementById('scrolltop')
  if (this.scrollY >=560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll',scrollTop)



/*===== DARK LIGHT THEME =====*/

const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Activate and deactivate the theme manually with button
themeButton.addEventListener( 'click' , ()=>{
// Add or remove the dark icon theme
  document.body.classList.toggle(darktheme)
  themeButton.classList.toggle(iconTheme)
})
