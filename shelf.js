AFRAME.registerComponent('shelf', {
  init: function() {
    var sceneEl = document.querySelector('a-scene');
    var box = sceneEl.querySelector('#box');
    var boolean = false;
    this.el.addEventListener('click', function(evt) {
      console.log(box);
      //  box.setAttribute('position',"3 3 3")
      if (!boolean) {
        box.emit("move")
        boolean = true;
      } else {
        box.emit("moveBack")
        boolean = false;
      }


    });
  }
});
