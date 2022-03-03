

// in JSON
let settings ={
    pomodoro:25,
    shortbreak:1,
    longbreak:15,
    font: "Kumbh Sans",
    color: "orange",

};

// objects require ; at the end, blocks and functions don't require ;'s
let settingsDefault ={
    pomodoro:25,
    shortbreak:1,
    longbreak:15,
    font: "Kumbh Sans",
    color: "orange",

};

// use const instead of let - reader will think "don't change this variable". a const cannot be reassigned
// if you try to change it, JavaScript will throw errors
const form=document.getElementsByTagName("form")[0];
const apply=document.getElementById("apply");
const applybg=document.getElementById("applybg");
const circle=document.querySelector("#ring > circle");

// always define arrow functions with const, don't use let.  if you use var you will see unintentional things happen
const mapSettings = (setting,val) =>{
    settings[setting]= val;
    document.querySelectorAll("form h2, form h4, #apply").forEach((item)=>{
        item.style.fontFamily=settings.font;
    });
    applybg.style.backgroundColor=`var(--${settings.color})`;

}

const updateSettings = ()=>{
    navbg.style.backgroundColor =`var(--${settings.color})`;
    circle.style.stroke =`var(--${settings.color})`;
    document.body.style.fontFamily=settings.font;

    timer.pomodoro=settings.pomodoro;
    timer.shortbreak=settings.shortbreak;
    timer.longbreak=settings.longbreak;

    timer.reset();
}

// keep listeners at global level
// document.getElementById("settingsoverlay").addEventListener("click", ()=>{
//     settingsContainer.style.opacity = 1;

// })

const inc = (input)=>{
    const inputEL = document.getElementById(input);
    inputEL.stepUp(1);
    mapSettings(input,inputEL.value)
}
const dec = (input)=>{
    const inputEL = document.getElementById(input);
    inputEL.stepDown(1);
    mapSettings(input,inputEL.value)
}


const fontButtons = document.querySelectorAll('.font');

fontButtons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{

        fontButtons.forEach((button)=>button.classList.remove('fontactive'));

        btn.classList.add('fontactive');

        if(btn.classList.contains('kumbh')){
            mapSettings('font','"Kumbh Sans", sans-serif');
        }
        else if(btn.classList.contains('roboto')){
            mapSettings('font','"Roboto Slab", serif');
        }
        else {
            mapSettings('font','"Space Mono", monospace');
        }
    })
})

const colors = document.querySelectorAll('.color');
colors.forEach((color)=>{
    color.addEventListener("click",()=>{
        if(color.classList.contains('orange')){
            mapSettings('color','orange');
        }
        else if(color.classList.contains('blue')){
            mapSettings('color','cyan');
        }
        else {
            mapSettings('color','purple');
        }
        colors.forEach((color)=>color.classList.remove('coloractive'));
        color.classList.add('coloractive');
    })
})

apply.addEventListener('click',(e)=>{
    // when working in a form and you want to prevent from refreshing the page
    e.preventDefault();
    updateSettings();
    settingsDefault=settings;
    settingsContainer.style.visibility="hidden";
    settingsContainer.style.display="none";
    
    

    settingsContainer.style.opacity=0;
})

