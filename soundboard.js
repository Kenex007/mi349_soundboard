var burp = document.getElementById('burp')
var burp_sound = document.getElementById("burp-sound")
  
burp.addEventListener('click', function () {
    console.log('I was clicked!')
    burp_sound.play()
})

var thunder = document.getElementById('thunder')
var thunder_sound = document.getElementById("thunder-sound")
    
thunder.addEventListener('click', function () {
    console.log('I was clicked!')
    thunder_sound.play()
})

var boom = document.getElementById('boom')
var boom_sound = document.getElementById("boom-sound")
      
boom.addEventListener('click', function () {
    console.log('I was clicked!')
    boom_sound.play()
})
