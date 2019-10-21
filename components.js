function init () {};
var Component = new init();

init.prototype.listAll = function () {
    var ul = crEl("ul");
    var self = this;

    data.forEach(function (el) { 
        ul.appendChild(self._listItem(el));
    });

    return ul;
};

init.prototype.CatList = function () {
    var ul = crEl("ul");
    var self = this;

    data.forEach(function (el) { 
        ul.appendChild(self._listItem(el)); 
    });
    return ul;
}

init.prototype.ShowCat = function (cat) {
    var ul = crEl("ul");
    var self = this;
    data.forEach(function (el) {
        if(el.cat) {
            for(var i = 0; i < el.cat.length; i ++) {
                if(el.cat[i] === cat) {
                    ul.appendChild(self._listItem(el));
                }
            }
        }
    });

    return ul;
}

init.prototype._listItem = function (el) {
    var li = crEl("li"),
        name = crEl("h4"),
        desc = crEl("p"),
        img = crEl("img"),
        id = el.name.toLowerCase();
        id= id.replace(new RegExp(" ", 'g'), "-");
        
    if(el.img) img.src = el.img;
    name.textContent = "" + el.name;
    desc.textContent = "     " + el.desc;
    li.classList.add("item");
    li.id = id;
    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(desc);

    return li;
}

init.prototype.CatButts = function () {
    return this.createCatButts();
}


init.prototype.createCatButts = function () {
    
    // make an array of just categories
    
    var catYarn = _jankHash(_clowder());
    var ul = crEl("ul");
    
    catYarn.forEach(function(cat) {
        var li = crEl("li");
        var btn = crEl("button");

        btn.textContent = cat;
        btn.id = cat;
        li.appendChild(btn);
        ul.appendChild(li)
    })

    return ul;
    
    
    function _jankHash (arr, length = 20) {
        var result = new Array(length);
        arr.forEach(function (val) {
            var hashed = _hash(val, length);
            if(!result[hashed]) { 
                result[hashed] = val; 
            }

        });

        result = result.filter(function (val) {
            if(val) return val;
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