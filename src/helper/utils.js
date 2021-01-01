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

    converday: (thu) => {
        switch (thu)  {
            case 0 : {
                return 2;
            }

            case 1 : {
                return 3;
            }

            case 2 : {
                return 4;
            }

            case 3 : {
                return 5;
            }

            case 4 : {
                return 6;
            }

            case 5 : {
                return 7;
            }

            case 6 : {
                return "Chủ nhật";
            }

            default : {
                return null
            }
        }
      }
}

export default utils;