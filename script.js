const container = document.querySelector("div");
const input = document.querySelector("input");
const button = document.querySelector("button");

function createGrid(){
    container.textContent='';
    let num=parseInt(input.value);

    if(num>100){
        alert("Enter number lower than 100.");
        return;
    }

    input.value='';
    container.style.width=`${num*20}px`;
    container.style.height= `${num*20}px`;

    for(let i=0; i<num*num; i++){
        const box=document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}

button.addEventListener("click",createGrid);

input.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        createGrid();
    }
});