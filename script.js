$(document).ready(function() {

  var padOne = new Audio('boom.wav');
  $('.pad-1').mousedown(function() {
    padOne.load()
    padOne.play();
  });

  var padTwo = new Audio('clap.wav');
  $('.pad-2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('hihat.wav');
  $('.pad-3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('kick.wav');
  $('.pad-4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('openhat.wav');
  $('.pad-5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

  var padSix = new Audio('ride.wav');
  $('.pad-6').mousedown(function() {
    padSix.load();
    padSix.play();
  });

  var padSeven = new Audio('snare.wav');
  $('.pad-7').mousedown(function() {
    padSeven.load();
    padSeven.play();
  });
  
  var padEight = new Audio('tink.wav');
  $('.pad-8').mousedown(function() {
    padEight.load();
    padEight.play();
  });

  var padNine = new Audio('tom.wav');
  $('.pad-9').mousedown(function() {
    padNine.load();
    padNine.play();
  });
  
   
  
  $(window).keydown(function(e) {
    var code = e.keyCode;
    var kc = String.fromCharCode(e.keyCode);
    $("div[data-code='"+code+"']").addClass("active")
    console.log(code);
    
    switch(kc) {
      case "E":
        padOne.load();
        padOne.play();
        break;
      case "D":
        padTwo.load();
        padTwo.play();
        break;
      case "W":
        padThree.load();
        padThree.play();
        break;
      case "A":
        padFour.load();
        padFour.play();
        break;
      case "R":
        padFive.load();
        padFive.play();
        break;
      case "D":
        padSix.load();
        padSix.play();
        break;
      
      default:
    }
  });

  $(window).keyup(function(e) { 
    var code = e.keyCode;
    $("div[data-code='"+code+"']").removeClass("active");
  });

});