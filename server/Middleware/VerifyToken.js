const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.get('x-token');
    jwt.verify(token, 'vt$aenEntr!', (err, decode) => {
        if (err) {
            return res.json({
                status: 'error',
                error: 'Inauthorized'
            })
        }

        req.user = decode.payload.user;
        req.info = decode.payload.info;

        next();
    })

}

const properties = (req, res, next) => {
    const tkn = req.query('AccessToken');
    const from = req.query('From');
    const to = req.query('To');
    const FormGUID = req.query('FormGUID');

    if (!from) {
        return res.json({
            error: 'From indefinido, por favor especificar el parámetro dentro del body del request'
        })
    }

    if (!to) {
        return res.json({
            error: 'To indefinido, por favor especificar el parámetro dentro del body del request'
        })
    }

    if (!FormGUID) {
        return res.json({
            error: 'FormGUID indefinido, por favor especificar el parámetro dentro del body del request'
        })
    }

    if (!tkn) {
        return res.json({
            error: 'AccessToken indefinido, por favor especificar el parámetro dentro del body del request'
        })
    }

    const body = {
        tkn,
        from,
        to,
        FormGUID
    }

    req.properties = body;

    next();


}

module.exports = {
    verifyToken,
    properties
}