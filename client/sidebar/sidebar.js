Template.sidebar2.helpers({
	Modal: function(){
		return Meteor.user().username.name;
	}
})