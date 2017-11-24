const picture = require('../models/picture');

module.exports = {
	getPicture(req, res, next){
		picture.find({})
			.then(picture => {
				res.send(picture);
			})
			.catch(next);
	},
	updatePicture(req, res, next){
		const pictureId = req.params.id;
		const pictureProps = req.body;
		picture.findByIdAndUpdate({ _id: pictureId }, pictureProps, { new: true })
			.then(picture => res.send(picture))
			.catch(next);
	},
	createPicture(req, res, next){
		const pictureProps = req.body;
		picture.create(pictureProps)
			.then(picture => res.send(picture))
			.catch(next);	
	},
	deletePicture(req, res, next){
		const pictureId =req.params.id;
		picture.findByIdAndRemove({ _id: pictureId })
			.then(picture => res.status(204).send(picture))
			.catch(next);
	},
	getPictureById(req, res, next){
	const pictureId = req.params.id;
	picture.findById(pictureId)
		.then(picture => {
			res.send(picture);
		})
		.catch(next);		
	}
};