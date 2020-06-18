var billData = localStorage.getItem("billData")
var data = JSON.parse(billData)

var target = data[data.length - 1]

var cars = localStorage.getItem("carDetails")
var carDData = JSON.parse(cars)

var cars = localStorage.getItem("carSubscription")
var carSData = JSON.parse(cars)

var login = localStorage.getItem("loginData")
var loginData = JSON.parse(login)

var user

var bookDetails = localStorage.getItem("bookDetails")

var bookData = JSON.parse(bookDetails) || []

window.addEventListener("load", function(){
    //console.log(carData[target[0]])

    for(i=0; i<loginData.length; i++){
       // console.log(loginData[i][2])
        if(loginData[i][1] == target[2]){
            //console.log(loginData[i])
            user = loginData[i]
           // console.log(user)
            renderData()
            break
        }
    }

    var con = document.getElementById("confirm")

    con.addEventListener("click", confirmBook)

    var gotoH = document.getElementById("gotoHome")

    gotoH.addEventListener("click", gotoHome)

})

function renderData(){
    //console.log(data)
    //console.log(user)
    var card = document.getElementById("bill")

    var title = document.createElement("h4")
    title.setAttribute("class", "card-title font-weight-bold")
    title.innerHTML = "Confirm Your Booking Details"

    var body = document.createElement("div")
    body.setAttribute("class","card-body")

    var name = document.createElement("h5")
    name.setAttribute("class", "card-text")
    name.innerHTML = "Name : " + user[0]

    var mail = document.createElement("p")
    mail.setAttribute("class", "card-text")
    mail.innerHTML = "We will send the The code to  unlock the car in your mail *" + user[1] +"*"

    var carInfo = document.createElement("h4")
    carInfo.setAttribute("class", "font-weight-bold")
    carInfo.innerHTML = "Car Details"

    if(target[1] == "sub"){
        //console.log(carSData[target[0]], "sub")

        var confirmInfo = carSData[target[0]]
        var img = document.createElement("img")
        img.setAttribute("src", confirmInfo[1])
        img.style.width = "150px"

        var carName = document.createElement("p")
        carName.setAttribute("class", "mt-3")
        carName.innerHTML = "Name of the Car : " + confirmInfo[0]

        var km = document.createElement("p")
        km.innerHTML = "Per Month Total Prize : Rs." + confirmInfo[2] + "/-"

        var input = document.createElement("input")
        input.setAttribute("class", "fomt-control")
        input.setAttribute("id", "mon")
        input.setAttribute("type", "number")
        input.setAttribute("placeholder", "Enter No of Months!")

        var conBtn = document.createElement("button")
        conBtn.setAttribute("class", "btn mt-3 btn-block btn-secondary")
        conBtn.setAttribute("id", "confirm")
        conBtn.innerHTML = "confirm"

        body.append(name, mail, carInfo, img, carName, km, input, conBtn)
    }
    else if(target[1] == "det"){
        //console.log(carDData[target[0]], "det")
        var confirmInfo = carDData[target[0]]
        var img = document.createElement("img")
        img.setAttribute("src", confirmInfo[1])
        img.style.width = "150px"

        var carName = document.createElement("p")
        carName.setAttribute("class", "mt-3")
        carName.innerHTML = "Name of the Car : " + confirmInfo[0]

        var km = document.createElement("p")
        km.innerHTML = "Per Kilomater : " + confirmInfo[2] + "/-"

        var input = document.createElement("input")
        input.setAttribute("class", "fomt-control")
        input.setAttribute("id", "km")
        input.setAttribute("type", "number")
        input.setAttribute("placeholder", "Enter No of Kilometers!")

        var conBtn = document.createElement("button")
        conBtn.setAttribute("class", "btn mt-3 btn-block btn-secondary")
        conBtn.setAttribute("id", "confirm")
        conBtn.innerHTML = "confirm"

        body.append(name, mail, carInfo, img, carName, km, input, conBtn)
    }    
    card.append(title, body)
}   

