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
        this.circle=document.querySelector("ring > circle");

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
        //anonymous function
        const format =()=>(time<10?"0"+time:time);
        // bracket notation to call this.pomodoro
        let time = this[this.type]*60;
        this.clock.innerText=`${this.text}:00}`;
        this.circle.style.strokeDashoffset=1024;
        let startTime = time;
        let minutes = 00;
        let seconds = 0;

        time--;
        this.interval=setInterval(()=>{
            minutes = Math.floor(time/60);
            seconds = Math.floor(time % 60);
            
            minutes = format(minutes);
            seconds = format(seconds);            
        
            this.countDown.innerText = `${minutes}:${secondes}`;
            const percent = ((time % startTime).startTime)*100;
            const offset = percent/100*1024;

            this.circle.style.strokeDashoffset=offset;
            if(--time<0){
                time = 0;
                clearInterval(this.interval);
                this.actionElement.innerText="reset";
            }
        },1000)


        // var sec = 59;
        // var min = this.time-1;
        // var dt = new Date();
        // var hours = dt.getHours();
        // var minutes = dt.getMinutes();
        // var seconds = dt.getSeconds();

        // var tick = setInterval(()=>{
        //     var strSeconds = seconds<=9 ? `0${seconds}` : `${seconds}`;
        //     var strMinutes = minutes<=9 ? `0${minutes}` : `${minutes}`;
        //     counter.innerHTML=`${minutes}` + ":" + `${seconds}`;    
        //     dt.setSeconds(sec--);
        //     if(min == 0 && sec == 0){clearInterval(tick)};
        //     document.querySelector('#pauser').addEventListener('click', event => {clearInterval(tick);})
        //     document.querySelector('#resetter').addEventListener('click', event => {clearInterval(tick);
        //     })
        // },1000)





    };


    pause(){
        pauserState()
    }
    
    reset(){
        this.stop();
        this.circle.style.strokeDashoffset=1024;
        this.time=this[this.type];
        this.text=this.time<=9?`0${this.time}`:`${this.time}';
        timer.setDefaults();
        timer.resetState();
        
    }
    // setDefaults(){
    //     this.counter.innerHTML=`${this.time}:00`;  
    // }

   stop(){
       clearInterval(this.interval);
       this.actionElement.innerText="start"
   }
 

}