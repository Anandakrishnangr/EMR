let slider = document.querySelector('#slider')
let image = document.querySelectorAll(".imageClass")[0]
console.log(image);
image.classList.add('active')
slider.addEventListener('mousemove',(event)=>{
console.log(event);

let xDistance = event.clientX
let {height,width}=event.target.getBoundingClientRect()
console.log(event.target.getBoundingClientRect());
})