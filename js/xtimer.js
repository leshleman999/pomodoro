// set a default with type as parameter
// to copy a line CTRL C V
class Timer{
    constructor(type="pomodoro"){
        this.type = type;
        this.pomodoro=25;
        this.shortbreak=1;
        this.longbreak=15;
        this.time=this.pomodoro
        this.counter=document.getElementById("counter")
        this.activeElement = document.getElementById("active");
        this.starter=document.getElementById("starter");
        this.pauser=document.getElementById("pauser");
        this.resetter=document.getElementById("resetter");

    };
    select(startTime){
        this.type=startTime;
        timer.setMenuButtons(this.type);
        switch(startTime){
            case "pomodoro":
                this.time=this.pomodoro;
                // timer.setPomodoroButton();
                break;
            case "shortbreak":  
                this.time=this.shortbreak;
                // timer.setShortBreakButton();
                break;
            case "longbreak":
                this.time=this.longbreak;
                // timer.setLongbreakButton();
                break;
        };
        counter.innerText = this.time <= 9 ? `0${this.time}:00` : `${this.time}:00`;

    };
    
    setMenuButtons(type){
        console.log(type);
        
        // document.getElementByClassName("menuitem").style.backgroundColor ="blue";
        document.getElementById(type).style.backgroundColor="red";
    }
    
    setPomodoroButton(){
        document.getElementById('pomodoro').style.backgroundColor="red";
        document.getElementById('longbreak').style.backgroundColor="white";
        document.getElementById('shortbreak').style.backgroundColor="white";
    };
    setShortBreakButton(){
        document.getElementById('pomodoro').style.backgroundColor="white";
        document.getElementById('longbreak').style.backgroundColor="white";
        document.getElementById('shortbreak').style.backgroundColor="red";
    };
    setLongbreakButton(){
        document.getElementById('pomodoro').style.backgroundColor="white";
        document.getElementById('longbreak').style.backgroundColor="red";
        document.getElementById('shortbreak').style.backgroundColor="white";
    };
    start(){
        timer.startState();
        timer.oneSecondTimeout();
        timer.countDown();
    };
    startState(){
		starter.className="inactiveState";
        pauser.className="activeState";
        resetter.className="activeState";
    }
    resetState(){
		starter.className="activeState";
        pauser.className="inactiveState";
        resetter.className="inactiveState";
    }
    pauseState(){
		starter.className="activeState";
        pauser.className="activeState";
        resetter.className="activeState";
    }

    oneSecondTimeout(){
        setTimeout(()=>{
            var sec = 0;
        },1000);
    };

    countDown(){
        var sec = 59;
        var min = this.time-1;
        var tick = setInterval(()=>{

            var seconds = sec<=9 ? `0${sec}` : `${sec}`;
            var minutes = min<=9 ? `0${min}` : `${min}`;
            counter.innerHTML=`${minutes}` + ":" + `${seconds}`;    

            if(min == 0 && sec == 0){
                clearInterval(tick);
                //set reset to activeState
            } else if (min>0 && sec==0){
                sec = 59;
                min--;
            } else {sec--};
            document.querySelector('#pauser').addEventListener('click', event => {
                clearInterval(tick);
            })
            document.querySelector('#resetter').addEventListener('click', event => {
                clearInterval(tick);

            })
        },1000)


    };


    pause(){
        pauserState()
    }
    
    reset(){
        timer.setDefaults();
        timer.resetState()
    }
    setDefaults(){
        this.counter.innerHTML=`${this.time}:00`;  
    }

   
 

}