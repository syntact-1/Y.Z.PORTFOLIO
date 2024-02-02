const btn_up = document.getElementById("btnup");
function func(){
    document.body.style.background = 'aliceblue'
    document.body.style.transition = '.6s'
}
function func2(){
    document.body.style.background = 'rgb(54, 51, 51)'
    document.body.style.transition = '.6s'
}
btn_up.onclick = function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
