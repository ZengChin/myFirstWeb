
const sign_form = document.querySelector(".sign_form")
const user = document.querySelector("#user")
const password = document.querySelector("#password")
const password_confirm = document.querySelector("#password_confirm")


user.addEventListener("change",verify_user)
password.addEventListener("change",verify_pass)
password_confirm.addEventListener("change",verify_Vpass)

alert("账号只有最后一个注册的才生效")
function verify_user(){
    const stand = /^[a-zA-Z0-9_]{3,6}$/
    const nextNode = user.nextElementSibling
    if(stand.test(user.value)){
        nextNode.innerHTML = ' '
        if(nextNode.classList.contains("false")) nextNode.classList.remove("false")
        nextNode.classList.add("ture")
        return true
    }
    else{
        nextNode.innerHTML = '格式错误'
        if(nextNode.classList.contains("ture")) nextNode.classList.remove("ture")
        nextNode.classList.add("false")
        return false
    }
}


function verify_pass(){
    const stand = /^[a-zA-Z0-9_]{3,6}$/
    const nextNode = password.nextElementSibling
    if(stand.test(password.value)){
        nextNode.innerHTML = ' '
        if(nextNode.classList.contains("false")) nextNode.classList.remove("false")
        nextNode.classList.add("ture")
        return true
    }
    else{
        nextNode.innerHTML = '格式错误'
        if(nextNode.classList.contains("ture")) nextNode.classList.remove("ture")
        nextNode.classList.add("false")
        return false
    }
}


function verify_Vpass(){
    const stand = password.value
    const nextNode = password_confirm.nextElementSibling
    if(password_confirm.value === stand){
        nextNode.innerHTML = ' '
        if(nextNode.classList.contains("false")) nextNode.classList.remove("false")
        nextNode.classList.add("ture")
        return true
    }
    else{
        nextNode.innerHTML = '密码错误'
        if(nextNode.classList.contains("ture")) nextNode.classList.remove("ture")
        nextNode.classList.add("false")
        return false
    }
}


sign_form.addEventListener("submit",(e)=>{
        let flag = true;
        if(!verify_user()) {e.preventDefault();flag = false}
        if(!verify_pass()) {e.preventDefault();flag = false}
        if(!verify_Vpass()) {e.preventDefault();flag = false}
                
        if(flag){
            e.preventDefault();
            localStorage.setItem("username",JSON.stringify(user.value))
            localStorage.setItem("password",JSON.stringify(password.value))
            sign_form.reset()
            alert("登录成功")
            window.location.replace('../index.html')
        }
})