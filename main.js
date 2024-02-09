const hr=document.querySelector('#hour')
const min=document.querySelector('#minute')
const sec = document.querySelector('#seconds')
setInterval(()=>{

    let dt = new Date();
    let hours=dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    let hrotate= 30*hours+(1/2*minutes)
    let mrotate= 6*minutes+(0.1*seconds)
    let srotate= 6*seconds
    hr.style.transform = `rotate(${hrotate}deg)`
    min.style.transform = `rotate(${mrotate}deg)`
    sec.style.transform = `rotate(${srotate}deg)`

},1000)