var data = localStorage.getItem("carDetails")
var totalCars = JSON.parse(data)
var targetbtn
window.addEventListener("load", function(){

    createLH(totalCars)

    var login = document.getElementById("login")

    login.addEventListener("click", function(){
        checkData()
    })

    var div = document.getElementById("cars")

    div.addEventListener("click", function(){
        targetbtn = event.target.getAttribute("id")
        console.log(targetbtn)
    })
})

function createLH(cars){
    var div = document.getElementById("cars")
    div.innerHTML = ""

    for(i=0; i<cars.length; i++){
        var data = createCard(cars[i], i)
        div.append(data)
    }
}

function createHL(cars){
    var div = document.getElementById("cars")
    div.innerHTML = ""

    for(i=cars.length - 1; i>0; i--){
        var data = createCard(cars[i], i)
        div.append(data)
    }
}

function createCard(data, i){
    var div = document.createElement("div")
    div.setAttribute("class", "col-4")

    var card = document.createElement("div")
    card.setAttribute("class", "card pl-3 shadow p-3 mb-5 bg-white rounded" )

    var title = document.createElement("h5")
    title.innerHTML = data[0]

    var img = document.createElement("img")
    img.setAttribute("src" , "https://images.unsplash.com/photo-1561131506-3c48296e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
    img.setAttribute("class", "offset-2 width")

    var text = document.createElement("p")
    text.setAttribute("class", "card-text text-muted")
    text.innerHTML = "Per Kilometer : " + data[2] +"/-"

    var btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-primary rounded-pill")
    btn.setAttribute("data-toggle", "modal" )
    btn.setAttribute("data-target", "#exampleModal")
    btn.id = i
    btn.innerHTML = "Book"

    card.append(title, img, text, btn)

    div.append(card)

    return div
}


function selectOption(){
    var select = document.getElementById("sort").value
    // console.log(select)
    if(select == "low to high"){
        createLH(totalCars)
    }
 
    else if( select == "high to low"){
        createHL(totalCars)
    }
}

function checkData(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

   // console.log(email , password)

    var loginData = localStorage.getItem("loginData")
    var data = JSON.parse(loginData)
    
    for(var i=0; i<data.length; i++){
        if(email == data[i][1]){
            if(password == data[i][2]){
                generateBill(email)
                break
            }
        }
    }

    event.preventDefault()
    location.href = "bill.html"
}

function generateBill(email){

    var arr = [Number(targetbtn), "det", email]
    var data = localStorage.getItem("billData")

    var billData = JSON.parse(data) || []
    billData.push(arr)

    var str = JSON.stringify(billData)
    localStorage.setItem("billData", str)
}