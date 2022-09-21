const button = document.querySelector(".randomize");
const nameList = document.querySelector(".name-list");
const displayName = document.querySelector(".name");

button.addEventListener("click", ()=>{
    const namesArr = nameList.value.split("\n");
    const randomNum = Math.floor(Math.random() * namesArr.length);
    const randomName = namesArr[randomNum];
    displayName.textContent = randomName;
    console.log(randomName)
})