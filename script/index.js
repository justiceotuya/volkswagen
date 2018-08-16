let searchIcon = document.querySelector('#search-icon');
let searchGroup = document.querySelector('#search-group');

let toggle = () => {
  if (searchGroup.className === 'hide') {
    searchGroup.className = 'show';
    console.log('element shown');
  } else {
    searchGroup.className = 'hide';
    console.log('element hidden');
  }
};

$('.image-scroll').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'ease',
  fade: true
});

Vibrant.from('../images/volkswagen.jpg').getPalette(function(err, palette) {});
