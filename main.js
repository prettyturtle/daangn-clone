const searchBar = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-input');
console.log(searchBar, searchInput)
searchInput.addEventListener('focus', function () {
  searchBar.classList.add('focused');
});
searchInput.addEventListener('blur', function () {
  searchBar.classList.remove('focused');
});