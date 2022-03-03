
const timer = new Timer();
timer.reset();

const action = (action = "stop")=>{
    switch(action.toLowerCase()){
        case "start":
            timer.start();
            break;
        default:
            timer.stop();
            break;
    }
}

const navLinks = document.querySelectorAll('.nav > ul > li');
const navBg = document.getElementById('indicator');

// enumeration: nav is arbitrary, i is optional allowing us to include an index
// This runs when you click the menu button
navLinks.forEach((navItem,i)=>{
    navItem.addEventListener('click',()=>{
        navLinks.forEach((nav)=>{
            nav.classList.remove('active');
            navBg.style.marginLeft = `calc(calc(100%/3)*${i})`
            navItem.classList.add('active')
        })
    })
});

const settingsContainer = document.getElementById('settingscontainer');

document.querySelector('#settings > img').addEventListener('click',()=>{
    settingsContainer.style.visibility="visible";
    settingsContainer.style.opacity=1;
    settingsContainer.style.display='flex';
})