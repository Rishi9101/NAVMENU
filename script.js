window.addEventListener('scroll', function()
{
const navbar = document.querySelector('.navbar');

if(this.window.scrolly>50){
    navbar.classList.add('scrolled');}
    else{
        navbar.classList.remove('scrolled');}

    }
);
