var data = localStorage.getItem("carSubscription")
var cars = JSON.parse(data)
var targetbtn

window.addEventListener("load", function(){
    
    var get = document.getElementById("getCars")
    get.addEventListener("click", function(){
       
        create(cars)
        //console.log(cars)
    })

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

function create(cars){
    
    var remove = document.getElementById("position")

    remove.remove()

    var option = document.getElementById("option")

    var span = document.createElement("span")
    span.setAttribute("class" , "h3 font-weight-bold ml-4")
    span.innerHTML = "Total Cars that We have!"

    var select = document.createElement("select")
    select.setAttribute("class", "border-dark p-2 bg-light rounded float-right")
    select.setAttribute("id", "sort")
    select.setAttribute("onchange", "selectOption()")
    var option1 = document.createElement("option")
    option1.innerHTML = "Low to High"
    option1.setAttribute("value", "low to high")
    var option2 = document.createElement("option")
    option2.innerHTML = "High to Low"
    option2.setAttribute("value", "high to low")
    select.append( option1 , option2)

    option.append(span, select)

    renderDomLH(cars)
   
}

function renderDomLH(cars){
    var div = document.getElementById("cars")
    div.innerHTML = ""

    for(i=0; i<cars.length; i++){
        var data = createCard(cars[i], i)
        div.append(data)
    }
}

function renderDomHL(cars){
    var div = document.getElementById("cars")
    div.innerHTML = ""

    for(i=cars.length-1; i>=0; i--){
        var data = createCard(cars[i], i)
        div.append(data)
    }
}

function createCard(data , i){
   // console.log(data)
    var div = document.createElement("div")
    div.setAttribute("class", "col-4")

    var card = document.createElement("div")
    card.setAttribute("class", "card pl-3 shadow p-3 mb-5 bg-white rounded" )

    var title = document.createElement("h5")
    title.innerHTML = data[0]

    var img = document.createElement("img")
    img.setAttribute("src" , data[1])
    img.setAttribute("class", "offset-3 width")

    var text = document.createElement("p")
    text.setAttribute("class", "card-text text-muted mt-3")
    text.innerHTML = "₹" + data[2]

    var btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-primary rounded-pill target")
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
       renderDomLH(cars)
   }

   else if( select == "high to low"){
        renderDomHL(cars)
   }
}

function checkData(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

   // console.log(email , password)

    var loginData = localStorage.getItem("loginData")
    var data = JSON.parse(loginData)
    
    for(var i=0; i<data.length; i++){
        if(password == data[i][2] && email == data[i][1]){
            generateBill(email)
            event.preventDefault()
            location.href = "bill.html"
            break
        }
        else{
            alert("Something went wrong! please signup or check your password!")
        }
        
    }
   
}

function generateBill(email){

    var arr = [Number(targetbtn) , "sub", email]
    var data = localStorage.getItem("billData")

    var billData = JSON.parse(data) || []
    billData.push(arr)

    var str = JSON.stringify(billData)
    localStorage.setItem("billData", str)
}