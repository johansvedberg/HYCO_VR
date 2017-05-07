AFRAME.registerComponent('item', {
  init: function() {
    var sceneEl = document.querySelector('a-scene');
    var product = sceneEl.querySelector('#product');
    var price = sceneEl.querySelector('#price');
    var name = sceneEl.querySelector('#name');
    var desc = sceneEl.querySelector('#description');
    var boolean = false;
    this.el.addEventListener('click', function(evt) {

      if (!boolean) {
        product.emit("notClicked")
        price.emit("notClicked")
        name.emit("notClicked")
        desc.emit("notClicked")
        boolean = true;
      } else {
        product.emit("clicked")
        price.emit("clicked")
        name.emit("clicked")
        desc.emit("clicked")
        boolean = false;
      }


    });
  }
});
