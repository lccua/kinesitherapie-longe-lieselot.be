let toTop = document.querySelector(".toTop");
window.addEventListener("scroll",function() {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active_toTop");
    } else {
        toTop.classList.remove("active_toTop");
   }
});

const vakantieBanner = document.getElementById("vakantieBanner");
  const currentDate = new Date();
  const endDate = new Date("2023-04-24");

  if (currentDate > endDate) {
    vakantieBanner.style.display = "none";
  }

$(document).ready(function(){
	$('.header').height($(window).height());
})

