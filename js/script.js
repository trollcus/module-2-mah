if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}


function onDocumentReady() {
  console.log('Document ready.');
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
  parallaxInstance.friction(0.15, 0);

  var scene1 = document.getElementById('scene1');
  var parallaxInstance1 = new Parallax(scene1);
  parallaxInstance1.friction(0, 0.1);

  var scene2 = document.getElementById('scene2');
  var parallaxInstance2 = new Parallax(scene2);
  parallaxInstance2.friction(0, 0.1);

  var scene3 = document.getElementById('scene3');
  var parallaxInstance3 = new Parallax(scene3);
  parallaxInstance3.friction(0.1, 0);

}
