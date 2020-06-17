window.addEventListener("load", function(){

    var sub = document.getElementById("submit")
    
    sub.addEventListener("click", setDetails)
   
})

function setDetails(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var mobile = document.getElementById("number").value
    var password = document.getElementById("password").value  

    var arr = [name, email, mobile, password]
    var data = localStorage.getItem("data")

    var loginData = JSON.parse(data) || []
    loginData.push(arr)

    var str = JSON.stringify(loginData)
    localStorage.setItem("data", str)
    
    document.getElementById("email").value = ""
    document.getElementById("number").value = ""
    document.getElementById("password").value = ""

    alert("Welcome Dear " + name + "! your account is created u can book now!") 

    event.preventDefault()
    location.href = "details.html"
}