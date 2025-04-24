let currentStep = "step1";  //controls the experiment step

//speak
let btn = document.querySelector("#start");
let txt = document.querySelector("#text");
let txt1 = document.querySelector(".step1");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 5
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

window.addEventListener('load',()=>{
    speak(txt.innerText);
})

btn.addEventListener('click',()=>{
    speak(txt1.innerText);
})

//timer
function timer(){
    if(currentStep !== "step1") return;
    currentStep = "step2";

    let hand = document.getElementById("ph");  // hand movement
    hand.style.transform = "translate( -32.5vw, -35vh)"

    let totalDuration = 10; // 5 seconds instead of 30 minutes
let remainingTime = 30 * 60; // 30 minutes in seconds
let intervalDuration = remainingTime / totalDuration; // Speed up factor
let timerText = document.getElementById("timer");
let progressCircle = document.querySelector(".progress");

// Start countdown animation
progressCircle.style.strokeDashoffset = 0;

let interval = setInterval(() => {
    remainingTime -= intervalDuration;
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    timerText.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (remainingTime <= 0) {
        clearInterval(interval);
        timerText.textContent = "00:00";
    }
}, 1000);

//text
let msg = document.getElementById("text");
msg.innerText = "click on the flask to put prepared solution  in cuvette."
speak(msg.innerText)
}

// process

function pourWater() {
    if(currentStep !== "step2") return;
    currentStep = "step3";

    let hand = document.getElementById("ph");
    hand.style.transform = "translate(-40vw, -38vh)"

    let bottle = document.getElementById("a3");
    let waterFill = document.getElementById("a5");
    let msg = document.getElementById("text");

    // Move flask near the cuvette and tilt it
    bottle.style.transform = "translate(-2.2vw, 32vh) rotate(-80deg)";
    
    setTimeout(() => {
        bottle.style.transform = 'translate(20vw, 28vh) ';  // return the flask to its initial position
      }, 2500);


    // Fill cuvette after 1.5s
    setTimeout(() => {
        waterFill.style.height = "6vh"; // Adjust water height
    }, 1500);

    msg.innerText = "click on beaker  to fill solvent in refrence cuvette."
    speak(msg.innerText);
}

function pourSolvent(){
    if(currentStep !== "step3") return;
    currentStep = "step4";
    
    let hand = document.getElementById("ph");
    hand.style.transform = "translate(-12vw, -50vh)"

    let beaker = document.getElementById("a2");
    let solventFill = document.getElementById("a9");

    // Move beaker near the cuvette and tilt it
    beaker.style.transform = "translate(8vw, 32vh) rotate(-75deg)";

    setTimeout(()=>{
        beaker.style.transform = "translate(36vw, 32vh) rotate(0deg)"; // return the beaker to its initial position
    }, 2500);

    // Fill cuvette after 1.5s
    setTimeout(() => {
        solventFill.style.height = "6vh";  // Adjust water height
    }, 1500);

    let msg = document.getElementById("text");
    msg.innerText = "click on solution cuvette to kept in spectrophotometer."
    speak(msg.innerText);
}

function pourBottle() {
    if(currentStep !== "step4") return;
    currentStep = "step5";

    let hand = document.getElementById("ph");
    hand.style.transform = "translate(-17vw, -54vh)"

    let bottle2 = document.getElementById("a4")
    
    // Move cuvette near the spectrophotometer and kept it
    bottle2.style.transform = "translate(10vw, 5vh) rotate(0deg)"; 

    setTimeout(() => {
        bottle2.style.display = "none"; // hide the cuvette
    }, 5500);

    let msg = document.getElementById("text");
    msg.innerText = "click on refrence cuvette to kept in spectrophotometer."
    speak(msg.innerText);
}

function pourBottle2() {
    if(currentStep !== "step5") return;
    currentStep = "step6";

    let hand = document.getElementById("ph"); 
    hand.style.transform = "translate(16vw, -25vh)"

    let bottle3 = document.getElementById("a8")
    
    // Move cuvette near the spectrophotometer and kept it
    bottle3.style.transform = "translateX(-24vw) translateY(-8vh) rotate(0deg)";

    setTimeout(() => {
        bottle3.style.display = "none";
    }, 3500);

     let msg = document.getElementById("text");
    msg.innerText = "close the cover of spectrophotometer"
    speak(msg.innerText);
}

function changeImage(){
    if(currentStep !== "step6") return;
    currentStep = "step7";

    let hand = document.getElementById("ph"); 
    setTimeout(() => {
        hand.style.display = "none";
    }, 2000);

   document.getElementById("a1").src = "./images/specto-off1.png";

   let msg = document.getElementById("text");
   msg.innerText = "Click on next button to record the graph."
   speak(msg.innerText);
}

//graph

function graph1(){

    // Get the context of the canvas element we want to select
var ctx = document.getElementById('myChart').getContext('2d');

// Define the data for the chart
var data = {
    labels: ['250', '275', '300', '325', '350', '375', '400', '425'],
    datasets: [{
        label: '1,4–diphenyl–1,3butadiene',
        data: [0.05, 0.08, 0.29, 0.50, 0.20, 0.04, 0.01, 0.00],
        // fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.2 // This property makes the line smooth
    }]
};

// Define the options for the chart
var options = {
    responsive: true,
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top'
        },
        title: {
            display: true,
            text: 'Adsorption vs Wavelength'
        }
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Wavelength'
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Absorbance'
            }
        }
    }
};

// Create the chart
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

} 

function auto(){

var ctx0 = document.getElementById('myChart').getContext('2d');

var data0 = {
    labels: ['250', '275', '300', '325', '350', '375', '400', '425'],
    datasets: [{
        label: "",
        data: [],
    }]
};

var options0 = {
    plugins: {
        legend: {
            display: true,
            position: 'top'
        },
        title: {
            display: true,
            text: 'Adsorption vs Wavelength'
        }
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Wavelength'
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Absorbance'
            }
        }
    }
};

// Create the chart
var myChart = new Chart(ctx0, {
    type: 'line',
    data: data0,
    options: options0
});


}

let strt = document.getElementById("st");

strt.addEventListener('click',()=>{
    graph1();
})
