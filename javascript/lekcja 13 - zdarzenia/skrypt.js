//const img = document.querySelector("section > img");

//document.log(document.images);


//document.images[0].onmouseover = function(){};

document.images[0].onmouseover = powieksz;

document.images[0].addEventListener("mouseout", zmniejsz); //najlepsza metoda
document.querySelector("img").addEventListener("click", bum);
//document.images[0].addEventListener("click", ()=>{
//    alert("nie klikaj! >:(");
//});

document.body.addEventListener("dblclick", ()=>{        //body - cała strona
    document.body.style = "background-color: #943236"
})

document.body.addEventListener("keypress", (e)=>{
    console.log(e);

    if(e.key == "b"){
        document.body.style = "background-color: #4574d1"

    }else if(e.code == "KeyY"){
        document.body.style = "background-color: #d4c357"
    }else if(e.code == "KeyG"){
        document.body.style = "background-color: #5c9c6e"

    }else{
        let r = Math.floor(Math.random() * 256); //floor aby pozbyć się ułamka
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        document.body.style = `background-color: rgb(${r}, ${g}, ${b})`;
    }
});



function powieksz(){
    document.images[0].src="ziemia.png";
}

function zmniejsz(){
    document.images[0].src="mala_ziemia.png";
}

const napis = document.querySelector("section");
i=0
function bum(){
    i+=1
    if (i>1) {
        document.images[0].src="bum.png"
        napis.innerHTML += ">:("
    }else{
        alert("nie klikaj! >:(");
    }
}




