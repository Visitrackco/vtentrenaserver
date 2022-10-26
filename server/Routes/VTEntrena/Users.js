const express = require('express');
const router = express.Router();
const UsersAdmin = require('../../Models/EntrenaVTModels/UsersAdminEntrena');
const UsersBasics = require('../../Models/EntrenaVTModels/UsersBasicsEntrena');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../../Middleware/VerifyToken');
const usersLog = require('../../Classes/Log');
const moment = require('moment-timezone');
const usersLogSchema = require('../../Models/EntrenaVTModels/LogUsers');
const excel = require('excel4node');
const path = require('path');
const fs = require('fs');
const Preferences = require('../../Models/EntrenaVTModels/Preferences');


router.post('/vtentrena/user/admin', (req, res) => {
    const body = req.body;

    if (!body.login || !body.password || !body.name) {
        return res.json({
            status: 'error',
            err: 'User information is incomplete, please check'
        })
    }

    let myUser = new UsersAdmin({
        login: body.login,
        password: body.password,
        name: body.name,
        logo: body.logo ? body.logo : 'https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg',
        dateCreatedUser: moment().utc()
    });

    myUser.save((err, userData) => {
        if (err) {
            return res.json({
                status: 'error',
                err
            })
        }

        let mypreference = new Preferences({
            user: userData._id,
            nameCompany: req.body.name,
            theme: req.body.theme,
            logo: body.logo ? body.logo : 'https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg',
            dateCreated: moment().utc()
        });

        mypreference.save((errorPreferences, preferenceData) => {
            if (errorPreferences) {
                return res.json({
                    status: 'error',
                    error: errorPreferences
                })
            }

            return res.json({
                status: 'ok',
                response: userData
            })
        })


    })

})



router.post('/vtentrena/user/basic', [verifyToken], (req, res) => {
    const body = req.body;

    if (!body.login || !body.password || !body.name || !body.time) {
        return res.json({
            status: 'error',
            err: 'User information is incomplete, please check'
        })
    }

    let myUser = new UsersBasics({
        login: body.login,
        password: body.password,
        name: body.name,
        logo: body.logo ? body.logo : 'https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg',
        configuration: {
            timeLimit: body.time
        },
        parentAdmin: req.user._id,
        dateCreatedUser: moment().utc()
    });

    myUser.save((err, userData) => {
        if (err) {
            return res.json({
                status: 'error',
                err
            })
        }

        return res.json({
            status: 'ok',
            response: userData
        })
    })

})



router.put('/vtentrena/user/basic', [verifyToken], (req, res) => {
    const body = req.body;
    const _id = req.get('x-id');

    if (!body.login || !body.password || !body.name || !body.time) {
        return res.json({
            status: 'error',
            err: 'User information is incomplete, please check'
        })
    }


    UsersBasics.findByIdAndUpdate(_id, {
        login: body.login,
        password: body.password,
        name: body.name,
        configuration: {
            timeLimit: body.time
        }
    }, { new: true }, (err, userData) => {
        if (err) {
            return res.json({
                status: 'error',
                err
            })
        }

        return res.json({
            status: 'ok',
            response: userData
        })
    })

})



router.get('/vtentrena/users/basic', [verifyToken], (req, res) => {

    UsersBasics.find({ parentAdmin: req.user._id, delete: 'false' })
        .exec((err, listUsersBasic) => {
            if (err) {
                return res.json({
                    status: 'error',
                    err
                })
            }

            return res.json({
                status: 'ok',
                response: listUsersBasic
            })
        })

})



router.delete('/vtentrena/user/basic', [verifyToken], (req, res) => {
    const body = req.body;
    const _id = req.get('x-id');

    UsersBasics.findByIdAndUpdate(_id, {
        delete: 'true'
    }, { new: true }, (err, userData) => {
        if (err) {
            return res.json({
                status: 'error',
                err
            })
        }

        return res.json({
            status: 'ok',
            response: userData
        })
    })

})

// Logs de usuarios 