function confirmBook(){
    if(target[1] == "det"){
        var input = document.getElementById("km").value
    }

    var card = document.getElementById("print")
    card.innerHTML = ""

    var title = document.createElement("h4")
    title.setAttribute("class", "card-title font-weight-bold")
    title.innerHTML = "Your Booking Is Confirmed"

    var body = document.createElement("div")
    body.setAttribute("class","card-body")

    var name = document.createElement("h5")
    name.setAttribute("class", "card-text")
    name.innerHTML = "Name : " + user[0]

    var mail = document.createElement("p")
    mail.setAttribute("class", "card-text")
    mail.innerHTML = "We will send the The code to  unlock the car in your mail *" + user[1] +"*"

    var carInfo = document.createElement("h4")
    carInfo.setAttribute("class", "font-weight-bold")
    carInfo.innerHTML = "Car Details"

    if(target[1] == "sub"){
       // console.log(carSData[target[0]], "sub")

       var confirmInfo = carSData[target[0]]
       var img = document.createElement("img")
       img.setAttribute("src", confirmInfo[1])
       img.style.width = "150px"

       var carName = document.createElement("p")
       carName.setAttribute("class", "mt-3")
       carName.innerHTML = "Name of the Car : " + confirmInfo[0]

       var km = document.createElement("p")
       km.innerHTML = "Per Month : Rs." + confirmInfo[2] + "/-"

       inputm = document.getElementById("mon").value

       var mon = document.createElement("p")
       mon.innerHTML = "No. of Months : " + inputm

       var tot = document.createElement("p")
      // console.log(confirmInfo[2].split(""))
       var num = confirmInfo[2].split("")
       var temp = []
       for(i=0; i<num.length; i++){
           if(num[i] != ","){
                temp.push(num[i])
           }
       }
       var price = Number(temp.join(""))
       tot.innerHTML = "Total Amount : (" + confirmInfo[2] + "/- x " + inputm + ") => " + price * Number(inputm) + "/-"
       tot.setAttribute("class", "h4")

       var conBtn = document.createElement("button")
       conBtn.setAttribute("class", "btn mt-3 btn-block btn-secondary")
       conBtn.setAttribute("onclick", "confirmSub()")
       conBtn.innerHTML = "print/Save"

       body.append(name, mail, carInfo, img, carName, km, mon, tot , conBtn)

       var arr = [user[0], user[1], confirmInfo, "sub"]

       bookData.push(arr)

       var str = JSON.stringify(bookData)

        localStorage.setItem("bookDetails" , str)

    }
    else if(target[1] == "det"){
        //console.log(carDData[target[0]], "det")
        var confirmInfo = carDData[target[0]]
        var img = document.createElement("img")
        img.setAttribute("src", confirmInfo[1])
        img.style.width = "150px"

        var carName = document.createElement("p")
        carName.setAttribute("class", "mt-3")
        carName.innerHTML = "Name of the Car : " + confirmInfo[0]

        var km = document.createElement("p")
        km.innerHTML = "Per Kilometer : " + confirmInfo[2] + "/-"

        var kilo = document.createElement("p")
        kilo.innerHTML = "No. of Kilometers : " + Number(input)

        var total =document.createElement("h4")
        total.innerHTML = "Total Amount : (" + Number(confirmInfo[2]) + "/- x " + Number(input) + ") => " + Number(confirmInfo[2]) * Number(input) + "/-"
        total.setAttribute("class", "h4")

        var conBtn = document.createElement("button")
        conBtn.setAttribute("class", "btn mt-3 btn-block btn-secondary")
        conBtn.setAttribute("onclick","saving()")
        conBtn.innerHTML = "print/Save"

        body.append(name, mail, carInfo, img, carName, km, kilo, total, conBtn)

        var arr = [user[0], user[1], confirmInfo, Number(confirmInfo[2]) * Number(input),  "det"]

        bookData.push(arr)

        var str = JSON.stringify(bookData)

        localStorage.setItem("bookDetails" , str)
    }    
    card.append(title, body)
}

function gotoHome(){
    event.preventDefault()
    location.href = "index.html"
}

function saving(){
    alert("Your Conformation Details are sended to your mail!")

    gotoHome()
}

function confirmSub(){
    alert("Thanks for Your Subscription! your subscription details send to your Email!")

    gotoHome()
}