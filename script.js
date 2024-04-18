const Slideshow = document.querySelectorAll(".slied")
var counter=0;
// console.log(Slideshow)

Slideshow.forEach(
    (slide,index)=>{
        slide.style.left =`${index * 100}%`
    }
)

const goback =()=>{
    counter--
    alert()
    slideimg()
}




const gonext =()=>{
    counter++
    alert()
    slideimg()
}

const slideimg=()=>{
    Slideshow.forEach(
        (slide) =>{
            slide.style.transfrom=`translatex(-${counter*100}%)`
        }
    )
}