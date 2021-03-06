const { Sequelize, Model, DataTypes } = require('sequelize');

class Has extends Model { }

module.exports = function (sequelize, User, Folder){
    Has.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        folderId: {
            type: DataTypes.INTEGER,
            references: {
                model: Folder,
                key: 'id'
            }
        },
    },{
         // Other model options go here
         sequelize, // We need to pass the connection instance
         modelName: 'Has' // We need to choose the model name
    });

    return Has;
}