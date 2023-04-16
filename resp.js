burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navlist')
rightNav = document.querySelector('.rightnav')
background = document.querySelector('.background')
wave1 = document.querySelector('.wave1')
wave2 = document.querySelector('.wave2')
wave3 = document.querySelector('.wave3')
firstSection = document.querySelector('.firstHalf')

burger.addEventListener('click' , ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
   navbar.classList.toggle('h-nav-resp');
   background.classList.toggle('b-back-resp');
   wave1.classList.toggle('w-wave1-resp');
   wave2.classList.toggle('w-wave2-resp');
   wave3.classList.toggle('w-wave3-resp');
   firstSection.classList.toggle('first-burger');
})