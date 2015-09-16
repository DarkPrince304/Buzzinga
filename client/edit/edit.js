
Template.edit.events({
	'click .btn-info':function(evt, tmpl){
			var user = tmpl.find('.user').value;
			var propic = tmpl.find('.propic').value;
			var about = tmpl.find('.about-me').value;
			var location = tmpl.find('.location').value;
			var bday = tmpl.find('.bday').value;
			var options = {name: user, propic:propic, about:about, location:location, bday:bday};
			Meteor.call('updateUser',options);
			$('.edit-info').val("").select().focus();
	}
})