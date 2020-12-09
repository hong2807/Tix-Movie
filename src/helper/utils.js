// Moment
var moment = require('moment')

const utils = {
    getVideoIdFromYoutubeLink: (url) => {
        const regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regex);
        return (match&&match[7].length === 11)? match[7] : false;
    },

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