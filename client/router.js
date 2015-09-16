Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('home', {path:'/'});
});
Router.map(function(){
	this.route('profile', {path:'/profile'});
});
Router.map(function(){
	this.route('about', {path:'/about'});
});

Router.map(function(){
	this.route('edit', {path:'/edit'});
});

Router.map(function(){
	this.route('search', {path:'/search'});
});
