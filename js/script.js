if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}


function onDocumentReady() {
  console.log('Document ready.');
  
}
