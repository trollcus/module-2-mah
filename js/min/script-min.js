if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}


function onDocumentReady() {
  console.log('Document ready.');
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
}


