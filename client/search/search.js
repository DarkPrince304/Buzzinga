Template.search.rendered = function(){
	Deps.autorun(function(){
		Meteor.subscribe("about");
	})
}

Template.search.events({
	'keyup .search':function(evt,tmpl){
		var text = tmpl.find('.search').value;
		if(evt.which === 13){
			console.log(name);
			var result = About.find().fetch();
			console.log(result);
			$('.search').val("").select().focus();
			}
		}

	});