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
//<img src='images/down_arrow.png'>
    prompt(typeWriterElement, "");

    // OK, I know the code could look better, but this is just a quick example
    setTimeout(function () {
        realisticTypewriter.type("Clean eating doesn’t have to mean hating life", typeWriterElement, function () {
            prompt(typeWriterElement, "<br/> ");
            setTimeout(function () {
                prompt(typeWriterElement, "Making clean eating suck less, one protein salad at a time<br/>");
                prompt(typeWriterElement, "Whoever said clean eating can’t be enjoyable was doing it all wrong");
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