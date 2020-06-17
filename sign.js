window.addEventListener("load", function(){

    var sub = document.getElementById("submit")
    
    sub.addEventListener("click", setDetails)
   
})

function setDetails(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value  

    var arr = [name, email,  password]
    var data = localStorage.getItem("logindata")

    var loginData = JSON.parse(data) || []
    loginData.push(arr)

    var str = JSON.stringify(loginData)
    localStorage.setItem("logindata", str)
    
    document.getElementById("email").value = ""
    document.getElementById("name").value = ""
    document.getElementById("password").value = ""

    alert("Welcome Dear " + name + "! your account is created u can book now!") 

    event.preventDefault()
    location.href = "details.html"
}