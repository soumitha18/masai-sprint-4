window.addEventListener("load", function(){
    var billData = localStorage.getItem("billData")
    var data = JSON.parse(billData)

    var target = data[data.length - 1]

    var cars = localStorage.getItem("carDetails")
    var carDData = JSON.parse(cars)

    var cars = localStorage.getItem("carSubscription")
    var carSData = JSON.parse(cars)

    var login = localStorage.getItem("loginData")
    var loginData = JSON.parse(login)

    //console.log(carData[target[0]])
    
    var card = document.getElementById("bill")

    for(i=0; i<loginData.length; i++){
       // console.log(loginData[i][2])
        if(loginData[i][1] == target[2]){
            //console.log(loginData[i])
            var cardTitle = document.createElement("h4")
        }
    }

    if(target[1] == "sub"){
        console.log(carSData[target[0]], "sub")

    }
    else if(target[1] == "det"){
        console.log(carDData[target[0]], "det")
    }
})