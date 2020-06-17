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


}