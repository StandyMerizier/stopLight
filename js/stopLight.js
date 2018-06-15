$(document).ready(function(){
  //user see’s stop light.
  var stopLights = ['green', 'yellow', 'red'];
  var currentLights = 0;
  setInterval(displayCurrentLight, 3000)

  function displayCurrentLight(){
    if(currentLights === 0){
      $('.green').css('opacity', 1)
      $('.yellow').css('opacity', 0.2)
      $('.red').css('opacity', 0.2)
      stopLights[currentLights++]
    }else if(currentLights === 1){
      $('.green').css('opacity', 0.3)
      $('.yellow').css('opacity', 1)
      $('.red').css('opacity', 0.3)
      stopLights[currentLights++]
    }
    else{
      $('.green').css('opacity', 0.3)
      $('.yellow').css('opacity', 0.3)
      $('.red').css('opacity', 1)
      currentLights = 0
    }
  }
});
