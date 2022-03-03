// utilizing OOP programming
// set a default with type as parameter
// to copy a line CTRL C V


class Timer{
// build initiate  properties
    constructor(type="pomodoro"){
        this.type = type;
        this.pomodoro=25;
        this.shortbreak=1;
        this.longbreak=15;
        this.time=this.pomodoro
        this.counter=document.getElementById("counter")
        this.actionElement = document.getElementById("action");
        this.circle=document.querySelector("#ring > circle");
        this.clock=document.getElementById("time")
        // this.text = this.time<=9
        // this.time<=9 ? `0${this.time}`:`${this.time}`;
        

    }

    // selection of nav items changes our type and runs reset
    select(type){
        this.type=type;
        this.reset();

    }

    
    start(){
        //anonymous arrow function
        const format =(time)=>(time<10 ? "0" + time  : time);
        // bracket notation to call this.pomodoro
        let time = this[this.type]*60;
        this.clock.innerText=`${this.text}:00`;
        this.circle.style.strokeDashoffset=1024;
        let startTime = time;
        let minutes = 0;
        let seconds = 0;

        time--;
        this.interval=setInterval(()=>{
            minutes = Math.floor(time/60);
            seconds = Math.floor(time % 60);
            
            minutes = format(minutes);
            seconds = format(seconds);            
        
            this.clock.innerText = `${minutes}:${seconds}`;
            const percent = ((time % startTime)/startTime)*100;
            const offset = (percent/100)*1024;

            this.circle.style.strokeDashoffset=offset;

            if(--time<0){
                time = 0;
                clearInterval(this.interval);
                this.actionElement.innerText="reset";
            }
        },1000)

        this.actionElement.innerText="stop"

    };


    // initiate stop and sets our circle to swallow itself, sets stroke to 0
    reset(){
        this.stop();
        this.circle.style.strokeDashoffset=1024;
        // bracket notation
        this.time=this[this.type];
        // format the text
        this.text=this.time<=9 ? `0${this.time}`:`${this.time}`;
        this.actionElement.innerText="start"
        this.clock.innerText=`${this.text}:00`;
        
    };


   stop(){
       clearInterval(this.interval);
       this.actionElement.innerText="start"
   };
 

}