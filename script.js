// Select Elements
let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let submitBtn = document.getElementById("submit_button");
let storyResult = document.getElementById("story_result");
let formContainer = document.querySelector("form");

// Functions

function addTitle(event){
    //Stop Refresh
    event.preventDefault();

    // Output the information to the page using Variables & innerText
    mainTitle.innerText = titleInput.value;
}

function checkForBlank(event){
    //Stop Refresh
    event.preventDefault();
   
     // Variables to retrieve and store the userInput value
     let userInputTitle = titleInput.value;
     let userInputNoun = nounInput.value;
     let userInputVerb = verbInput.value;
     let userAdjectiveInput = adjectiveInput.value;

     formContainer.style.display = "none";
     storyResult.innerText = `Last night I ate a ${userInputNoun}, and today I just had to ${userInputVerb}. What a ${userAdjectiveInput} day!`;


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
















// MASH JS
let mashBtn = document.getElementById("mash_button");
let houseInput = document.getElementById("house");
let petInput = document.getElementById("pet");
let foodInput = document.getElementById("food");
let collegeInput = document.getElementById("college");
let mashOutput = document.getElementById("mash_story");


//Event Listener for Button
mashBtn.addEventListener("click", mash);

// houseInput.addEventListener("change", getHome);
// petInput.addEventListener("change", getPet);
// foodInput.addEventListener("change", getFood);
// collegeInput.addEventListener("change", getCollege);

function mash(event){
    // Stop refresh
    event.preventDefault();

    
    let house = getHome();
    let travelCount = getTravelCount();
    let pet = getPet();
    let food = getFood();
    let college = getCollege()

    // if (house == "Cave" && pet == "Spider" && food == "Spinach" && college == "Monsters University"){
    //     console.log("You got really unlucky!")
    //     console.log(" ")
    // }

    mashOutput.innerText = `You will live in a ${house} and travel to ${travelCount} countries with your pet ${pet}! You will eat ${food} and enroll in ${college}`;
    
}

//Function to generate a random integer
function randNumGenerator(randNum){
    let decimalGenerator = Math.random() * randNum;
    let floorRandDecimal = Math.floor(decimalGenerator);
    return floorRandDecimal
}

//Function to retrieve the home value
function getHome(){
    let userHouseInput =  houseInput.value
    let getHomeArray = ["Mansion", "Castle", "Shack", "House", "Cave"]; 
    if (userHouseInput == true){ 
    getHomeArray.push(userHouseInput);
    } //If the user DID input a value, .push the value into the Array


    let randNum = randNumGenerator(getHomeArray.length); //Generate a random # to output from the getHomeArray, according to its length
    return getHomeArray[randNum]; //Generated randomInteger will select one of the items in the getHomeArray
}

function getTravelCount(){
    let randNum = randNumGenerator(101); //Any random value using the randNumGenerator function
    return randNum; //makes the randNum value equivalent to what was retrieved from the above statement
}

function getPet(){
    let userPetInput = petInput.value;
    let randomPetsArray = ["Cat", "Dog", "Hamster", "Pikachu", "Spider"];
    let random50Chance = Math.random() < 0.5; //Create a 50% chance variable

    if (random50Chance && userPetInput == true){
        return userPetInput; //Checks if the user did input a value to run the random50Chance to output their value or the values in the Array
    } else {
        let randNum = randNumGenerator(randomPetsArray.length);
        return randomPetsArray[randNum]; //If the user didn't input a value, a RandomInteger will be generated to pick one of the options, which is found using randNum here
    }
}

function getFood(){
    let userFoodInput = foodInput.value;
    let randomFoodArray = ["Pizza", "Bread", "Apple", "a Philly Cheesesteak", "Spinach"];

    if (userFoodInput == true){
        return userFoodInput;
    } else {
        let randNum = randNumGenerator(randomFoodArray.length);
        return randomFoodArray[randNum];
    }
}

function getCollege(){
    let userCollegeInput = collegeInput.value;
    let randomCollegeArray = ["Harvard", "MIT", "NYU", "Cornell", "Monsters University"];

    if (userCollegeInput == true){
        return userCollegeInput;
    } else {
        let randNum = randNumGenerator(randomCollegeArray.length);
        return randomCollegeArray[randNum];
    }
}
