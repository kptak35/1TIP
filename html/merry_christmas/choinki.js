document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#button1').addEventListener('click', function(){
        document.querySelector('#zdjecia').innerHTML = `<div class="zdjecia" id="zdjecia"><img src="swierk.png"></div>`
        console.log("git");
    });

    document.querySelector('#button2').addEventListener('click', function(){
        document.querySelector('#zdjecia').innerHTML=`<div class="zdjecia" id="zdjecia"><img src="sztuczna.png"></div>`
    });

    document.querySelector('#button3').addEventListener('click', function(){
        document.querySelector('#zdjecia').innerHTML=`<div class="zdjecia" id="zdjecia"><img src="biala.png"></div>`
    });
})