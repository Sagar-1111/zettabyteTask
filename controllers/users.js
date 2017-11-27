const user = require('../models/users');

module.exports = {
	getUser(req, res, next){
		user.find({})
			.populate('image')
			.then(user => {
				res.send(user);
			})
			.catch(next);
	},
	createUser(req, res, next){
		const userProps = req.body;
		user.create(userProps)
			.then(driver => res.send(driver))
			.catch(next);	
	},
	editUser(req, res, next){
		const userId = req.params.id;
		const userProps = req.body;
		user.findByIdAndUpdate({ _id: userId }, userProps, { new: true })
			.populate('image')
			.then(user => res.send(user))
			.catch(next);
	},
	deleteUser(req, res, next){
		const userId = req.params.id;
		user.findByIdAndRemove({ _id: userId })
			.then(userId => res.status(204).send(userId))
			.catch(next);
	},
	getUserById(req, res, next){
		const userId = req.params.id;
		user.findById(userId)
			.populate('image')
			.then(user => {
				res.send(user);
			})
			.catch(next);		
	}
};