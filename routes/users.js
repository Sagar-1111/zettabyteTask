const userController = require('../controllers/users');

module.exports  = (app) => {
	app.post('/api/user', userController.createUser);
	app.put('/api/user/:id', userController.editUser);
	app.delete('/api/user/:id', userController.deleteUser);
	app.get('/api/user', userController.getUser);
	app.get('/api/user/:id', userController.getUserById);
};