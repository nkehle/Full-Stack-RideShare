
// SQL model for the comments table
// creates the comments table in the database

module.exports = (sequelize, DataTypes) => {

    const Comments = sequelize.define("Comments", {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Comments;
};