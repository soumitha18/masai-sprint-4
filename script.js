window.addEventListener("load", function(){
    //alert("soumitha")

    var home = document.getElementById("home")
    home.addEventListener("click", gotoHome)

    var detail = document.getElementById("detail")
    detail.addEventListener("click", gotoDetail)

    var subscription = document.getElementById("subscription")
    subscription.addEventListener("click", gotoSubscription)

    var sign = document.getElementById("sign")
    sign.addEventListener("click", gotoSign)

})

var carSubscription = [
    ["Tigo (45K kms)", "resources/tigo.jpeg" , "12,999/mo"],
    ["Swift MT (45K kms)", "resources/swift.jpeg" , "13,499/mo"],
    ["Freestyle (45K kms)", "resources/freestyle.jpeg" , "13,499/mo"],
    ["Tata Tiago" , "resources/polo.jpeg" , "13,499/mo"],
    ["Swift AT (45K kms)" , "resources/swift.jpeg" , "14,999/mo"],
    ["Baleno (45k kms)" ,"resources/baleno.jpg", "15,999/mo"],
    ["Volkswagen Polo (Petrol)", "resources/polo.jpeg" , "16,499/mo"],
    ["120 (45K kms)", "resources/120.png" ,"16,499/mo"],
    ["Maruti Swift" , "resources/swift.jpeg" , "17,499/mo"],
    ["Ford FreeStyle" , "resources/freestyle.jpeg" , "17,499/mo"],
    ["Brezza", "resources/scorpio.jpeg" , "18,499/mo"],
    ["Maruti Swift AT" , "resources/swift.jpeg" , "18,499/mo"],
    ["Nexon", "resources/hexon.jpeg" , "18,999/mo"],
    ["Baleno" , "resources/baleno.jpg" , "19,499/mo"],
    ["Tata Nexon", "resources/hexon.jpeg" , "19,499/mo"],
    ["Nexon AT", "resources/hexon.jpeg" , "20,499/mo"],
    ["Hyundai i20 Elite" , "resources/baleno.jpg" , "20,499/mo"],
    ["Nexon AT (45K kms)" , "resources/hexon.jpeg" , "20,499/mo"],
    ["Hyundai Creta", "resources/hexa.jpeg" , "22,499/mo"],
    ["Creta (45K kms)" , "resources/creta.jpeg" , "22,499/mo"],
    ["Verna" , "resources/verna.jpeg" , "23,499/mo"],
    ["Kicks (Petrol)", "resources/kicks.jpeg" , "23,499/mo"],
    ["Hexa" , "resources/hexa.jpeg" , "26,499/mo"],
    ["Mahindra XUV", "resources/xul.jpeg" , "27,499/mo"],
    ["XUV 500(45K kms)" , "resources/xul.jpeg" , "27,499/mo"],
    ["Mahindra Scorpio", "resources/scorpio.jpeg" , "28,999/mo"],     
    ["Hyundai Creta AT" , "resources/baleno.jpg" , "32,499/mo"],
    ["Mahindra XUV AT" , "resources/xul.jpeg" , "35,499/mo"]
]

var carDetails = [
    ["Tigo (45K kms)", "resources/tigo.jpeg" , "70"],
    ["Swift MT (45K kms)", "resources/swift.jpeg" , "80"],
    ["Freestyle (45K kms)", "resources/freestyle.jpeg" , "80"],
    ["Tata Tiago" , "resources/polo.jpeg" , "80"],
    ["Swift AT (45K kms)" , "resources/swift.jpeg" , "100"],
    ["Baleno (45k kms)" ,"resources/polo.jpeg", "130"],
    ["Volkswagen Polo (Petrol)", "resources/polo.jpeg" , "150"],
    ["120 (45K kms)", "resources/120.png" ,"150"],
    ["Maruti Swift" , "resources/swift.jpeg" , "180"],
    ["Ford FreeStyle" , "resources/freestyle.jpeg" , "180"],
    ["Brezza", "resources/polo.jpeg" , "200"],
    ["Maruti Swift AT" , "resources/swift.jpeg" , "200"],
    ["Nexon", "resources/hexon.jpeg" , "200"],
    ["Baleno" , "resources/baleno.jpg" , "220"],
    ["Tata Nexon", "resources/hexon.jpeg" , "220"],
    ["Nexon AT", "resources/hexon.jpeg" , "250"],
    ["Hyundai i20 Elite" , "resources/baleno.jpg" , "250"],
    ["Nexon AT (45K kms)" , "resources/hexon.jpeg" , "250"],
    ["Hyundai Creta", "resources/polo.jpeg" , "280"],
    ["Creta (45K kms)" , "resources/creta.jpeg" , "280"],
    ["Verna" , "resources/verna.jpeg" , "300"],
    ["Kicks (Petrol)", "resources/kicks.jpeg" , "300"],
    ["Hexa" , "resources/hexa.jpeg" , "320"],
    ["Mahindra XUV", "resources/xul.jpeg" , "320"],
    ["XUV 500(45K kms)" , "resources/xul.jpeg" , "320"],
    ["Mahindra Scorpio", "resources/scorpio.jpeg" , "350"],     
    ["Hyundai Creta AT" , "resources/creta.jpeg" , "370"],
    ["Mahindra XUV AT" , "resources/xul.jpeg" , "400"]
]

function gotoHome(){
    event.preventDefault()
    location.href = "index.html"
}

function gotoDetail(){
    var data = JSON.stringify(carDetails)

    localStorage.setItem("carDetails" , data)

    event.preventDefault()
    location.href = "details.html"
}

function gotoSubscription(){
    var data = JSON.stringify(carSubscription)

    localStorage.setItem("carSubscription" , data)

    event.preventDefault()
    location.href = "subscription.html"
}

function gotoSign(){
    event.preventDefault()
    location.href = "sign.html"
}