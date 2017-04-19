var map = L.map('mapid').setView([44.053489, -123.085817], 11);

	
// Set up cards
var cards = "";
var cardswrap = document.getElementById("cardswrap");

// See: https://carto.com/location-data-services/basemaps/ CAN'T USE
var carto = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
var osm = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var cartoc = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>';
var osmc = 'Map data &copy; <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>';

L.tileLayer(osm, {
	maxZoom: 18,
	attribution: osmc
}).addTo(map);

omnivore.csv('data/olcc_lane_retailers_geocoded_2017_0418.csv')
.on('ready', function(layer) {
	
	this.eachLayer(function(marker) {
		
		var mID = marker.toGeoJSON().properties.cartodb_id;
		var mStatus = marker.toGeoJSON().properties.status;
		var mStatusLower = mStatus.toLowerCase();
		var mName = marker.toGeoJSON().properties.tradename;
		var mAddress = marker.toGeoJSON().properties.address;
		var mCity = marker.toGeoJSON().properties.location_c;
		var mZip = marker.toGeoJSON().properties.location_z;
		
		addCard(mID,mStatusLower,mStatus,mName,mAddress,mCity,mZip);
		
		if (mStatus === 'Active') {
			marker.setIcon(
				L.icon({
					iconUrl: 'media/approved.png',
					shadowUrl: 'media/shadow.png',

					iconSize:     [10,10], // size of the icon
					shadowSize:   [10,10], // size of the shadow
					iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
					shadowAnchor: [-2,-2],  // the same for the shadow
					popupAnchor:  [6,0] // point from which the popup should open relative to the iconAnchor
				}));
		} else if (mStatus === 'Dispensary') {
			marker.setIcon(
				L.icon({
					iconUrl: 'media/dispensary.png',
					shadowUrl: 'media/shadow.png',

					iconSize:     [10,10], // size of the icon
					shadowSize:   [10,10], // size of the shadow
					iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
					shadowAnchor: [-2,-2],  // the same for the shadow
					popupAnchor:  [6,0] // point from which the popup should open relative to the iconAnchor
				}));
		} else {
			marker.setIcon(
				L.icon({
					iconUrl: 'media/pending.png',
					shadowUrl: 'media/shadow.png',

					iconSize:     [10,10], // size of the icon
					shadowSize:   [10,10], // size of the shadow
					iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
					shadowAnchor: [-2,-2],  // the same for the shadow
					popupAnchor:  [6,0] // point from which the popup should open relative to the iconAnchor
				}));
		}
		
		// Bind a popup to each icon based on the same properties
		//marker.bindTooltip(mBName);
		//console.log(mID);
		
		marker.on('click', function(){
			$('.flexy-item').css("background","none");
			//console.log(marker);
			//console.log(mID);
			var dest = "#" + mID;
			//window.location = dest;
			$('html, body').animate({
				scrollTop: $(dest).offset().top - 50
			}, 2000, function(){
				$(dest).css("background","rgba(136,136,136,.2)");
			});
		});
		
		cardswrap.innerHTML = cards;
		
		//marker.bindPopup(mBName + '<br>' + mAddress);
	});
})
.addTo(map);
