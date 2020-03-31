
const element = document.getElementById('month')

const months = [
   'JAN',
   'FEB',
   'MAR',
   'APR',
   'MAY',
   'JUN',
   'JUL',
   'AUG',
   'SEP',
   'OCT',
   'NOV',
   'DEC'
]


let month

let objectUpdate;


const onRepeat = () => {
   let next;
   const element = document.getElementById('month')

   next = months[months.indexOf(element.innerHTML) + 1] || months[0]

   element.innerHTML = next
}

const timeLine = gsap.timeline({
   yoyo: true,
   repeat: -1,
   onRepeat: onRepeat,
   onRepeatParams: months,  
})

let tween = timeLine.to(element, {duration: 1,  rotationX: -180,  ease:Linear.easeNone})
// timeLine.to(element, {duration: 0.5,  rotationX: 180,  ease:Linear.easeNone })


console.log(element._gsTransform.rotationX)