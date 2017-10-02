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
  parallaxInstance.disable();

  var scene1 = document.getElementById('scene1');
  var parallaxInstance1 = new Parallax(scene1);
  parallaxInstance1.friction(0, 0.1);
  parallaxInstance1.disable();

  var scene2 = document.getElementById('scene2');
  var parallaxInstance2 = new Parallax(scene2);
  parallaxInstance2.friction(0, 0.1);
  parallaxInstance2.disable();

  var scene3 = document.getElementById('scene3');
  var parallaxInstance3 = new Parallax(scene3);
  parallaxInstance3.friction(0.1, 0);
  parallaxInstance3.disable();



  // var myElement = document.body;
  //
  // var mc = new Hammer(myElement);
  //
  // mc.add( new Hammer.Tap({ event: 'quadrupletap', taps: 2 }) );
  //
  // mc.on("quadrupletap", handleTaps);
  // function handleTaps(ev) {
  //   console.log(ev.target);
  // }

  var myElement = document.body;

  // We create a manager object, which is the same as Hammer(), but without the presetted recognizers.
  var mc = new Hammer.Manager(myElement);

  // Default, tap recognizer
  mc.add( new Hammer.Tap() );

  // Tap recognizer with minimal 4 taps
  mc.add( new Hammer.Tap({ event: 'quadrupletap', taps: 2 }) );

  // we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
  // the tap event will be emitted on every tap
  mc.get('quadrupletap').recognizeWith('tap');


  mc.on("quadrupletap", function(ev) {




        $('#back').toggleClass("overlay");

        if($('.object').hasClass( "enabled" )){
          parallaxInstance.disable();
          parallaxInstance1.disable();
          parallaxInstance2.disable();
          parallaxInstance3.disable();
          $('.object').removeClass( "enabled" );
          console.log('disable');
        } else {
          parallaxInstance.enable();
          parallaxInstance1.enable();
          parallaxInstance2.enable();
          parallaxInstance3.enable();
          $('.object').addClass( "enabled" );
          console.log('enable');
        }


  });

}
