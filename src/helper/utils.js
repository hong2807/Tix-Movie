// Moment
var moment = require('moment')

const utils = {
    handleDate:  (param) => {
        let date = moment(param).format('L')
        return date
    },

    handleTime:  (param) => {
        let time = moment(param).format('kk:mm')
        return time
    },
}

export default utils;