const Slideshow = document.querySelectorAll(".Slideshow")
var counter=0;
// console.log(Slideshow)

Slideshow.forEach(
    (Slideshow,index)=>{
        Slideshow.style.left =`${index * 100}%`
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
        (Slideshow) =>{
            Slideshow.style.transfrom=`translatex(-${counter*100}%)`
        }
    )
}