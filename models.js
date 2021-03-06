const { DataTypes } = require('sequelize')
const sequelize = require('./dbConnect')


const Link = sequelize.define('Link', {
        shortId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: 'shortId',
                msg: 'Try again!'
            }
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: {
            //     args: 'url',
            //     msg: 'URL is already taken!'
            // }
        }, 
        aliasName: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: {
                args: 'url',
                msg: 'URL is already taken!'
            }
        }
    },
    {
        sequelize,
        modelName: 'Link',
        tableName: 'links',
        timestamps: true
    }
)


/*** 최초 한번만 실행 ***/
// sequelize.sync({ force: true }).then(() => console.log('Successfully sync all models!')).catch(err => console.log(err))

module.exports = { Link }