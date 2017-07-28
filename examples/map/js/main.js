new Vue({
	el: '#app'
});

const randomizeFromRange = (min, max) => Number((Math.random() * (max - min) + min).toFixed(6));

const generateLatLon = () => {
	let coordinates = [];

	const ranges = {
		lat: { min: 59.900000, max: 59.911491 },
		lon: { min: 10.700000, max: 10.757933 }
	};

	coordinates.push(
		randomizeFromRange(ranges.lat.min, ranges.lat.max),
		randomizeFromRange(ranges.lon.min, ranges.lon.max)
	);

	return coordinates;
};

const coordinates = generateLatLon();
const zoom = 13;
const maxZoom = 18;
const timeToUpdate = 2000;
const apiUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const attribution = `Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,
					<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
					Imagery © <a href="http://mapbox.com">Mapbox</a>`;

const map = L.map('map').setView(coordinates, zoom);
let marker = L.marker(coordinates).addTo(map);

L.tileLayer(apiUrl, {
	maxZoom: maxZoom,
	attribution: attribution,
	id: 'mapbox.streets'
}).addTo(map);

setInterval(function() {
	// marker.remove();
	marker = L.marker(generateLatLon()).addTo(map);
}, timeToUpdate);
