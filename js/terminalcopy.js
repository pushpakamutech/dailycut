/*global RealisticTypewriter, document*/

"use strict";

function prompt(element, text) {
    var span = document.createElement("span");
    span.innerHTML = text;
    element.appendChild(span);
}

function start() {
    var realisticTypewriter = new RealisticTypewriter(),
        typeWriterElement = document.getElementById("typewriter");

    prompt(typeWriterElement, "");

    // OK, I know the code could look better, but this is just a quick example
    setTimeout(function () {
        realisticTypewriter.type("a closer connection with your food.", typeWriterElement, function () {
            prompt(typeWriterElement, "<br/><img src='images/down_arrow.png'> ");
            setTimeout(function () {
                prompt(typeWriterElement, "");
                prompt(typeWriterElement, " ");
                realisticTypewriter.type("", typeWriterElement, function () {
                    prompt(typeWriterElement, "");
                    setTimeout(function () {
                        prompt(typeWriterElement, "logout<br/><br/>");
                        prompt(typeWriterElement, "[Process completed]<br/>");
                    }, 500); 
                });
            }, 1000);
        });
    }, 1000);
}

var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        start();
        clearInterval(readyStateCheckInterval);
    }
}, 10);