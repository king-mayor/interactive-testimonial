let btn = document.querySelectorAll(".btn");
let sliderOne = document.querySelector(".testimonial1");
let sliderTwo = document.querySelector(".testimonial2");
let sliderThree = document.querySelector(".testimonial3");
let sliderFour = document.querySelector(".testimonial4");
let sliderFive = document.querySelector(".testimonial5");

for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click", function(e){
      if(e.target.classList.contains("one")){
          sliderOne.style.display = "flex";
          sliderTwo.style.display = "none";
          sliderThree.style.display = "none";
          sliderFour.style.display = "none";
          sliderFive.style.display = "none";
          e.target.classList.remove("active");
      }
      this.classList.add("active");
      if(e.target.classList.contains("two")){
        sliderOne.style.display = "none";
        sliderTwo.style.display = "flex";
        sliderThree.style.display = "none";
        sliderFour.style.display = "none";
        sliderFive.style.display = "none";
    }
    if(e.target.classList.contains("three")){
        sliderOne.style.display = "none";
        sliderTwo.style.display = "none";
        sliderThree.style.display = "flex";
        sliderFour.style.display = "none";
        sliderFive.style.display = "none";
    }
    if(e.target.classList.contains("four")){
        sliderOne.style.display = "none";
        sliderTwo.style.display = "none";
        sliderThree.style.display = "none";
        sliderFour.style.display = "flex";
        sliderFive.style.display = "none";
    }
    if(e.target.classList.contains("five")){
        sliderOne.style.display = "none";
        sliderTwo.style.display = "none";
        sliderThree.style.display = "none";
        sliderFour.style.display = "none";
        sliderFive.style.display = "flex";
    }
    })
}