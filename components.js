function init () {};

var Component = new init();

init.prototype.listAll = function () {
    var ul = crEl("ul");
    data.forEach(function(el) {
        var p = crEl("p")
        var h4 = crEl("h4");
        var li = crEl("li");
        var name = h4;
        var desc = p;
        name.textContent = "" + el.name;
        desc.textContent = "     " + el.desc;
        var item = li;
        item.classList.add("item");
        item.appendChild(name);
        // item.appendChild(desc);
        ul.appendChild(item);
    });
    return ul;
};

init.prototype.CatButts = function () {
    
    // make an array of just categories
    
    _jankHash(_clowder());
    
    function _jankHash (arr, length = 20) {
        var result = new Array(length);
        arr.forEach(function (val) {
            var hashed = _hash(val, length);
            if(!result[hashed]) { 
                result[hashed] = val; 
            }

        })
        return result;
    }

    // Group of Cats is called a clowder
    function _clowder () {
        // Filter out all items without categories
        var cats = data.filter(function (item) {
            if(item.hasOwnProperty("cat")  && Array.isArray(item.cat)) return item.cat;
        });
        var result = [];
        cats.forEach(function (item) {
            result = result.concat(item.cat);
        })
        return result;
    }

    function _hash(el, length) {
        return Math.floor(el.charCodeAt() % length);
    }
}


function crEl(el) {
    return document.createElement(el);
}