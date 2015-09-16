Meteor.publish("posts",function(userid){
	return Posts.find({});
})
Meteor.publish("likes",function(postid){
	return Likes.find({post:postid});
})
Meteor.publish("about",function(){
	return About.find({});
})

var x= 0

Meteor.methods({
	//{text:'',owner:'',date:'',parent:''}
	'addPost':function(options){
		var post = {
			username: Meteor.user().username,
			text:options.text,
			owner:Meteor.userId(),
			date:new Date(),
			parent: options.parent,
			other: About.find({name:Meteor.user().username}).fetch()
		}
		Posts.insert(post);
	},
	'removePost':function(id){
		Posts.remove({_id:id});
	},
	'removeAllPosts':function(){
		Posts.remove({});
	},
	'updateUser':function(options ){
		console.log(options);
		var about = {
			_id: Meteor.userId(),
			name: options.name,
			propic: options.propic,
			about: options.about,
			location: options.location,
			bday: options.bday
		}
		//if(x === 0 )
			//{
			About.insert(about);
			//x=1;
		//}else if(x === 1)
			//About.update({_id:Meteor.userId},{$set: about});
	},
	'findUser':function(name){
		console.log(About.find({name:name}).fetch())
		return About.find({name:name}).fetch();
	}
})