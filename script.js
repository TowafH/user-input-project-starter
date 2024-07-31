// Select Elements
let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let submitBtn = document.getElementById("submit_button");

// Functions

function addTitle(event){
    //Stop Refresh
    event.preventDefault();

    // Variables to retrieve and store the userInput value
    let userInputTitle = titleInput.value;
    let userInputNoun = nounInput.value;
    let userInputVerb = verbInput.value;
    let userAdjectiveInput = adjectiveInput.value;

    // Output the information to the page using Variables & innerText
    mainTitle.innerText = `${userInputTitle} ${userInputNoun} ${userInputVerb} ${userAdjectiveInput}`

}

function checkForBlank(){
     // Variables to retrieve and store the userInput value
     let userInputTitle = titleInput.value;
     let userInputNoun = nounInput.value;
     let userInputVerb = verbInput.value;
     let userAdjectiveInput = adjectiveInput.value;

     // Using a conditonal to check for blank fields
    if (userInputTitle == "" || userInputNoun == "" || userInputVerb == "" || userAdjectiveInput == ""){
    alert("Please enter in all fields")
    }
}


// Event Listeners

// 'input' updates the mainTitle in Realtime
titleInput.addEventListener("input", addTitle);
nounInput.addEventListener("input", addTitle);
verbInput.addEventListener("input", addTitle);
adjectiveInput.addEventListener("input", addTitle);

// Event listener for Button
submitBtn.addEventListener("click", checkForBlank);
