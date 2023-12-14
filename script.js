
 videoAnimation = () =>{
    var videocont = document.querySelector('#video-container');
    var playbtn = document.querySelector("#play");
    
    videocont.addEventListener('mouseenter', function(){
        gsap.to(playbtn,{
            scale:1,
            opacity:1
        })
    });
    
    videocont.addEventListener("mouseleave", function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        })
    });
    
    videocont.addEventListener("mousemove", function(dets){
        gsap.to(playbtn,{
            left:dets.x-40, 
            top:dets.y-40
        })
    });
}

videoAnimation();

// animation on loading screen
loadinganimation = () => { 
gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3
});
gsap.from("#page1 #video-container",{
    scale:0.9,
    // rotate:"360deg",
    opacity:0,
    delay:1.5,
    duration:0.5,
});

}

loadinganimation();