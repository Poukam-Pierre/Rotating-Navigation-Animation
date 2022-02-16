// made by Poukam Pierre

const menuBar = document.getElementById('menuBtn')
const cancelBtn = document.getElementById('cancelBtn')
const circleContent = document.querySelector('.circle')
const mainContainerIsRotate = document.querySelector('.mainContainer')
const homeLink = document.querySelector('.homeLink')
const aboutLink = document.querySelector('.aboutLink')
const contactLink = document.querySelector('.contactLink')

menuBar.addEventListener('click', ()=>{
    circleContent.classList.add('circleIsRotate')
    mainContainerIsRotate.classList.add('mainContainerIsRotate')
    homeLink.classList.remove('desactivateHomeLink')
    homeLink.classList.add('activeHomeLink')
    aboutLink.classList.remove('desactivateAboutLink')
    aboutLink.classList.add('activeAboutLink')
    contactLink.classList.remove('desactivateContactLink')
    contactLink.classList.add('activeContactLink')
})

cancelBtn.addEventListener('click', ()=>{
    circleContent.classList.remove('circleIsRotate')
    mainContainerIsRotate.classList.remove('mainContainerIsRotate')
    homeLink.classList.remove('activeHomeLink')
    homeLink.classList. add('desactivateHomeLink')
    aboutLink.classList.remove('activeAboutLink')
    aboutLink.classList.add('desactivateAboutLink')
    contactLink.classList.remove('activeContactLink')
    contactLink.classList.add('desactivateContactLink')
})