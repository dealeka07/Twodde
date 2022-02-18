/* Hamburger Menu Bar */
function initHamburger() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    const js_content_blur = document.getElementById("js_content_blur");
    let open = false;
  
    function change() {
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
        js_content_blur.style.filter = "blur(6px)";
        document.body.style.overflow = "hidden";
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
        js_content_blur.style.filter = "none";
        document.body.style.overflow = "auto";
      }
      open = !open;
    }
  
    hamburger.addEventListener("click", change);
};

initHamburger();


/**change color of navbar on scroll */

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".nav_bar").css("background" , "black");
	  }
	  else{
		  $(".nav_bar").css("background" , "#333");  	
	  }
  })
})