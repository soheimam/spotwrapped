
const element = document.getElementById('month')

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']


let month

let objectUpdate;



 for(let i = 0; i < months.length; i++) {
  
    setTimeout(()=>{
         month = months[i];
         element.innerHTML = month.toUpperCase();
         console.log(month, i, objectUpdate)
         objectUpdate = true;
    },i * 2000, );
    onUpdate()
 }

 function onUpdate(){

   objectUpdate = false;
   // console.log(objectUpdate)
}

 console.log(objectUpdate)


 const timeLine = gsap.timeline({
    yoyo:true,
    repeat:months.length
 })
 timeLine.to(element, {duration: 1,rotationX: 0})
 timeLine.to(element, {duration: 0.3, opacity:0.1});
 timeLine.from(element, {duration: 1,rotationX: 360, opacity: 1})
 
 timeLine.duration(5);
//  gsap.to(element, {duration: 0.2, opacity: 0.3, rotationX: 360});
//  gsap.to(element, {duration: 0.5, opacity: 1, rotationX: 360});
// const animation = gsap.to(element, {
//     duration: 1,
//     rotationX: 360,
// });
// animation.yoyo(true).repeat(months.length);



// console.log(animation.isActive());

