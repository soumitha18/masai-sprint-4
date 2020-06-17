window.addEventListener("load", function(){
    //alert("soumitha")
    var car  = {

    }

    var home = document.getElementById("home")
    home.addEventListener("click", gotoHome)

    var detail = document.getElementById("detail")
    detail.addEventListener("click", gotoDetail)

    var subscription = document.getElementById("subscription")
    subscription.addEventListener("click", gotoSubscription)

    var sign = document.getElementById("sign")
    sign.addEventListener("click", gotoSign)
})

function gotoHome(){
    event.preventDefault()
    location.href = "index.html"
}

function gotoDetail(){
    event.preventDefault()
    location.href = "details.html"
}

function gotoSubscription(){
    event.preventDefault()
    location.href = "subscription.html"
}

function gotoSign(){
    event.preventDefault()
    location.href = "sign.html"
}