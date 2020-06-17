window.addEventListener("load", function(){
    var data = localStorage.getItem("carDetails")

    var totalCars = JSON.parse(data)

    create(totalCars)
})

function create(cars){
    var div = document.getElementById("cars")

    
}