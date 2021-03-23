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

module.exports = {
     verifyToken
}