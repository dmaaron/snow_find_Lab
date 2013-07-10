var snowden_map = {

	map: null,

	display_map: function(lat, lng) {
		var mapOptions = {
			center: new google.maps.LatLng(lat, lng),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.HYBRID
		};
		var canvas = $('#map-canvas')[0];
		snowden_map.map = new google.maps.Map(canvas, mapOptions);
	},

	add_marker: function(lat, lng, title) {
		var iconBase = 'http://google-maps-icons.googlecode.com/files/harbour-guest.png';
		var latlng = new google.maps.LatLng(lat, lng);
		new google.maps.Marker({
			draggable: true,
			animation: google.maps.Animation.DROP,
			position: latlng,
			icon: iconBase,
			map: snowden_map.map,
			title: title
		});
	}
};

