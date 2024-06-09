const btn = document.getElementById('btn');
let randomNum = () => {
    return Math.floor(Math.random() * 255);
};
let changeColor = () => {
let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
document.body.style.backgroundColor = randomColor;
};

btn.addEventListener("click", changeColor);
window.addEventListener("load", changeColor)



let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let input = document.querySelector('.input')

btn1.addEventListener('click' ,()=>{

   input.type = "text";
   btn1.style.display = "none";
   btn2.style.display = "block";
});
btn2.addEventListener('click' ,()=>{
 
   input.type = "password";
   btn2.style.display = "none";
   btn1.style.display = "block";
});

// nav bar
let add = document.querySelector(".add");
let menu = document.querySelector("#menu");
let cross = document.querySelector(".cross");

add.addEventListener(`click`, ()=>{
    menu.classList.add(`active`)
});

cross.addEventListener(`click`,()=>{
    menu.classList.remove(`active`)
});

menu.addEventListener(`click`,function(r){
    
    if(r.target.classList.contains(`active`)){
        
        menu.classList.remove(`active`)
        
    }
});


let navigation = document.querySelector(`#navigation`);
window.addEventListener(`scroll`,function(){
    let test = this.document.documentElement.scrollTop;
    if(test > 100){
        navigation.classList.add("action")
        
    }else{
        navigation.classList.remove("action")
    }
})



