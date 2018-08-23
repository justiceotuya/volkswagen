const nextButton = $('.next');
const prevButton = $('.prev');
const volkswagenDiv = $('#volkswagen');
const volvoDiv = $('#volvo');

//scroll the pages with the keyboard
$(document).keydown(function() {
  if (event.which === 39) {
    scrollFoward();
  } else if (event.which === 37) {
    scrollBack();
  }
});

// scrolling the pages with button
nextButton.on('click', event => {
  scrollFoward();
});

prevButton.click(event => {
  scrollBack();
});

//helper functions
const scrollFoward = () => {
  event.preventDefault();
  if (volkswagenDiv.hasClass('show')) {
    removeVolksDiv();
    showVolvoDiv();
  } else if (volkswagenDiv.hasClass('hide')) {
    removeVolvoDiv();
    showVolksDiv();
  }
};

const scrollBack = () => {
  event.preventDefault();
  if (volkswagenDiv.hasClass('show')) {
    removeVolksDiv();
    showVolvoDiv();
  } else if (volkswagenDiv.hasClass('hide')) {
    removeVolvoDiv();
    showVolksDiv();
  }
};

const removeVolksDiv = () => {
  volkswagenDiv.removeClass('show').addClass('hide');
};

const showVolksDiv = () => {
  volkswagenDiv.removeClass('hide').addClass('show');
};

const removeVolvoDiv = () => {
  volvoDiv.removeClass('show').addClass('hide');
};

const showVolvoDiv = () => {
  volvoDiv.removeClass('hide').addClass('show');
};
