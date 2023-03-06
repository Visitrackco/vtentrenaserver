const express = require('express');
const router = express.Router();
const axios = require('axios');
const { properties } = require('../../Middleware/VerifyToken');
const moment = require('moment-timezone');

async function getActivities(tkn, FormGUID, from, to) {
    try {
        const rs = await axios.post('https://api.visitrack.com/api/Surveys/Activities', {
            AccessToken: tkn,
            From: moment(from).format('YYYY-MM-DD HH:mm'),
            To: moment(to).format('YYYY-MM-DD HH:mm'),
            FormGUID: FormGUID,
        })

        let arrDataSurveysAnswer = [];

        if (rs) {
            for (const activity of rs.data) {

                const rsData = await getInfo(tkn, activity.GUID);
                arrDataSurveysAnswer.push(rsData);

            }
        }

        return arrDataSurveysAnswer;

    } catch (error) {
        return error
    }

}

function getInfo(tkn, GUID) {
    return new Promise(async(resolve, reject) => {
        const rsData = await axios.get('https://api.visitrack.com/api/Surveys/Activity?AccessToken=' + tkn + '&GUID=' + GUID + '&ListValues=false')
        resolve(rsData)
    })
}



router.get('/SurveyAnswersByForm', [properties], async(req, res) => {

    try {

        const rs = await getActivities(req.properties.tkn, req.properties.FormGUID, req.properties.from, req.properties.to)

        return res.json({
            status: true,
            response: rs,
            properties: req.properties
        })

    } catch (error) {
        return res.json({
            status: false,
            error: error
        })
    }

})

module.exports = router;