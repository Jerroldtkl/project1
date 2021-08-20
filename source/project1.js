const modes = document.querySelector('.mode')
const normal = document.querySelector('#normal')
const realistic = document.querySelector('#realistic')

//create a timer
let time = 15
const timer = document.createElement('div')
timer.setAttribute('class', 'timer')
function countDown() {
  timer.innerText = time + " second" + (time == 1 ? "" : "s")
  if (time-- > 0) setTimeout(countDown, 1000) 
  // console.log(time)
};

//create a function for setTimeout
function gameOver(){
    const score = document.createElement('div')
    score.setAttribute('class', 'game-over')
    // box.appendChild(gameOver)
    // score.innerText = 'game over'
    console.log('game over')
    modes.appendChild(score)
    alert('Game Over!')
    return score
}
// create and append a div for points
const pointsDiv = document.createElement('div')
pointsDiv.setAttribute('class' , 'points')

// create and append a div for accuracy
//create and append accuracy
const accuracyScore = document.createElement('div')
accuracyScore.setAttribute('class', 'accuracy')

//create an element points and click
let points = 0
let click = -1
//calculate accuracy
// let accuracy = 0
// let accuracy = (points / click) * 100
// console.log(accuracy + '%')

function playMusic(){
  document.querySelector('#background_music').play()
  document.querySelector('#background_music').volume = 0.1
}
function pauseMusic(){
  document.querySelector('#background_music').pause() 
}
//create a pop sound
function popSound(){
  const pop = document.createElement('audio')
  pop.setAttribute('src', './media/sfx-pop.mp3')
  pop.play()
}

