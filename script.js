var sound = new Howl({
  src:['quack.mp3']
});

$('.myGrid3 div').each(function(index, element){
  element = $(element);
  index += 1;
  element.css("grid-row", index);

  if(index % 2 == 0){
    element.css("grid-column", 1);

  }
  else{
    element.css("grid-column", 2)
  }

});

$('.myGrid div').click(function(){
sound.play();
});

AOS.init();
