window.addEventListener("load", function(){
    
    var get = document.getElementById("getCars")
    get.addEventListener("click", function(){
        var data = localStorage.getItem("carSubscription")
        var cars = JSON.parse(data)
        create(cars)
        //console.log(cars)
    })
})

function create(cars){
    var div = document.getElementById("cars")

    var remove = document.getElementById("position")

    remove.remove()

    var option = document.getElementById("option")

    var span = document.createElement("span")
    span.setAttribute("class" , "h3 font-weight-bold ml-4")
    span.innerHTML = "Total Cars that We have!"

    var select = document.createElement("select")
    select.setAttribute("class", "border-dark p-2 bg-light rounded float-right")
    select.setAttribute("id", "sort")
    var option1 = document.createElement("option")
    option1.innerHTML = "High to Low"
    option1.setAttribute("value", "high to low")
    var option2 = document.createElement("option")
    option2.innerHTML = "Low to High"
    option2.setAttribute("value", "low to high")
    select.append( option1 , option2)

    option.append(span, select)

    for(i=0; i<cars.length; i++){
        var data = createCard(cars[i])
        div.append(data)
    }

}

function createCard(data){
    var div = document.createElement("div")
    div.setAttribute("class", "col-4")

    var card = document.createElement("div")
    card.setAttribute("class", "card pl-3 shadow p-3 mb-5 bg-white rounded" )

    var title = document.createElement("h5")
    title.innerHTML = data[0]

    var img = document.createElement("img")
    img.setAttribute("src" , "https://images.unsplash.com/photo-1561131506-3c48296e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
    img.setAttribute("class", "offset-3 width")

    var text = document.createElement("p")
    text.setAttribute("class", "card-text text-muted mt-3")
    text.innerHTML = "Per Kilometer : ₹" + data[2]

    var btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-primary rounded-pill")
    btn.setAttribute("data-toggle", "modal" )
    btn.setAttribute("data-target", "#exampleModal")
    btn.innerHTML = "Book"

    createModal()

    card.append(title, img, text, btn)

    div.append(card)

    return div
}


function createModal(){
    var div = document.createElement("div")
    div.setAttribute("class", "modal fade")
    div.setAttribute("id", "exampleModal")
    div.setAttribute("tabindex", "-1")
    div.setAttribute("role" , "dialog")
    div.setAttribute("aria-labelledby", "exampleModalLabel")
    div.setAttribute("aria-hidden", "true")

    var dialog = document.createElement("div")
    dialog.setAttribute("class" , "modal-dialog p-5")
    dialog.setAttribute("role", "document")

    var heading = document.createElement("h5")
    heading.setAttribute("class", "mb-4 font-weight-bold")

    var emailform = document.createElement("div")
    var label1 = document.createElement("label")
    label1.setAttribute("for" , "exampleInputEmail1")
    label1.innerHTML = "Email address"
    var form1 = document.createElement("input")
    form1.setAttribute("type" , "email")
    form1.setAttribute("class" , "form-control")
    form1.setAttribute("id", "email")
    form1.setAttribute("aria-describedby" , "emailHelp")
    form1.setAttribute("placeholder" , "Enter Email!")
    emailform.append(label1, form1)

    var passwordform = document.createElement("div")
    var label2 = document.createElement("label")
    label2.setAttribute("for" , "exampleInputPassword1")
    label2.innerHTML = "Password"
    var form2 = document.createElement("input")
    form2.setAttribute("type" , "password")
    form2.setAttribute("class" , "form-control")
    form2.setAttribute("id", "password")
    form2.setAttribute("placeholder" , "Enter Password!")
    passwordform.append(label2, form2)

    dialog.append(heading, emailform, passwordform)
    div.append(dialog)
}

