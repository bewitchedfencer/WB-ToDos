module.exports = function (sequelize, DataTypes) {
    var AdminToDo = sequelize.define('AdminToDo', {
        message: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 100]
            }
        },
        complete:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        category:{
            type:DataTypes.ENUM("To Do", "Reminder", "Follow-Up"),
            defaultValue:"To Do"
        }
    });
    return AdminToDo
};