
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.display = "block";
  sidemenu.style.right="0";
}

function closemenu(){
  sidemenu.style.display = "none";  
  sidemenu.style.right="-200px";
}

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var mq = window.matchMedia('only screen and (max-width: 600px)');
if(mq.matches){
  console.log("matching");
  const elements = document.querySelectorAll('#sidemenu a');
  for(let i = 0; i < elements.length; ++i){
    elements[i].addEventListener('click', closemenu, false);
  }
}

window.onload = function () {
    const headerText = document.querySelector('.header-text h1');
  
    function fadeIn(element, delay) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
  
        if (progress < 1000) {
          element.style.opacity = progress / 1000;
          window.requestAnimationFrame(step);
        }
      };
  
      setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay);
    }
  
    fadeIn(headerText, 500);
  };

 

  