let user=document.querySelector("#un");
let comp=document.querySelector("#cn");
let dm=document.querySelector(".dm");
let em=document.querySelector(".em");
let head=document.querySelector(".header");
let g=false;
let choices=document.querySelectorAll(".r");
dm.addEventListener("click",()=>{
    if (!g) {
    document.querySelector("body").style.backgroundColor="rgb(15, 19, 31)";
    // choices[0].style.border="10px solidrgba(15, 19, 31, 0.73)";
    // choices[1].style.border="10px solidrgb(0, 0, 0)";
    // choices[2].style.border="10px solid #09122C";
    em.innerText = "🌞";
    em.style.transform = "translate(35px, 0px)";
    em.style.transition = "all 0.3s ease-in-out";
    
    g=!g;
    }else{
        document.querySelector("body").style.backgroundColor=" #F8E7DC";
        // choices[0].style.border="10px solid #F8E7DC";
        // choices[1].style.border="10px solid #F8E7DC";
        // choices[2].style.border="10px solid #F8E7DC";
        em.innerText = "🌜";
        em.style.transform = "translate(-3px, 0px)";
        em.style.transition = "all 0.3s ease-in-out";
        g=!g;
    }
   

})




choices.forEach(element => {
    element.addEventListener("click",()=>{
       const userchoice= element.getAttribute("id");
       playgame(userchoice);
    })
});


function playgame(userchoice){
    let computer=rdm();
if(computer===userchoice){
    alert("IT'S DRAW");
    return;
}
const win=[['r','s'],['p','r'],['s','p']];
let verdict=[userchoice,computer];
let toggle=false;
for (const element of win) {
    if (element[0]===verdict[0]&& element[1]===verdict[1]) {  
        toggle=true;
    }
}

if(toggle){
    document.querySelector(".board").innerText=`You Won.${computer} lost to ${userchoice} `;
    document.querySelector(".board").style.fontSize = "30px";
    document.querySelector(".board").style.backgroundColor="green"; 
    user.innerText++;
}else{
    document.querySelector(".board").innerText=`You Lost.${userchoice} lost to ${computer} `;
    document.querySelector(".board").style.fontSize = "30px";
    document.querySelector(".board").style.backgroundColor="red"; 
    comp.innerText++;
}
}

function rdm(){
   const options=["r","p","s"];
   let idx =Math.floor(Math.random()*3);
   return options[idx];

}
