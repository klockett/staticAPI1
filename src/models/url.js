const db = require('./db');


exports.create = (payload, err, success)=> {
    db.url.create(payload).then(success).catch(err);
}

exports.findAll = (err, success) => {
    db.url.findAll().then(success).catch(err);
}
/*
exports.find = (payload, err, success) => {
    db.url.find({
      where:{
        id: payload.id,
    },
   //Find all relations defined in sequelize
   include:[{
     all:true,
     nested: true,
    }],
  }).then(success).catch(err);
}





exports.destroy = (payload, err, success) => {
    db.url.destroy({
      where:{
        id: payload.id,

      }
     }).then(success).catch(err);
}*/
