var reviewsItems = document.querySelectorAll('.reviews__item');
var reviewsToggles = document.querySelectorAll('.reviews__toggles .slider__toggle');

for (var i = 0; i < reviewsToggles.length; i++) {
  reviewsToggles[i].addEventListener('click', function (evt) {
    for (var i = 0; i < reviewsToggles.length; i++) {
      reviewsItems[i].classList.remove('reviews__item--current');
      reviewsToggles[i].classList.remove('slider__toggle--current');
    }

    evt.target.classList.add('slider__toggle--current');

    for (i = 0; i < reviewsToggles.length; i++) {
      if (reviewsToggles[i].className.indexOf('slider__toggle--current') > 0) {
        reviewsItems[i].classList.add('reviews__item--current');
      }
    }
  });
}

var reviewsButtonLeft = document.querySelector('.reviews__button-left');
var reviewsButtonRight = document.querySelector('.reviews__button-right');

function LeftRightSlider(button, arrow) {
  button.addEventListener('click', function () {
    var reviewsCount = reviewsItems.length;
    var indexOfnext;

    for (var i = 0; i < reviewsCount; i++) {
      if (reviewsItems[i].className.indexOf('reviews__item--current') > 0) {
        if (arrow === 'left') {
          indexOfnext = (i + 1) % reviewsCount;
        } else if (arrow === 'right') {
          indexOfnext = i ? i - 1 : reviewsCount - 1;
        }
        reviewsItems[indexOfnext].classList.add('reviews__item--current');
        reviewsItems[i].classList.remove('reviews__item--current');
        reviewsToggles[i].classList.remove('slider__toggle--current');
        reviewsToggles[indexOfnext].classList.add('slider__toggle--current');
        return;
      }
    }
  });
}

LeftRightSlider(reviewsButtonLeft, 'left');
LeftRightSlider(reviewsButtonRight, 'right');
//========================================================================================
var pricesToggles = document.querySelectorAll('.prices__toggles .slider__toggle');
var pricesTable = document.querySelector('.prices__table');
var tablePositions = {
                      0: 'flex-start',
                      1: 'center',
                      2: 'flex-end'
                      };

for (i = 0; i < pricesToggles.length; i++) {
  pricesToggles[i].addEventListener('click', function (evt) {
    for (var i = 0; i < pricesToggles.length; i++) {
      pricesToggles[i].classList.remove('slider__toggle--current');
    }
    evt.target.classList.add('slider__toggle--current');

    for (i = 0; i < pricesToggles.length; i++) {
      if (pricesToggles[i].className.indexOf('slider__toggle--current') > 0) {
        pricesTable.style.alignItems = tablePositions[i];
      }
    }
  });
}
