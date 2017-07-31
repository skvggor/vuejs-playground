new Vue({
	el: '#app',

	data: {
		coordinates: [42.359926, -71.095831],
		zoom: 13,
		maxZoom: 18,
		timeToUpdate: 2000,
		apiUrl: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
		attribution: `Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,
						<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
						Imagery © <a href="http://mapbox.com">Mapbox</a>`,
		map: '',
		marker: ''
	},

	mounted: function() {

		this.map = L.map('map').setView(this.coordinates, this.zoom);
		this.marker = L.marker(this.coordinates).addTo(this.map);

		L.tileLayer(this.apiUrl, {
			maxZoom: this.maxZoom,
			attribution: this.attribution,
			id: 'mapbox.streets'
		}).addTo(this.map);
	},

	methods: {
		update: function() {

			const map = this.map;
			let coordinates = this.coordinates;

			this.marker.remove();
			this.marker = L.marker(coordinates).addTo(map);

			map.panTo(L.latLng(coordinates[0], coordinates[1]));
		}
	}
});
