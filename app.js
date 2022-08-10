var url = "https://api.funtranslations.com/translate/sith.json"
const input = document.querySelector("#input-area")
const output = document.querySelector("#output-area")
const translate_btn = document.querySelector("#translate-btn")
translate_btn.addEventListener("click", function constructURL(){

    var finalUrl = url+"?text="+input.value
    makeRequest(finalUrl)
})

function makeRequest(finalUrl)
{
    fetch(finalUrl)
    .then(response => response.json())
    .then(data => output.innerText = data.contents.translated)
}