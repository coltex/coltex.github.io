$(document).ready( function() {
  $("#primary").hide(); 
  $("#header").animo( { animation: 'bounceInLeft', duration: 1 }, function() {
    $("#primary").show().animo( { animation: 'bounceInRight', duration: 1 } );
  }); 
});

