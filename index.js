const right=document.getElementById("rightArrow");
const left=document.getElementById("leftArrow");
const img=document.getElementById("img");

const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];
  let currentIndex=0;
  function nextSlide(){
    
    if(currentIndex ===images.length-1){
        currentIndex=0
    }
    else{
        currentIndex++
    }
    img.src=images[currentIndex]

  }
  function prevSlide (){
    if(currentIndex===0){
        currentIndex = images.length-1
    }
    else{
        currentIndex--
    }
    img.src=images[currentIndex]
  }
  right.addEventListener("click",nextSlide)
  left.addEventListener("click",prevSlide)