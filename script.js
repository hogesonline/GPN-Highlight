// Make a function that will apply syntaxc highlighting to a given code snippet.
// The function should take in a string of code and return a new string with the proper syntax highlighting applied.
// Use the library highlight.js to help with the syntax highlighting.
// You can assume that the code snippet is written in Python.
import hljs from "https://esm.sh/highlight.js";


const codeElement = document.getElementById("code");
codeElement.value = `def hello():
    print("Hello, world!")`;
const outputElement = document.getElementById("output");

function highlightCode(code) {
    return hljs.highlight("python", code).value;
}

// update the text of the output code element for the given code snippet
function updateOutput(code) {
    outputElement.innerHTML = highlightCode(code);
}

// call updateOutput when the button is pressed
document.getElementById("highlight").addEventListener("click", function() {
    var code =codeElement.value;
    updateOutput(code);

    const s = window.getSelection();
    s.selectAllChildren(outputElement)
    document.execCommand("copy");
});

