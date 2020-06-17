window.addEventListener("load", function(){
    var data = localStorage.getItem("carDetails")

    var totalCars = JSON.parse(data)

    create(totalCars)
})

function create(cars){
    var div = document.getElementById("cars")

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
    img.setAttribute("class", "offset-2 width")

    var text = document.createElement("p")
    text.setAttribute("class", "card-text text-muted")
    text.innerHTML = "Per Kilometer : " + data[2] +"/-"

    var btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-primary rounded-pill")
    btn.innerHTML = "Book"

    card.append(title, img, text, btn)

    div.append(card)

    return div
}