(function() {
    "use strict";
    function loaded() {

        function loadJSON(callback) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', 'js/girder.json', true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    callback(xobj.responseText);
                    }
            };
            xobj.send(null);
        }

        function bend() {
            loadJSON(function(response) {
                var bender = document.getElementById("bender").innerHTML;
                var girder = JSON.parse(response);
                var output = Mustache.render(bender, girder);
                document.getElementById("bender").innerHTML = output;
            });
        }
        
        bend();
    }

    window.addEventListener("load", loaded);
})();