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