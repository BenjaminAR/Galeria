var modal = document.querySelector('.fondo');
var closeButton = document.querySelector('.fondo .close');
var anchors = document.querySelectorAll('.caja a');

closeButton.addEventListener('click', function(e){
  e.preventDefault();
  modal.style.display = 'none';
})
anchors.forEach(a => a.addEventListener('click', function(e){
  e.preventDefault();
  var img = this.querySelector('img');
  var modalImg = modal.querySelector('img');
  modalImg.src = img.src;
  modal.style.display = 'flex';
  TweenMax.from('.fondo', 1, {scale: 4});
}));