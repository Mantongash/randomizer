const button = document.querySelector(".randomize");
const nameList = document.querySelector(".name-list");
const displayName = document.querySelector(".name");
const spinner = document.querySelector(".spinner");

button.addEventListener("click", ()=>{
    const namesArr = nameList.value.split("\n");
    const randomNum = Math.floor(Math.random() * namesArr.length);
    const randomName = namesArr[randomNum];
    spinner.style.display="block";
let interval;
if(!interval){
    interval = setInterval(()=>{
        spinner.style.display="none";
        displayName.textContent = randomName;
    },5000)
}

    
    console.log(randomName)
})