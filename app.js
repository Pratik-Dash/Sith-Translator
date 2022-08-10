var url = "https://api.funtranslations.com/translate/sith.json"
const input = document.querySelector("#input-area")
const output = document.querySelector("#output-area")
const translate_btn = document.querySelector("#translate-btn")
translate_btn.addEventListener("click", function constructURL(){

    var finalUrl = url+"?text="+input.value
    makeRequest(finalUrl)
})
function handleError(error)
{
    output.innerText = "You have exceeded the max number of translations per hour which is 5. Please try after some time."

}
function makeRequest(finalUrl)
{
    fetch(finalUrl)
    .then(response => response.json())
    .then(data => output.innerText = data.contents.translated)
    .catch(handleError)
}