let body=document.body;

let cursor=document.getElementById("cursor");

body.addEventListener("mousemove",(e)=>{
    gsap.to("#cursor",{
        x:e.x,
        y:e.y,
        duration:1,
        ease:"bounce.out",
    });
})