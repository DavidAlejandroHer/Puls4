Puls4.Views.Article = Backbone.View.extend({
	initialize:function(){
		console.log(this.$el);
	},
	render:function(){
		this.$el.html( this.model.get("title"));
	},
	events:{},
	tagName:"article",
	className:"post"
});