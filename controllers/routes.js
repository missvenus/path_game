var GM = require('../modals/game');

module.exports = function(app) {

// main page //
	app.get('/', function(req, res){

		// Render views/home.html

		GM.generateBoard({row:10,col:10}, function(e,table_html){
          res.render('board1', {tbl: table_html});
		})
		
	});

	


// creating new accounts //
	
    app.post('/add', function(req, res){
		AM.addNewUser({
			title   : req.body['title'],
			firstname 	: req.body['firstname'],
			lastname 	: req.body['lastname'],
			bday 	: req.body['bday'],
			sex: req.body['sex'],
			maritalStatus: req.body['maritalStatus'],
			add_line1: req.body['add_line1'],
			add_line2: req.body['add_line2'],
			locality: req.body['locality'],
			city: req.body['city'],
			state: req.body['state'],
			pincode: req.body['pincode'],
			mob_no: req.body['mob_no'],
		}, function(e){
			if (e){
				console.log(e);
				res.render('add', {title: 'Hello - Please Login To Your Account', error: e });
			}	else{
				res.render('profile',{welcome_text: 'Welcome', name: req.body['firstname']});
			}
		});
	});


}