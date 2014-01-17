$( function() {
    $("#primary").hide();
    $("#header").animo( { animation: 'bounceInLeft', duration: 1 }, function() {
        $("#primary").show().animo( { animation: 'bounceInRight', duration: 1 });
        $("#welcomeText").show().animo( { animation: 'pulse', duration: 2 });
    });
});

$( function() {
    $("#contactMeLink").click( function() {
        $("#contactMeTab").click();
    });
});

