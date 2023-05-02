const setup = () => {
  headerFunction();
  window.addEventListener('scroll', handleScroll);
  //hideBannerIfNeeded();
};

const hideBannerIfNeeded = () => {
  const vakantieBanner = document.getElementById("vakantieBanner");
  const currentDate = new Date();
  const endDate = new Date("2023-04-24");
  if (currentDate > endDate) {
    vakantieBanner.style.display = "none";
  }
}

const headerFunction = () => {
  $(document).ready(function(){
    $('.header').height($(window).height());
  });
}

const handleScroll = () => {
  let toTop = document.querySelector(".toTop");
  if (window.pageYOffset > 100) {
    toTop.classList.add("active_toTop");
  } else {
    toTop.classList.remove("active_toTop");
  }
};

window.addEventListener('load', setup);

