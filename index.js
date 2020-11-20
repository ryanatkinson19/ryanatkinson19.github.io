const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');
const bottomRight = document.querySelector('.bottom-right-panel');

function refreshPage(){
	window.location.reload();
}

const callme = ()=>{
        topLeft.addEventListener("click", function(){
            document.getElementById('click1').play();
        });
        topRight.addEventListener("click", function(){
            document.getElementById('click2').play();
        });
        bottomLeft.addEventListener("click", function(){
            document.getElementById('click3').play();
        });
        bottomRight.addEventListener("click", function(){
            document.getElementById('click4').play();
        });
};


const generator = ()=>{
    const panels = [
        topLeft,
        topRight,
        bottomLeft,
        bottomRight
    ];
    return panels[parseInt(Math.random() * panels.length)];
};

const sequence = [generator()];
let sequenceRun = [...sequence];

const flashanim = (panel)=> {
    return new Promise((resolve, reject)=> { 
        panel.style.animation = "flash .75s ease";
        panel.addEventListener("animationend", function(){
            this.style.animation = '';
            callme();
        });
        setTimeout(()=> {
            resolve();
        }, 1000);
    });
};

//int (10) ^^

let canClick = false;

const panelClicked = panelClicked => {
    if (!canClick) return;
    const target = sequenceRun.shift();
    if (target === panelClicked) {
        if (sequenceRun.length === 0) {
            document.getElementById('roundover').play();
            setTimeout(()=> {
                sequence.push(generator());
                sequenceRun = [...sequence];
                flashing();
                
            },2000);
            //end trial, start novel trial
            
            
        }
    } else {
        // end trial
        document.getElementById('gameover').play();
        document.getElementById("gameend").style.visibility = "visible";

    }
  };
//(p_tally ++ ;)
const flashing = async()=> {
    canClick = false;
    for (const panel of sequence) {
        await flashanim(panel);
    }
    canClick = true;
};
flashing();
console.log(generator);