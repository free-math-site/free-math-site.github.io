(function() {
    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    script.onload = function() {
        console.log("MathJax loaded successfully from jsDelivr.");
    };
    script.onerror = function() {
        console.warn("jsDelivr CDN failed. Trying cdnjs.");
        var fallbackScript = document.createElement('script');
        fallbackScript.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js";
        fallbackScript.async = true;
        fallbackScript.onload = function() {
            console.log("MathJax loaded successfully from cdnjs.");
        };
        fallbackScript.onerror = function() {
            console.error("Both CDNs failed. MathJax could not be loaded. Please check freemath's page about technical issues. You can find a link to it at the homepage.");
        };
        document.head.appendChild(fallbackScript);
    };
    document.head.appendChild(script);
})();