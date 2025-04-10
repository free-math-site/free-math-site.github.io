window.addEventListener("DOMContentLoaded", function () {
    var body = document.getElementById("body");
    var savedBackgroundColor = localStorage.getItem("backgroundColor");
    var savedTextColor = localStorage.getItem("textColor");
    var savedBorderColor = localStorage.getItem("borderColor");

    if (savedBackgroundColor) {
        body.style.backgroundColor = savedBackgroundColor;
    }
    if (savedTextColor) {
        body.style.color = savedTextColor;
    }
    if (savedBorderColor) {
        const elementsToStyle = [
            document.getElementById("settings_box1"),
            document.getElementById("settings_box2"),
            ...document.getElementsByTagName("h1"),
            ...document.getElementsByTagName("span"),
            ...document.getElementsByTagName("h4"),
        ];
        elementsToStyle.forEach(element => {
            if (element) {
                element.style.borderColor = savedBorderColor;
            }
        });
    }
});

var button = document.getElementById("defaultMode");
button.addEventListener("click", function () {
    var body = document.getElementById("body");
    body.style.backgroundColor = "lightgray";
    body.style.color = "black";

    localStorage.setItem("backgroundColor", "lightgray");
    localStorage.setItem("textColor", "black");

    var settings_box1 = document.getElementById('settings_box1');
    settings_box1.style.borderColor = "red";
    var settings_box2 = document.getElementById('settings_box2');
    settings_box2.style.borderColor = "red";

    localStorage.setItem("borderColor", "red");

    const headers = document.getElementsByTagName("h1");
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.borderColor = "red";
    }

    const course_sets = document.getElementsByTagName("span");
    for (let i = 0; i < course_sets.length; i++) {
        course_sets[i].style.borderColor = "red";
    }

    const headers2 = document.getElementsByTagName("h4");
    for (let i = 0; i < headers2.length; i++) {
        headers2[i].style.borderColor = "red";
    }
});

var button1 = document.getElementById("lightMode");
button1.addEventListener("click", function () {
    var body = document.getElementById("body");
    body.style.backgroundColor = "white";
    body.style.color = "black";

    localStorage.setItem("backgroundColor", "white");
    localStorage.setItem("textColor", "black");

    var settings_box1 = document.getElementById('settings_box1');
    settings_box1.style.borderColor = "red";
    var settings_box2 = document.getElementById('settings_box2');
    settings_box2.style.borderColor = "red";

    localStorage.setItem("borderColor", "red");

    const headers = document.getElementsByTagName("h1");
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.borderColor = "red";
    }

    const headers2 = document.getElementsByTagName("h4");
    for (let i = 0; i < headers2.length; i++) {
        headers2[i].style.borderColor = "red";
    }

    const course_sets = document.getElementsByTagName("span");
    for (let i = 0; i < course_sets.length; i++) {
        course_sets[i].style.borderColor = "red";
    }
});

var button2 = document.getElementById("darkMode");
button2.addEventListener("click", function () {
    var body = document.getElementById("body");
    body.style.backgroundColor = "black";
    body.style.color = "lightgray";

    localStorage.setItem("backgroundColor", "black");
    localStorage.setItem("textColor", "lightgray");

    var settings_box1 = document.getElementById('settings_box1');
    settings_box1.style.borderColor = "red";
    var settings_box2 = document.getElementById('settings_box2');
    settings_box2.style.borderColor = "red";

    localStorage.setItem("borderColor", "red");

    const headers = document.getElementsByTagName("h1");
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.borderColor = "red";
    }

    const headers2 = document.getElementsByTagName("h4");
    for (let i = 0; i < headers2.length; i++) {
        headers2[i].style.borderColor = "red";
    }

    const course_sets = document.getElementsByTagName("span");
    for (let i = 0; i < course_sets.length; i++) {
        course_sets[i].style.borderColor = "red";
    }
});

var button3 = document.getElementById("darkMode2");
button3.addEventListener("click", function () {
    var body = document.getElementById("body");
    body.style.backgroundColor = "black";
    body.style.color = "green";

    localStorage.setItem("backgroundColor", "black");
    localStorage.setItem("textColor", "green");

    var settings_box1 = document.getElementById('settings_box1');
    settings_box1.style.borderColor = "blue";
    var settings_box2 = document.getElementById('settings_box2');
    settings_box2.style.borderColor = "blue";

    localStorage.setItem("borderColor", "blue");

    const headers = document.getElementsByTagName("h1");
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.borderColor = "blue";
    }

    const headers2 = document.getElementsByTagName("h4");
    for (let i = 0; i < headers2.length; i++) {
        headers2[i].style.borderColor = "blue";
    }

    const course_sets = document.getElementsByTagName("span");
    for (let i = 0; i < course_sets.length; i++) {
        course_sets[i].style.borderColor = "blue";
    }
});