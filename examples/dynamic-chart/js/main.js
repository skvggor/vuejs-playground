const VuejsApp = new Vue({
	el: '#vuejsapp',

	data: {
		dataset: []
	},

	methods: {
		update: function() {

			let dataset = this.dataset.filter(el => el != '');

			const maxWidthtoChartinPx = 500;
			const highestValue = Math.max.apply(null, dataset);
			const onePercent = highestValue / 100;

			const x = d3
						.scaleLinear()
						.domain([0, highestValue])
						.range([0, maxWidthtoChartinPx]);

			const chart = d3.select('.chart');

			// Clean previous results
			chart.selectAll('div').remove();

			chart
				.selectAll('div')
				.data(dataset)
				.enter()
					.append('div')
					.style('width', d => `${x(d)}px`)
					.attr('data-info', d => `${d} / ${(d/onePercent != 0 ? d/onePercent : 0).toFixed(1)}%`);
		}
	}
});
