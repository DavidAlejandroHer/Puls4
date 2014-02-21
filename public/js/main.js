$(document).ready(function(){
	console.log('main.js loaded');

	window.collections.articles = new Puls4.Collections.Articles;

	window.collections.articles.on("add",function(model){
		//console.log("Se ha agregado un nuevo modelo", model.toJSON());
		//aqui debería comenzar a agregar los datos al body
		var view = new Puls4.Views.Article({model:model});
		
		view.render();
		view.$el.appendTo(".posts");

	});

	window.collections.articles.fetch();
});
