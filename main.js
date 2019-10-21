window.onload = function () {
    var ul = document.createElement("ul");
    
    data.forEach(function(el) {
        var p = document.createElement("p");
        var h4 = document.createElement("h4");
        var li = document.createElement("li");
        var name = h4;
        var desc = p;
        name.textContent = "Name: " + el.name;
        desc.textContent = "Description: " + el.desc;
        console.log(el)
        var item = li;
        item.classList.add("item");
        item.appendChild(name);
        item.appendChild(desc);
        ul.appendChild(item);
    });
    document.body.appendChild(ul);
}