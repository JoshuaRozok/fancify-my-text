// Function to handle the "Bigger" button click
function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Function to handle radio button change
function styleChange() {
    var textInput = document.getElementById("textInput");
    if (document.getElementById("fancyRadio").checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

// Function to handle the "Moo" button click
function addMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim();
        var words = sentences[i].split(" ");
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord.toUpperCase() + "-Moo";
        sentences[i] = words.join(" ");
    }
    textInput.value = sentences.join(". ");
}

// Adding event listeners
document.getElementById("biggerButton").onclick = makeBigger;
document.getElementById("fancyRadio").onchange = styleChange;
document.getElementById("boringRadio").onchange = styleChange;
document.getElementById("mooButton").onclick = addMoo;