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
