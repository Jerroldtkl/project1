const normal = document.querySelector('#normal')
const realistic = document.querySelector('#realistic')

//create a circle
// function draw(){
//   const circle = document.createElement('circle')
//   const ctx = circle.getContext('2d')
//   ctx.beginPath();
//   ctx.arc(100, 75, 50, 0, 2 * Math.PI);
//   ctx.stroke();
// }

function normalMode(){
  console.log('normal mode selected')
  realistic.remove()
  //create a div for the 3 difficulties and a ul in it
  const threeLevels = document.createElement('div')
  const difficultyList = document.createElement('ul')

  //create a function to generate 3 difficulty easy medium and hard.
  function genLevelsEasy(){
  //create a li to insert into the ul
  const easyList = document.createElement('li')
  //create a button for each difficulty and assign it to each difficultyList 
  const easyLevel = document.createElement('button')
  //set inner text and id
  easyLevel.innerText= 'Easy'
  easyLevel.setAttribute('id', 'easy')
  //append accordingly
  easyList.appendChild(easyLevel)
  difficultyList.appendChild(easyList)
  threeLevels.appendChild(difficultyList)
  normal.appendChild(threeLevels)

  easyLevel.addEventListener('click', function(){
    //clear innerHTML and make a new div to start the easy stage
    document.body.innerHTML = ''
    const easyStage = document.createElement('div')
    easyStage.innerText = 'EASY'  
    document.body.appendChild(easyStage)
    easyStage.style.color = 'yellow'
    easyStage.style.textAlign = 'center'
    easyStage.style.fontSize = '300%'
    // create a box in the center to show where the game will be played in
    const box = document.createElement('div')
    document.body.appendChild(box)
    box.style.backgroundColor = 'red'
    box.style.margin = 'auto'
    box.style.width = '600px'
    box.style.height = '400px'
    // create a button so start
    const start = document.createElement('button')
    start.innerText = 'START'
    box.appendChild(start)
    start.addEventListener('click', function(){
      console.log('START')
      start.innerText = 'STOP'
      // randomize an image within the box
      // function init(){
        const random = document.querySelector('h1')
        random.innerText = 'random'
      // }
    })
  })
  }
  function genLevelsMedium(){
  //create a li to insert into the ul
  const mediumList = document.createElement('li')
  //create a button for each difficulty and assign it to each difficultyList 
  const mediumLevel = document.createElement('button')
  //set inner text and id
  mediumLevel.innerText= 'medium'
  mediumLevel.setAttribute('id', 'medium')
  //append accordingly
  mediumList.appendChild(mediumLevel)
  difficultyList.appendChild(mediumList)
  threeLevels.appendChild(difficultyList)
  normal.appendChild(threeLevels)

   mediumLevel.addEventListener('click', function(){
    //clear innerHTML and make a new div to start the easy stage
    document.body.innerHTML = ''
    const easyStage = document.createElement('div')
    easyStage.innerText = 'MEDIUM'  
    document.body.appendChild(easyStage)
    easyStage.style.color = 'yellow'
    easyStage.style.textAlign = 'center'
    easyStage.style.fontSize = '300%'
    // create a box in the center to show where the game will be played in
    const box = document.createElement('div')
    document.body.appendChild(box)
    box.style.backgroundColor = 'red'
    box.style.margin = 'auto'
    box.style.width = '700px'
    box.style.height = '500px'
    // create a button so start
    const start = document.createElement('button')
    start.innerText = 'START'
    box.appendChild(start)
    start.addEventListener('click', function(){
      console.log('START')
      start.innerText = 'STOP'
    })
  })
  }
  function genLevelsHard(){
  //create a li to insert into the ul
  const hardList = document.createElement('li')
  //create a button for each difficulty and assign it to each difficultyList 
  const hardLevel = document.createElement('button')
  //set inner text and id
  hardLevel.innerText= 'Hard'
  hardLevel.setAttribute('id', 'hard')
  //append accordingly
  hardList.appendChild(hardLevel)
  difficultyList.appendChild(hardList)
  threeLevels.appendChild(difficultyList)
  normal.appendChild(threeLevels)
  hardLevel.addEventListener('click', function(){
    //clear innerHTML and make a new div to start the easy stage
    document.body.innerHTML = ''
    const hardStage = document.createElement('div')
    hardStage.innerText = 'HARD'  
    document.body.appendChild(hardStage)
    hardStage.style.color = 'yellow'
    hardStage.style.textAlign = 'center'
    hardStage.style.fontSize = '300%'
    // create a box in the center to show where the game will be played in
    const box = document.createElement('div')
    document.body.appendChild(box)
    box.style.backgroundColor = 'red'
    box.style.margin = 'auto'
    box.style.width = '800px'
    box.style.height = '600px'
    // create a button so start
    const start = document.createElement('button')
    start.innerText = 'START'
    box.appendChild(start)
    start.addEventListener('click', function(){
      console.log('START')
      start.innerText = 'STOP'
    })
  })
  }
  genLevelsEasy()
  genLevelsMedium()
  genLevelsHard()
  normal.removeEventListener('click', normalMode)

}

normal.addEventListener('click', normalMode)


