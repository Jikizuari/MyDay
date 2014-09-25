jQuery( function() {

	var button_yes	= jQuery( '.yes' ),
		button_no	= jQuery( '.no' ),

		functions = {
			vibrate: function( time ) {
				navigator.notification.vibrate( time );
			},
			beep: function( times ) {
				navigator.notification.beep( times );
			}
		};

	button_yes.on( 'click', function() {
		functions.vibrate( 2000 );
	});

	button_no.on( 'click', function() {
		functions.beep( 5 );
	});
});