function normalMode(){
  console.log('normal mode selected')
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
    normal.innerHTML = ''
    const easyStage = document.createElement('div')
    easyStage.innerText = 'EASY'  
    normal.appendChild(easyStage)
    easyStage.style.color = 'yellow'
    easyStage.style.textAlign = 'center'
    easyStage.style.fontSize = '300%'
    // create a box in the center to show where the game will be played in
    const box = document.createElement('div')
    normal.appendChild(box)
    box.style.position = 'relative'
    box.style.backgroundColor = 'red'
    box.style.margin = 'auto'
    box.style.width = '600px'
    box.style.height = '400px'
    // create a button so start
    const start = document.createElement('button')
    start.innerText = 'START'
    box.appendChild(start)

    //create a new div within the box
    const circleDiv = document.createElement('div')
    circleDiv.setAttribute('class', 'container')
    box.appendChild(circleDiv)

    //create a ul to store the list of circles
    const ul = document.createElement('ul')

    //start the game
    start.addEventListener('click', function(){
    console.log('START')
    start.innerText = 'Menu'
    
      // if the menu button is clicked
        start.addEventListener('click', function(){
        window.location.reload()
        })

        //run the timer
        timer.innerText = time + " second" + (time == 1 ? "" : "s")
        box.appendChild(timer)
        countDown()
        setTimeout(gameOver, 15200)
        
        // create and randomize circle within the box
        function createCircle(){
        const circle = document.createElement('button')
        circle.setAttribute('class', 'dotEasy')
        function randomWidth(min, max){
          return Math.random() * (max - min) + min
        }
        
        function randomHeight(min, max){
          return Math.random() * (max - min) + min
        }

        circle.style.position = 'absolute'
        circle.style.top = randomHeight(0,80) + '%'
        circle.style.left = randomWidth(0,85) + '%';

        //create a list to add the circles into the ul
        const li = document.createElement('li')
        li.appendChild(circle)
        ul.appendChild(circle)
        circleDiv.prepend(ul)
        
        
        //create event listener for creating more circles
          circle.addEventListener('click', popSound)
          circle.addEventListener('click', createCircle)
          circleDiv.firstChild.replaceChild(circleDiv.firstChild.childNodes[1],circleDiv.firstChild.childNodes[0])
          //to record circleclicks
          points++
          console.log(points + 'points')
       
        // append points
        pointsDiv.innerText = points + 'points'
        box.appendChild(pointsDiv)

        setTimeout(stopCircle, 2000)
          function stopCircle(){
          circle.removeEventListener('click', createCircle)
          }
          setTimeout(stopCircle, 2000)
        }

        //create a function to record clicks
        function boxClick(){
          click++
          console.log(click + 'click')
          let accuracy = (points / click) * 100
          let accuracyRounded = accuracy.toFixed(2)
          console.log(accuracy + '%')

          // create a timer to stop all clicks after timer runs out
          function stopClick(){
          box.removeEventListener('click', boxClick)
          }
          setTimeout(stopClick, 15050)

          //append accuracy
          accuracyScore.innerText = 'accuracy =' + accuracyRounded + '%'
          box.appendChild(accuracyScore)
        }

        box.addEventListener('click', boxClick)
        createCircle()
        
        //append points
        pointsDiv.innerText = points + 'points'
        box.appendChild(pointsDiv)
        
        //append accuracy
        accuracyScore.innerText = accuracyRounded
        box.appendChild(accuracyScore)
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
    normal.innerHTML = ''
    const mediumStage = document.createElement('div')
    mediumStage.innerText = 'MEDIUM'  
    normal.appendChild(mediumStage)
    mediumStage.style.color = 'yellow'
    mediumStage.style.textAlign = 'center'
    mediumStage.style.fontSize = '300%'
    // create a box in the center to show where the game will be played in
    const box = document.createElement('div')
    normal.appendChild(box)
    box.style.position = 'relative'
    box.style.backgroundColor = 'red'
    box.style.margin = 'auto'
    box.style.width = '600px'
    box.style.height = '400px'
    // create a button so start
    const start = document.createElement('button')
    start.innerText = 'START'
    box.appendChild(start)

    //create a new div within the box
    const circleDiv = document.createElement('div')
    circleDiv.setAttribute('class', 'container')
    box.appendChild(circleDiv)

    //create a ul to store the list of circles
    const ul = document.createElement('ul')

    //start the game
    start.addEventListener('click', function(){
    console.log('START')
    start.innerText = 'Menu'

      // if the menu button is clicked
        start.addEventListener('click', function(){
        window.location.reload()
        })
      
        //run the timer
        timer.innerText = time + " second" + (time == 1 ? "" : "s")
        box.appendChild(timer)
        countDown()
        setTimeout(gameOver, 15200)

        // create and randomize circle within the box
        function createCircle(){
        const circle = document.createElement('button')
        circle.setAttribute('class', 'dotMedium')
        function randomWidth(min, max){
        return Math.random() * (max - min) + min
        //width will be from left 171-771
        }
        function randomHeight(min, max){
        // height will be from top 55 - 400
        return Math.random() * (max - min) + min
        }

        circle.style.position = 'absolute'
        circle.style.top = randomHeight(0,80) + '%'
        circle.style.left = randomWidth(0,85) + '%';

        //create a list to add the circles into the ul
        const li = document.createElement('li')
        li.appendChild(circle)
        ul.appendChild(circle)
        circleDiv.prepend(ul)
      
        //create event listener for creating more circles
          circle.addEventListener('click', popSound)
          circle.addEventListener('click', createCircle)
          circleDiv.firstChild.replaceChild(circleDiv.firstChild.childNodes[1],circleDiv.firstChild.childNodes[0])
          //to record circleclicks
          points++
          console.log(points + 'points')

        // append points
        pointsDiv.innerText = points + 'points'
        box.appendChild(pointsDiv)

        setTimeout(stopCircle, 2000)
          function stopCircle(){
          circle.removeEventListener('click', createCircle)
          }
          setTimeout(stopCircle, 2000)
        }

        //create a function to record clicks
        function boxClick(){
          click++
          console.log(click + 'click')
          let accuracy = (points / click) * 100
          let accuracyRounded = accuracy.toFixed(2)
          console.log(accuracy + '%')

          // create a timer to stop all clicks after timer runs out
          function stopClick(){
          box.removeEventListener('click', boxClick)
          }
          setTimeout(stopClick, 15050)

          //append accuracy
          accuracyScore.innerText = accuracyRounded + '%'
          box.appendChild(accuracyScore)
        }

        box.addEventListener('click', boxClick)
        createCircle()
        
        //append points
        pointsDiv.innerText = points + 'points'
        box.appendChild(pointsDiv)
        
        //append accuracy
        accuracyScore.innerText = accuracyRounded
        box.appendChild(accuracyScore)
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
      normal.innerHTML = ''
      const hardStage = document.createElement('div')
      hardStage.innerText = 'HARD'  
      normal.appendChild(hardStage)
      hardStage.style.color = 'yellow'
      hardStage.style.textAlign = 'center'
      hardStage.style.fontSize = '300%'
      // create a box in the center to show where the game will be played in
      const box = document.createElement('div')
      normal.appendChild(box)
      box.style.position = 'relative'
      box.style.backgroundColor = 'red'
      box.style.margin = 'auto'
      box.style.width = '600px'
      box.style.height = '400px'
      // create a button so start
      const start = document.createElement('button')
      start.innerText = 'START'
      box.appendChild(start)

      //create a new div within the box
      const circleDiv = document.createElement('div')
      circleDiv.setAttribute('class', 'container')
      box.appendChild(circleDiv)

      //create a ul to store the list of circles
      const ul = document.createElement('ul')

      //start the game
      start.addEventListener('click', function(){
      console.log('START')
      start.innerText = 'Menu'

        // if the menu button is clicked
          start.addEventListener('click', function(){
          window.location.reload()
          }) 

          //run the timer
          timer.innerText = time + " second" + (time == 1 ? "" : "s")
          box.appendChild(timer)
          countDown()
          setTimeout(gameOver, 15200)

          // create and randomize circle within the box
          function createCircle(){
          const circle = document.createElement('button')
          circle.setAttribute('class', 'dotHard')
          function randomWidth(min, max){
            return Math.random() * (max - min) + min
          }

          function randomHeight(min, max){
            return Math.random() * (max - min) + min
          }
          
          circle.style.position = 'absolute'
          circle.style.top = randomHeight(0,80) + '%'
          circle.style.left = randomWidth(0,85) + '%';


          //create a list to add the circles into the ul
          const li = document.createElement('li')
          li.appendChild(circle)
          ul.appendChild(circle)
          circleDiv.prepend(ul)
        
          //create event listener for creating more circles
            circle.addEventListener('click', popSound)
            circle.addEventListener('click', createCircle)
            circleDiv.firstChild.replaceChild(circleDiv.firstChild.childNodes[1],circleDiv.firstChild.childNodes[0])
            //to record circleclicks
            points++
            console.log(points + 'points')

          // append points
          pointsDiv.innerText = points + 'points'
          box.appendChild(pointsDiv)
          
        setTimeout(stopCircle, 2000)
          function stopCircle(){
          circle.removeEventListener('click', createCircle)
          }
          setTimeout(stopCircle, 2000)
        }

        //create a function to record clicks
        function boxClick(){
          click++
          console.log(click + 'click')
          let accuracy = (points / click) * 100
          let accuracyRounded = accuracy.toFixed(2)
          console.log(accuracy + '%')

          // create a timer to stop all clicks after timer runs out
          function stopClick(){
          box.removeEventListener('click', boxClick)
          }
          setTimeout(stopClick, 15050)

          //append accuracy
          accuracyScore.innerText = 'accuracy =' + accuracyRounded + '%'
          box.appendChild(accuracyScore)
        }

        box.addEventListener('click', boxClick)
        createCircle()
        
        //append points
        pointsDiv.innerText = points + 'points'
        box.appendChild(pointsDiv)
        
        //append accuracy
        accuracyScore.innerText = accuracyRounded
        box.appendChild(accuracyScore)
      })
    })
  }
  genLevelsEasy()
  genLevelsMedium()
  genLevelsHard()
  normal.removeEventListener('click', normalMode)

}

normal.addEventListener('click', normalMode)
document.querySelector('.music_off').addEventListener('click', function(e){
  if(document.querySelector('#background_music').muted === true){
    playMusic()
    e.target.src = './image/volume.jpg'
    document.querySelector('#background_music').muted = false
  } else {
  pauseMusic()
  e.target.src = "./image/muted.jpg"
  document.querySelector('#background_music').muted = true    
  }
})