const portfolioBtn = document.querySelector(".portfolio__btn"),
aboutMeBtn = document.querySelector(".aboutme__btn"),
body = document.querySelector("body");


function goPortfolio(){
body.style.transform = "translateX(-1800px)";
body.classList.add("second");
console.log(body.style.left)
}
function goAboutMe(){
  body.classList.remove("second");
  body.style.transform = "translateX(0px)";
  // body.style.left = "0%";
  console.log(body.style.left)
}

function init(){
  if(body.classList.contains("second")){
    
    window.addEventListener("load", ()=>{
      // body.style.left="0%";
      body.classList.add("second");
    })
  }
  portfolioBtn.addEventListener("click", goPortfolio);
  aboutMeBtn.addEventListener("click", goAboutMe);
}
init()