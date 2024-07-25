const hr=document.querySelector('#hour');
const min=document.querySelector('#minute');
const sec = document.querySelector('#seconds');
const digitalHr=document.querySelector('#digital-hour');
const digitalMin=document.querySelector('#digital-minutes');
const digitalSec=document.querySelector('#digital-seconds');
const classicClock = document.querySelector('#clock-container');
const digitalClock = document.querySelector('#digital-clock-container');
const extraInfo = document.querySelector(".extra-info");
const ampmIndicator = document.querySelector('.ampm-indicator')



setInterval(()=>{

    let dt = new Date();
    let hourText = `0${dt.getHours()}:`;
    let minText = `${dt.getMinutes()}:`;
    let secText= dt.getSeconds();
    if(dt.getHours()>12){
        hourText = `${dt.getHours()-12}:`;
        if (hourText<10){
            hourText= `0${dt.getHours()-12}:`
        }
    }
    if(dt.getMinutes()<10){
        minText = `0${dt.getMinutes()}:`
    }
    if(dt.getSeconds()<10){
        secText = `0${dt.getSeconds()}`
    }
    digitalHr.innerText = hourText;
    digitalMin.innerText = minText;
    digitalSec.innerText = secText;
    (dt.getHours()>12)? ampmIndicator.innerText = "PM" : ampmIndicator.innerText = "AM";
    let hours=dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    let hrotate= 30*hours+(1/2*minutes)
    let mrotate= 6*minutes+(0.1*seconds)
    let srotate= 6*seconds
    hr.style.transform = `rotate(${hrotate}deg)`
    min.style.transform = `rotate(${mrotate}deg)`
    sec.style.transform = `rotate(${srotate}deg)`

},1000);

let date = new Date();

extraInfo.innerHTML = `<span> ${date.toDateString()}</span>`





const changeLayout = () => {

    if(classicClock.classList.contains('display-toggle')){
        classicClock.classList.remove('display-toggle')
        digitalClock.classList.add('display-toggle')
    
    }else{
        digitalClock.classList.remove('display-toggle')
        classicClock.classList.add('display-toggle')
    }

}