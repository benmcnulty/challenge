(function() {
    "use strict";
    function loaded() {

        function loadJSON(callback) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', 'js/menu.json', true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    callback(xobj.responseText);
                    }
            };
            xobj.send(null);
        }

        function showMenu() {
            loadJSON(function(response) {
                var template = document.getElementById("menu").innerHTML;
                var menu = JSON.parse(response);
                var output = Mustache.render(template, menu);
                document.getElementById("menu").innerHTML = output;
            });
        }
        
        showMenu();
    }

    window.addEventListener("load", loaded);
})();