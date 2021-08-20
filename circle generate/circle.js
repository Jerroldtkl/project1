const body = document.querySelector('body')
const dot = document.querySelector('.dot')
body.addEventListener('click', function(e){
  click ++
  console.log(click + ' times clicked')

  if(e.target === dot){
    dotclick++
    console.log(dotclick + ' dot clicked')
  }
  let percentage = ((dotclick / click) * 100)
  let percentage2 = percentage.toFixed(2)
  console.log(percentage + '%')
  console.log(percentage2)
})

let click = 0
let dotclick = 0

// let percentage = ((dotclick / click) * 100)
// console.log(percentage)