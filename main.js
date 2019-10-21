window.onload = function () {    
    var stuff = document.querySelector(".stuff")
    var cat = document.querySelector(".cat")

    // On load list all and load category buttons
    stuff.appendChild(Component.listAll());
    cat.appendChild(Component.CatButts());

    document.getElementById("all").addEventListener("click", function(event) {
        stuff.innerHTML = "";
        stuff.appendChild(Component.listAll());
    });

    // console.log(Component.CatButts());
    cat.addEventListener("click", function(event) {
        if(event.target.id)  {
            stuff.innerHTML = "";
            stuff.appendChild(Component.ShowCat(event.target.id));
        }
    });

}
