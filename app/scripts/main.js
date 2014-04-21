$(document).ready(function() {

var neatCars = ['Acura', 'Honda', 'Mitsubishi', 'BMW', 'Datsun' ];

var carTemplate = function(coolcars) {
  var markup = '';
  var i;

  for ( i=0; i<coolcars.length; i++) {
    markup += '<li>' + coolcars[i] + '</li>';

  }

  return markup;
};

$('.car').append(carTemplate(neatCars));




var tastyCandy = ['Fun Dip','Peanutbutter cups','Snickers','Twix','Sour Patch Kids','Lemon Heads',];

   var candyTemplate = function(tastycandy) {

      var markup = '';
      var i;

      for( i=0; i<tastycandy.length; i++) {
        markup += '<li>' + tastycandy[i] + '</li>';
      }

      return markup;
      
   };

   $('.candy').append(candyTemplate(tastyCandy));





});








