$('document').ready(function(){

  window.addEventListener('keydown', moveSelection);
  var w = parseInt($(".canvas").width())
  var h = parseInt($(".canvas").height())
  var r = parseInt($("#ryoko").width())
  $("#ryoko").css("left", w/2 - r/2)

  var dropping;
  function startdropping(){
    dropping = setInterval(function(){
      antenna()
    }, 1000);
  }
  startdropping()

  $(".game").on("click",function(){
    endgame()
    clearInterval(dropping)
    $(".antenna").remove()
  })
  $("#start").on("click",function(){
    startgame()
    startdropping()
  })
  function endgame(){
    $(".game").hide()
    $(".gameover").css("display","flex")
  }
  function startgame(){
    $(".game").css("display","flex")
    $(".gameover").hide()
  }
  function leftArrowPressed() {
      var l = parseInt($("#ryoko").css("left"))
      if(l > 0){
        $("#ryoko").css("left", parseInt($("#ryoko").css("left")) - 20)
        $("#ryoko_left").show()
        $("#ryoko_right").hide()
      }
  }
  function rightArrowPressed() {
      var l = parseInt($("#ryoko").css("left"))
      if(l + r < w){
        $("#ryoko").css("left", parseInt($("#ryoko").css("left")) + 20)
        $("#ryoko_left").hide()
        $("#ryoko_right").show()
      }
  }
  function moveSelection(evt) {
    switch (evt.keyCode) {
      case 37:
      leftArrowPressed();
      break;
      case 39:
      rightArrowPressed();
      break;
    }
  };
  function antenna(){
    // $(".canvas").add('img')
    var $ant = $("<img class='antenna' src='http://placekitten.com/69/71'></img>")
    var _w = 30
    $ant.css({
      "left": parseInt(Math.random()*(w-_w)) ,
      "position": "absolute",
      "top": 0,
      "z-index": 950,
      "width": _w
    })
    $("#antennas").append($ant)
    $ant.animate({top: $(".canvas").height(),}, Math.random() + 5000, function(){
      $(this).remove();
    });
  }

});
