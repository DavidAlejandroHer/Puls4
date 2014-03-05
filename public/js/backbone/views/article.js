Puls4.Views.Article = Backbone.View.extend({
	initialize:function(){
		console.log(this.$el);
var self = this;

		this.model.on('change', function(){
			if(window.app.state === "articleSingle"){
				self.extendedRender();
			}else{
				self.render();
			}
		});

		window.routers.base.on('route:root',function(){
			self.$el.css('display', '');
			self.render();
		});

		window.routers.base.on('route:articleSingle',function(){
			if(window.app.article === self.model.get('id') ){
				// Muestra version estendida
				self.extendedRender();
			}else{
				self.$el.hide();
			}
		});

		
		//this.template = _.template( $("#article-template").html() );
		this.template = swig.compile($("#article-template-swig").html() );
	},extendedRender : function() {
		var data = this.model.toJSON();

		var html = this.extendedTemplate(data);

		this.$el.html( html );
	},
	render:function(){
		var data  = this.model.toJSON();
		var html = this.template(data)
		this.$el.html( html );
	},
	events:{},
	tagName:"article",
	className:"post"
});