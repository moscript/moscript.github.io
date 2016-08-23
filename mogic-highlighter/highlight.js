(function() {
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
      script.onreadystatechange = function() {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function() {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  var sheet = document.createElement('style');
  sheet.innerHTML = "mark{background:rgba(136,245,39,0.42);box-shadow:0px 0px 5px #88f527}";
  document.body.appendChild(sheet);
  
  var host = "//moscript.github.io/mogic-highlighter/";
  loadScript(host + "mark.min.js", (function() {
    loadScript(host + "mogic-dict.js", (function() {
      var instance = new Mark(document.getElementsByTagName("body")[0]);
      instance.mark(mogic);
    }));
  }));
  /*
if (typeof Mark == 'undefined') {
    var init = false;
    loadScript(host + "mark.min.js", (function() {
      highlight();
    }));
  } else {
    highlight();
  }
*/
})();
