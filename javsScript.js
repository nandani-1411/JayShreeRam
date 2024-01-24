let playbtn = document.getElementById("playmusic");
let stopbtn = document.getElementById("stopmusic");

let aud =new Audio("Audio/Ramji.m4a");


playbtn.onclick=()=>{
    console.log("btn is clicked");
    aud.controls=true;
    aud.loop=true;
    aud.autoplay=true;
    aud.play().then(()=>{
        console.log("aud is playing");
    }).catch((err)=>{
        console.log("not playin audio "+err);
    })
    
    console.log(aud);
}

stopbtn.addEventListener(("click"),()=>{
    console.log("stoping btn");
    
    aud.pause();
    // aud.currentTime=0;
    console.log("YOu stop the audio");
})


