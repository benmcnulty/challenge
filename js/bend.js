(function() {
    "use strict";
    function loaded() {
        var bender = document.getElementById("bender").innerHTML;
        var girder = {
            name: "Menu",
            type: "JSON",
            class: "girder"
        };
        
        var output = Mustache.render(bender, girder);
            document.getElementById("bender").innerHTML = output;
        }

    window.addEventListener("load", loaded);
})();