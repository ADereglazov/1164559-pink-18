var buttonsTool = document.querySelectorAll('.photoeditor__button-tool');
var labelsTool = document.querySelectorAll('.photoeditor__label');

for (var i = 0; i < buttonsTool.length; i++) {
  buttonsTool[i].addEventListener('click', function (evt) {
    for (var i = 0; i < buttonsTool.length; i++) {
      if (buttonsTool[i].classList.contains('photoeditor__button-tool--current')) {
        buttonsTool[i].classList.remove('photoeditor__button-tool--current');
        var beforeClickButton = i;
      }
    }

    evt.currentTarget.classList.add('photoeditor__button-tool--current');
    labelsTool[beforeClickButton].classList.add('photoeditor__label--hide');

    for (i = 0; i < buttonsTool.length; i++) {
      if (buttonsTool[i].classList.contains('photoeditor__button-tool--current')) {
        labelsTool[i].classList.remove('photoeditor__label--hide');
      }
    }
  });
}
