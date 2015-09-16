Template.profile.rendered = function(){
	Deps.autorun(function(){
		Meteor.subscribe("about");
	})	
}

Template.profile.helpers({
	User: function(){
		return About.find({_id:Meteor.userId()});
	},
	Propic: function(){
		return About.find({_id:Meteor.userId()});
	},
	About: function(){
		return About.find({_id:Meteor.userId()});
	},
	Location: function(){
		return About.find({_id:Meteor.userId()});
	},
	Bday: function(){
		return About.find({_id:Meteor.userId()});
	}
})

Template.profile.helpers({
	posts : function(){
	return Posts.find({parent:null, username: Meteor.user().username},{sort:{date:-1}});
}
})
