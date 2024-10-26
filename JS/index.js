const index_web=document.querySelector('.index_web')
const front_web = document.querySelector(".front_web")

// console.log(front_web.children[2].opacity);

front_web.children[3].addEventListener("click",function(){
        front_web.classList.add("animation-dying")
        // front_web.classList.remove("animation-dying")
        this.classList.add("animation-trans")
        console.log(111);
        setTimeout(() => {
            front_web.style.display = "none";
            index_web.style.display = "block"
            index_web.classList.add("animation-index")
        }, 600);       
})


//web_front的JS代码



//index的JS代码————>

//wrap
// const contain_list = document.querySelector(".contain_list")
// const nav_list = document.querySelector(".nav_list")
// const head_nav = document.querySelector(".head_nav")
// head_nav.addEventListener("mouseover",(e)=>{
//     console.log(e.target.dataset.id)
// })
//轮播图carousel
const carouselcontain =document.querySelector(".carousel")
const leftbutton = document.querySelector(".leftbutton")
const rightbutton = document.querySelector(".rightbutton")
const carouselList = document.querySelectorAll(".carousel_list")
const currentspot = document.querySelectorAll('.turnchange span')
let timeId = setInterval(() => {
    carousel()
}, 3000);
carouselcontain.addEventListener("mouseenter",()=>{
    clearInterval(timeId)
})
carouselcontain.addEventListener("mouseleave",()=>{
    timeId = setInterval(() => {
        carousel()
    }, 3000);
})
leftbutton.addEventListener("click",()=>{
    currentCal = document.querySelector(".carousel .active")
    currentCal.classList.remove("active")
    previouscal = currentCal.previousElementSibling?currentCal.previousElementSibling:carouselList[2]
    previouscal.classList.add("active")
    nowspot = document.querySelector(".turnchange .active")
    nowspot.classList.remove("active")
    previousspot = nowspot.previousElementSibling?nowspot.previousElementSibling:currentspot[2]
    previousspot.classList.add("active")
})
rightbutton.addEventListener("click",()=>{
    carousel()
})
function carousel(){
    currentCal = document.querySelector(".carousel .active")
    currentCal.classList.remove("active")
    nextcal = currentCal.nextElementSibling?currentCal.nextElementSibling:carouselList[0]
    nextcal.classList.add("active")
    nowspot = document.querySelector(".turnchange .active")
    nowspot.classList.remove("active")
    nextspot = nowspot.nextElementSibling?nowspot.nextElementSibling:currentspot[0]
    nextspot.classList.add("active")
}

currentspot[0].parentElement.addEventListener("click",(e)=>{
    // console.log(e.target.dataset.id);
    // currentCal = document.querySelector(".carousel .active")
    document.querySelector(".carousel .active").classList.remove("active") 
    carouselList[e.target.dataset.id].classList.add("active")
    document.querySelector(".turnchange .active").classList.remove("active")
    currentspot[e.target.dataset.id].classList.add("active")   
})


