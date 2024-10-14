var a = document.querySelector(".container")
var b = document.querySelector(".crsr")

a.addEventListener("mousemove",function(dets){
    b.style.left = dets.x+"px"
    b.style.top = dets.y+"px"
})