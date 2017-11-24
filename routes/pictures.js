const picureController = require('../controllers/picture');

module.exports  = (app) => {
	app.post('/api/picture', picureController.createPicture);
	app.put('/api/picture/:id', picureController.updatePicture);
	app.delete('/api/picture/:id', picureController.deletePicture);
	app.get('/api/picture', picureController.getPicture);
	app.get('/api/picture/:id', picureController.getPictureById);
};