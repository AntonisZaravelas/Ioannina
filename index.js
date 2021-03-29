//Contact Section 

var textarea = document.getElementById('text-area');
window.onload = textareaLengthCheck();
function textareaLengthCheck() {
    var textArea = textarea.value.length;
    var charactersLeft = 400 - textArea;
    var count = document.getElementById('characters-left');
    count.innerHTML = "Characters left: " + charactersLeft;
}

textarea.addEventListener('keyup', textareaLengthCheck);
