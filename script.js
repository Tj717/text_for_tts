const button = document.getElementById('myButton');
button.addEventListener("click", nextPage);
let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
page1.style.display = "block";
page2.style.display = "none";

function nextPage() {
    // if its not hidden, hide it
    if (page1.style.display !== "none") {
        page1.style.display = "none";
    } else {
        page1.style.display = "block";
    }
    if (page2.style.display === "none") {
        page2.style.display = "block";
    } else {
        page2.style.display = "none";
    }
}

