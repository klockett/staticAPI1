const db = require('./db');

exports.create = (payload, err, success) => {
	db.url.create(payload).then(success).catch(err);
}

//Gets all genres
exports.findAll = (err, success) => {
	db.url.findAll().then(success).catch(err);
}

//Gets a genre by specific ID
exports.find = (payload, err, success) => {
	db.url.find({
		where:{id: payload.id,},
		include: [{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}

//Deletes a genre by specific ID
exports.destroy = (payload, err, success) => {
	db.url.find({
		where:{id: payload.id,},

	}).then(success).catch(err);
}

//Updates a genre by specific ID
exports.update = (payload, err, success) => {
	db.url.find({
		where:{id: payload.id,},
	}).then((updatingData)=>{
		updatingData.updateAttributes(payload).then(success).catch(err);
	}) .catch(err);
}