router.get('/vtentrena/user/logs', [verifyToken], (req, res) => {
    const _id = req.get('x-id');

    usersLogSchema.find({ userID: _id })
        .exec((err, logs) => {
            if (err) {
                return res.json({
                    status: 'error',
                    err
                })
            }

            return res.json({
                status: 'ok',
                response: logs
            })
        })

})


// Genrar excel de logs 

router.get('/vtentrena/user/logs/export/', (req, res) => {
    try {
        const _id = req.get('x-id');
        console.log('excel');
        // Create a new instance of a Workbook class
        let wb = new excel.Workbook();

        // Add Worksheets to the workbook
        let ws = wb.addWorksheet('Logs Users');



        usersLogSchema.find({ userID: _id })
            .exec((err, logs) => {
                if (err) {
                    return res.json({
                        status: 'error',
                        error: err
                    })
                }

                if (logs.length > 0) {
                    ws.cell(1, 1)
                        .string('Event');

                    ws.cell(1, 2)
                        .string('Date');

                    ws.cell(1, 3)
                        .string('Navigator');

                    ws.cell(1, 4)
                        .string('IP');

                    ws.cell(1, 5)
                        .string('Name');

                    ws.cell(1, 6)
                        .string('Login');

                    let cont = 2;
                    logs.forEach((item, i) => {
                        let val = cont + i;
                        ws.cell(val, 1)
                            .string(item.action)

                        ws.cell(val, 2)
                            .string(item.dateCreated)

                        ws.cell(val, 3)
                            .string(item.userInfo.navigator)

                        ws.cell(val, 4)
                            .string(item.userInfo.ip)

                        ws.cell(val, 5)
                            .string(item.userInfo.name)

                        ws.cell(val, 6)
                            .string(item.userInfo.login)
                    })

                    const name = _id + moment().format('YYYYMMDDHHmmss') + '.xlsx';

                    wb.write(path.resolve(__dirname, '../../public/uploads/Excel/', name), function(error, stats) {
                        if (error) {
                            return res.json({
                                status: 'error',
                                error: error
                            })
                        } else {
                            return res.json({
                                status: 'ok',
                                action: 'generate',
                                path: name
                            })
                        }
                    });
                } else {
                    return res.json({
                        status: 'error',
                        error: 'there is no data to generate the excel'
                    })
                }


            })

    } catch (e) {
        return res.json({
            status: 'error',
            error: 'Exception: File Error'
        })
    }
})

router.get('/vtentrena/user/logs/download', (req, res) => {
    console.log(req.query.path)
    console.log(req.query.name)
    res.download(path.join(__dirname, '../../public/uploads/Excel/', req.query.path), req.query.name, (err) => {
        if (!err) {
            fs.unlinkSync(path.join(__dirname, '../../public/uploads/Excel/', req.query.path));
        }
    });


});

// cambiar status del usuario


router.put('/vtentrena/user/status', [verifyToken], (req, res) => {
    const body = req.body;
    console.log(req.body, 'body');

    if (!body.id || !body.timeLimit) {
        return res.json({
            status: 'error',
            err: 'User information is incomplete, please check'
        })
    }

    const _id = body.id;
    let dateLimit = '';

    if (body.status) {

        const date = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm');
        const hours = body.timeLimit;

        dateLimit = moment(date).add(parseFloat(hours), 'hours').format('YYYY-MM-DD HH:mm');

    }

    UsersBasics.findByIdAndUpdate(_id, {
        status: body.status ? 'on' : 'off',
        close: body.status ? false : true,
        configuration: { timeLimit: body.timeLimit, dateLimit }
    }, { new: true }, (err, userData) => {
        if (err) {
            return res.json({
                status: 'error',
                err
            })
        }




        return res.json({
            status: 'ok',
            response: userData
        })
    })

})





// Login Users

