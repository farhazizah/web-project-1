let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
})

window.onscroll = () => {
  navbar.classList.remove("active")
};
//setting
const setting = document.querySelector('#setting');
const settingContent = document.querySelector('.setting-content');

setting.addEventListener('click', function() {
    if(settingContent.style.display === 'none') {
        settingContent.style.display = 'block';
    } else{
        settingContent.style.display = 'none';
    }
})
window.addEventListener('scroll', function() {
    settingContent.style.display = 'none';
})
//dark theme
const icon = document.getElementById('sun');
const body = document.querySelector('body');
const p = document.getElementsByTagName('p');
const h2 = document.getElementsByTagName('h2');
//tag dalam menu 
const h2Menu = document.querySelectorAll('.box h2');
const pMenu = document.querySelectorAll('.box p');
//tag dalam contact
const h2Contact =document.querySelectorAll('.contact h2');
//tag dalam footer
const spanFooter = document.querySelectorAll('.col span');
const liFooter = document.querySelectorAll('.col ul li a');
const iconFooter = document.querySelectorAll('.social i:hover');


icon.addEventListener('click', function() {
  this.classList.toggle('bxs-moon');
   if(this.classList.toggle('bxs-sun')) {
        body.style.background = '#150129';
        body.style.transition = '1s';
        this.innerHTML = 'Bright Mode';
        //tag p
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = 'white';
        }
        //tag h2
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = 'white';
        }
        //tag h2 menu
        for (let i = 0; i < h2Menu.length; i++) {
            h2Menu[i].style.color = '#150129';
        }
        //tag p menu
        for (let i = 0; i < pMenu.length; i++) {
            pMenu[i].style.color = '#150129';
        }
        //tag h2 contact
        for (let i = 0; i < h2Contact.length; i++) {
            h2Contact[i].style.color = '#150129';
        }
        //tag dalam footer
        for (let i = 0; i < spanFooter.length; i++) {
            spanFooter[i].style.color = 'white';
        }
        for (let i = 0; i < liFooter.length; i++) {
            liFooter[i].style.color = 'white';
        }
        for (let i = 0; i < iconFooter.length; i++) {
            iconFooter[i].style.background = '#de6717';
            }

    } else{
        body.style.background = 'white';
        this.innerHTML = 'Dark Mode';
        
        //tag p
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = '#150129';
        }
        //tag h2
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = '#150129';
        }
       //tag dalam footer
        for (let i = 0; i < spanFooter.length; i++) {
        spanFooter[i].style.color = '#150129';
        }
        for (let i = 0; i < liFooter.length; i++) {
            liFooter[i].style.color = '#150129';
            liFooter[i].style.fontWeight= '200';
        }
        for (let i = 0; i < iconFooter.length; i++) {
            iconFooter[i].onmouseover= '#150129';
            }
        body.style.transition = '1s';
    }

})
