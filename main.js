(function(){

    //formInfo selector
const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const ProfessionInput = document.querySelector("#ProfessionInput");
const formbox = document.querySelector(".formbox");

//display selector
const name = document.querySelector("#name");
const age = document.querySelector(".age");
const profession = document.querySelector(".profession");
const profileOutput = document.querySelector(".profileOutput");

//Dom Function {SaveData and  when refresh Page then data not Unshowed}
document.addEventListener('DOMContentLoaded', function(){
    let profiles;
    if (localStorage.getItem('profiles')) {
        profiles = JSON.parse(localStorage.getItem('profiles'));
    }else{
        profiles = [];
    }
    let structuree = '';
    profiles.forEach(profileOutput => {
        structuree += structure(profileOutput);
    });
    profileOutput.innerHTML = structuree;
});



//for name input
formbox.addEventListener('submit', function(evt){
    evt.preventDefault();

        if(nameInput.value === '' || ageInput.value === '' || ProfessionInput === ''){
            alert("Please fill out all fields!");
        }else{
            const input ={
                name: nameInput.value,
                age: ageInput.value,
                profession: ProfessionInput.value
            };
        
            //call the stucture function
            const structuree = structure(input);
            saveDataToStorage(input)
            profileOutput.innerHTML += structuree;
            nameInput.value = '';
            ageInput.value = '';
            ProfessionInput.value = '';
        }
    
});

function structure({name,age,profession}){
    return  `
        <div class="infoBox">
            <p id="name">Name: ${name}</p>
            <p class="age">Age: ${age}</p>
            <p class="profession">profession: ${profession}</p>
            <hr>
        </div>     
`;

};

//save data function
function saveDataToStorage(input){
    let profiles;
    if (localStorage.getItem('profiles')) {
        profiles = JSON.parse(localStorage.getItem('profiles'));
    }else{
        profiles = [];
        
    }
    profiles.push(input);
    localStorage.setItem('profiles', JSON.stringify(profiles));
};

})();

