AFRAME.registerComponent('color-box', {
  init: function() {

    this.el.addEventListener('click', function(evt) {
      this.setAttribute('material', 'color', getRandomColor());
      //console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
