window.setTimeout(function() {
    document.body.style.backgroundColor = "red";
}, 1000)

window.setInterval(function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 4000)