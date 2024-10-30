const name1 = document.querySelector("#name")
const password_log = document.querySelector("#password_log")
const loge = document.querySelector(".loge")

// console.log(111);
// console.log(JSON.parse(localStorage.getItem("username")));
// console.log(JSON.parse(localStorage.getItem("password")));
// console.log(name1.value);
// console.log(password_log.value);


loge.addEventListener("submit",(e)=>{
    console.log(111);
    e.preventDefault()
    if(localStorage.getItem("username")){
       if (name1.value === JSON.parse(localStorage.getItem("username"))&&
        password_log.value=== JSON.parse(localStorage.getItem("password"))){
            alert("登入成功")
            loge.reset()
            // console.log(111);     
       }
    }else{
        alert("用户不存在")
    }
})