// import {data_wrap} from './data'

// console.log(data_wrap[0]);

const index_web=document.querySelector('.index_web')
const front_web = document.querySelector(".front_web")

// console.log(front_web.children[2].opacity);

front_web.children[4].addEventListener("click",function(){
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
    // console.log(e.target);
    
    // console.log(e.target.dataset.id);
    // currentCal = document.querySelector(".carousel .active")
    document.querySelector(".carousel .active").classList.remove("active") 
    carouselList[e.target.dataset.id].classList.add("active")
    document.querySelector(".turnchange .active").classList.remove("active")
    currentspot[e.target.dataset.id].classList.add("active")   
})

//wrap数据渲染
data_wrap1 = [
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
    {
        img:'./assent/phone.png',
        text:"9成新手机，买不了吃亏"
    },
]
data_wrap2 = [
    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },
    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },    {
        img:"./assent/ball.avif",
        text:"上完体育课就不用了，现低价出售"
    },
]
data_wrap3 = [
    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },
    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },    {
        img:"./assent/unberall.avif",
        text:"大四了，所以把伞给卖了"
    },
]
data_wrap4 = [
    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },
    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },    {
        img:"./assent/yurfu.avif",
        text:"羽绒服买小了，本人穿不下"
    },
]

       //将数据渲染进wrap
const border_wrap = document.querySelectorAll(".border_wrap")

border_wrap[0].innerHTML = data_wrap1.map(function(data){
    return `<a class="wrap_data">
     <img src=${data.img}>
     <p>${data.text}</p>
     </a>
     `
 }).join(" ")
border_wrap[1].innerHTML = data_wrap2.map(function(data){
    return `<a class="wrap_data">
     <img src=${data.img}>
     <p>${data.text}</p>
     </a>
     `
 }).join(" ")
 border_wrap[2].innerHTML = data_wrap3.map(function(data){
    return `<a class="wrap_data">
     <img src=${data.img}>
     <p>${data.text}</p>
     </a>
     `
 }).join(" ")
 border_wrap[3].innerHTML = data_wrap4.map(function(data){
    return `<a class="wrap_data">
     <img src=${data.img}>
     <p>${data.text}</p>
     </a>
     `
 }).join(" ")


//  物品清单渲染 goodlist
const list = document.querySelectorAll(".goodlist .list")
data_new = [
    {
        img:"./assent/new_pic/hot_1.webp",
        text:"99新键盘，绝对保真，就对正品",
        price:"999"
    },
    {
        img:"./assent/new_pic/hot_2.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },
    {
        img:"./assent/new_pic/hot_3.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },    
    {
        img:"./assent/new_pic/hot_4.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },    
    {
        img:"./assent/new_pic/hot_5.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },    
    {
        img:"./assent/new_pic/hot_6.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },    
    {
        img:"./assent/new_pic/hot_7.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },    
    {
        img:"./assent/new_pic/hot_8.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },    
    {
        img:"./assent/new_pic/hot_9.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },
    {
        img:"./assent/new_pic/hot_10.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },
    {
        img:"./assent/new_pic/hot_11.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },
    {
        img:"./assent/new_pic/hot_12.jpg",
        text:"数据加载中，请稍后",
        price:"999"
    },
]
data_sco = [
    {
        img:'./assent/school_pic/sco_1.jpg',
        text:'数据加载中，请稍后',
        price:999
    },
    {
        img:'./assent/school_pic/sco_2.jpg',
        text:'数据加载中，请稍后',
        price:999
    },
    {
        img:'./assent/school_pic/sco_3.jpg',
        text:'数据加载中，请稍后',
        price:999
    },
    {
        img:'./assent/school_pic/sco_4.jpg',
        text:'数据加载中，请稍后',
        price:999
    },
    {
        img:'./assent/school_pic/sco_5.jpg',
        text:'数据加载中，请稍后',
        price:999
    },
    {
        img:'./assent/school_pic/sco_6.jpg',
        text:'数据加载中，请稍后',
        price:999
    },
    {
        img:'./assent/school_pic/sco_7.jpg',
        text:'数据加载中，请稍后',
        price:999
    },
]
list[0].innerHTML = data_new.map(data => 
    `<li>
    <img src=${data.img} alt="">
    <div>
    <span>￥${data.price}</span>
    <p>${data.text}</p>
    </div>
    </li>`
).join(" ")
list[1].innerHTML = data_sco.map(data => 
    `<li>
    <img src=${data.img} alt="">
    <div>
    <span>￥${data.price}</span>
    <p>${data.text}</p>
    </div>
    </li>`
).join(" ")
list[2].innerHTML = data_new.map(data => 
    `<li>
    <img src=${data.img} alt="">
    <div>
    <span>￥${data.price}</span>
    <p>${data.text}</p>
    </div>
    </li>`
).join(" ")



//侧边固定导航栏
const mainContent_scroll = document.querySelector(".mainContent").offsetTop
const search_scroll = document.querySelector(".search_scroll")

const newGood = document.querySelector(".newGood").offsetTop
const schoolGood = document.querySelector(".schoolGood").offsetTop
const hotGood = document.querySelector(".hotGood").offsetTop
const toTop = document.querySelector(".toTop")
window.addEventListener("scroll",()=>{
    search_scroll.style.top = document.documentElement.scrollTop>=mainContent_scroll?0:'-100px'
    toTop.style.display = document.documentElement.scrollTop>=newGood?"block":'none'
})

const fixed_table = document.querySelector(".fixed_table")
fixed_table.addEventListener("click",(e)=>{
    // console.log(e.target.classList.contains("togo"))
    if(e.target.classList[0]==="toNew"){
        document.documentElement.scrollTop = newGood
    }else if(e.target.classList[0]==='toSco'){
        document.documentElement.scrollTop = schoolGood
    }else if(e.target.classList[0]==='toHot'){
        document.documentElement.scrollTop = hotGood
    }else if(e.target.classList[0] ==='toTop'){
        document.documentElement.scrollTop = 0
    }
})

//特效
const ad_content = document.querySelector(".ad_content")

ad_content.addEventListener("click",()=>{
    index_web.style.display = "none"
    front_web.style.display = "block"
    ad_content.style.display = "none"
})



