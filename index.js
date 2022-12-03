
//--------------------- Scroll To Top Button --------------
let Topbtn = document.getElementById('scroll-top'); // getting the top button

window.onscroll = function () { scrollFunc() };


// Displaying the top button
function scrollFunc() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        Topbtn.style.display = 'block';
    } else {
        Topbtn.style.display = 'none';
    }
}

// Moving to top
function gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//--------------------- Sticky Header ----------------------
window.addEventListener('scroll', setSticky);

var header = document.getElementById('myHeader');
var sticky = header.offsetTop;

function setSticky() {
    if(window.pageYOffset >= sticky){header.classList.add("header-sticky");}
    else{header.classList.remove("header-sticky");}
}