router.post('/vtentrena/user/login', (req, res) => {
    const body = req.body;
    const newLog = new usersLog();
    if (!body.data.login || !body.data.password) {
        return res.json({
            status: 'error',
            err: 'Undefined login or password, please check',
            body
        })
    }


    UsersAdmin.find({})
        .exec((err, usersAdmins) => {
            if (err) {
                return res.json({
                    status: 'error',
                    err
                })
            }

            console.log('entramos');

            if (usersAdmins.find((user) => user.login === body.data.login && user.password === body.data.password)) {

                let dataUser = usersAdmins.filter((user) => user.login === body.data.login && user.password === body.data.password)[0];


                const myToken = jwt.sign({ payload: { user: dataUser, info: { navigator: body.navigator, IP: body.IP } } }, 'vt$aenEntr!', { expiresIn: '48h' })


                newLog.createdLog({
                    login: dataUser.login,
                    name: dataUser.name,
                    _id: dataUser._id,
                    ip: body.IP,
                    navigator: body.navigator.name,
                    agent: body.navigator.agent,
                    role: dataUser.role
                }, 'SESSION ON').then((resolve) => {
                    if (resolve.status === 'ok') {
                        return res.json({
                            status: 'ok',
                            response: {
                                data: dataUser,
                                token: myToken
                            }
                        })
                    }
                }).catch((reject) => {
                    return res.json({
                        status: 'ok',
                        response: {
                            data: dataUser,
                            token: myToken
                        }
                    })
                })


            } else {

                UsersBasics.find({})
                    .exec((err, usersBasics) => {
                        if (err) {
                            return res.json({
                                status: 'error',
                                err
                            })
                        }

                        if (usersBasics.find((user) => user.login === body.data.login && user.password === body.data.password)) {

                            const dataUserBasic = usersBasics.filter((user) => user.login === body.data.login && user.password === body.data.password)[0];

                            if (dataUserBasic.status === 'on') {
                                const myToken = jwt.sign({ payload: { user: dataUserBasic, info: { navigator: body.navigator, IP: body.IP } } }, 'vt$aenEntr!', { expiresIn: '48h' })

                                newLog.createdLog({
                                    login: dataUserBasic.login,
                                    name: dataUserBasic.name,
                                    _id: dataUserBasic._id,
                                    ip: body.IP,
                                    navigator: body.navigator.name,
                                    agent: body.navigator.agent,
                                    role: dataUserBasic.role
                                }, 'SESSION ON').then((resolve) => {
                                    if (resolve.status === 'ok') {
                                        return res.json({
                                            status: 'ok',
                                            response: {
                                                data: dataUserBasic,
                                                token: myToken
                                            }
                                        })
                                    }
                                }).catch((reject) => {
                                    return res.json({
                                        status: 'ok',
                                        response: {
                                            data: dataUserBasic,
                                            token: myToken
                                        }
                                    })
                                })
                            } else {
                                return res.json({
                                    status: 'error',
                                    response: 'User Not Permission'
                                })
                            }

                        } else {
                            return res.json({
                                status: 'error',
                                response: 'Invalid credentials please check'
                            })
                        }

                    })

            }
        })

})





router.post('/vtentrena/user/logout', [verifyToken], (req, res) => {

    const body = req.body;
    const newLog = new usersLog();
    if (!body._id) {
        return res.json({
            status: 'error',
            err: 'Undefined _id, please check',
            body
        })
    }

    newLog.createdLog({
        login: body.login,
        name: body.name,
        _id: body._id,
        ip: req.info.IP,
        navigator: req.info.navigator.name,
        agent: req.info.navigator.agent,
        role: body.role
    }, 'SESSION OFF').then((resolve) => {
        if (resolve.status === 'ok') {
            return res.json({
                status: 'ok',
            })
        }
    }).catch((reject) => {
        return res.json({
            status: 'ok'
        })
    })



})


router.post('/vtentrena/user/exist', (req, res) => {
    const body = req.body;
    console.log(body, 'bod')
    if (!body.login) {
        return res.json({
            status: 'error',
            error: 'Undefined Login, please check'
        })
    }

    UsersBasics.find({ login: body.login })
        .exec((err, userBasic) => {
            if (err) {
                return res.json({
                    status: 'error',
                    error: err
                })
            }

            if (userBasic.length > 0) {
                return res.json({
                    status: 'ok',
                    response: {
                        exist: true
                    }
                })
            } else {
                return res.json({
                    status: 'ok',
                    response: {
                        exist: false
                    }
                })
            }
        })
})


module.exports = router;