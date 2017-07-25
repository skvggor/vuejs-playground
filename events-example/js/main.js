const VuejsApp = new Vue({
	el: '#vuejsapp',

	data: {
		totalMembers: [],
		member: ''
	},

	methods: {
		save: function() {

			this.totalMembers.push(this.member);
		}
	}
});
