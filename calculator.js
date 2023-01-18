
let x=document.getElementById("x");
let y=document.getElementById("y");

function add(){
    let n=Number(x.value);
    let m=Number(y.value);
    document.querySelector("#affichage").innerHTML= n+m; 
}

function substraction(){
    let n=Number(x.value);
    let m=Number(y.value);
    document.querySelector("#affichage").innerHTML=n-m;
}

function multiplication(){
    let n=Number(x.value);
    let m=Number(y.value);
    document.querySelector("#affichage").innerHTML=n*m;
}

function division(){
    let n=Number(x.value);
    let m=Number(y.value);
    document.querySelector("#affichage").innerHTML=n/m;
}