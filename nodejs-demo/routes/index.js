
/*
 * GET home page.
 */

module.exports = function(app){
	app.get("/",function(req, res){
		res.render("index", {
			title: '知道',
			name: '问答平台'});
	});
}
