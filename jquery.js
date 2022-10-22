let Links = {
SetColor:function(color){
//   var alist = document.querySelectorAll('a');
//   var i = 0;
//   while(i < alist.length){
//       alist[i].style.color = color;
//       i= i + 1;
// }
$('a').css('color', color);
}
}

// a 모든 태그에 css라는 함수 적용

  let Body = {
    SetColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
    },
  SetBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

//이 페이지에 모든 body  값에 대해서 color 값을 parameter color로 한다

  function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'day';

    Links.SetColor('powderblue');

} else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';

    Links.SetColor('blue');

  }
}
