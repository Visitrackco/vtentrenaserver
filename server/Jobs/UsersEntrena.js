const UsersBasicShecma = require('../Models/EntrenaVTModels/UsersBasicsEntrena');
const moment = require('moment-timezone');
const job = require('node-cron');
const axios = require('axios');
const myJob = job.schedule('* * * * *', () => {
    UsersBasicShecma.find({ status: 'on' })
        .exec((error, documents) => {
            if (error) {
                reject({
                    status: 'error',
                    error
                })
            }

            const date = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm');

            if (documents.length > 0) {
                documents.forEach((user) => {
                    if (user.configuration.dateLimit) {
                        const dateLimit = moment(user.configuration.dateLimit).format('YYYY-MM-DD HH:mm');

                        if (date >= dateLimit) {
                            console.log('Ejeutando')
                            const _id = user._id;
                            UsersBasicShecma.findByIdAndUpdate(_id, { status: 'off' }, { new: true }).exec((err, userBasic) => {
                                if (err) {
                                    console.log(err.message, 'errores');
                                }
                            })
                        }
                    }

                })
            }
        })
})

// inverpack

async function fnchilds(guid) {
    try {
        const resp = await axios.post('https://api.visitrack.com/api/Surveys/ActivityChilds', {
            AccessToken: '68C5A337B89F6B7A603861D440EB20D6',

            ParentGUID: guid,
        });

        return resp;
    } catch (error) {
        return [];
    }
}

async function fnForm(guid) {
    try {
        const resp = await axios.post('https://api.visitrack.com/api/Surveys/Activities', {
            AccessToken: '68C5A337B89F6B7A603861D440EB20D6',
            From: moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm'),
            To: moment().format('YYYY-MM-DD HH:mm'),
            FormGUID: guid,
        });

        if (resp) {



            for (const item of resp.data) {

                if (item.CompanyStatusName == 'SOLICITUD ENVIADA AL TECNICO') {
                    const childs = await fnchilds(item.GUID)

                    if (childs.data.length > 0) {
                        console.log('eliminado ', item.GUID)
                        const elimi = await axios.post('https://api.visitrack.com/api/Surveys/MovilDelete', {
                            AccessToken: '68C5A337B89F6B7A603861D440EB20D6',
                            ActivityGUID: item.GUID
                        });

                    }
                } else if (item.CompanyStatusName == 'MANTENIMIENTO FINALIZADO') {

                    const elimi = await axios.post('https://api.visitrack.com/api/Surveys/MovilDelete', {
                        AccessToken: '68C5A337B89F6B7A603861D440EB20D6',
                        ActivityGUID: item.GUID
                    });

                }

            }
        }

        return resp;
    } catch (error) {
        return [];
    }
}



const eliminado = job.schedule(' */15 * * * *', async() => {


    try {

        const solicitud1 = await fnForm('BAB8F522-721F-4E63-BF9F-C99F2CB78AC6')
        const solicitud2 = await fnForm('02CEE670-587E-49CA-A2CC-C10B1D519F65')
        const solicitud3 = await fnForm('76E93F88-7612-466E-BBD7-3C95A7679D6D')

    } catch (err) {
        console.log(err)
    }

})

// Nettsegur


async function fnInfo(guid, tkn) {
    return new Promise(async(resolve, reject) => {
        try {
            const resp = await axios.get('https://api.visitrack.com/api/Surveys/Activity?AccessToken=' + tkn + '&GUID=' + guid + '&ListValues=false');


            resolve(resp.data)
        } catch (error) {
            resolve([]);
        }
    })
}



async function sendEmail(guid, msg, email) {
    return new Promise(async(resolve, reject) => {
        try {


            const body = `<div style=" width: 600px; margin: 20px auto; padding: 20px; border-radius: 20px; background-color: #E2F0FD; font-family: sans-serif; height: 600px;">
          <h3 style="text-align: center; font-size: 32px; margin-bottom: 100px;">SERVICIO TÉCNICO</h3>

          <p style="text-align: center; line-height: 2; font-size: 16px;">Recibe un saludo de Nettsegur, <br> el servicio se encuentra en estado ${msg}, para descargar el formato y tener más detalle del servicio, por favor dar click en el siguiente botón</p>


          <div style=" margin: 100px auto; background-color: #5890DE; padding: 15px 20px; color: #fff; font-weight: bold; font-size: 16px; border-radius: 10px; text-align: center; width: 200px;"><a style="color: #fff;" href=" https://api.visitrack.com/api/PDF?GUID=${guid}" target="_blank">Descargar Documento</a></div>

          </div>`;


            const resp = await axios.post('https://api.visitrack.com/api/SendEmail', {
                AccessToken: '538670140830D5E9B8D5C473F050E9E3',
                Email: email,
                Subject: 'SERVICIO TÉCNICO - ' + moment().format('YYYY-MM-DD HH:mm:ss'),
                Body: body,
            });

            if (resp.data) {
                resolve(true)
            }

        } catch (error) {
            resolve(false)
        }

    })
}


async function updateActivity(data) {
    return new Promise(async(resolve, reject) => {
        try {




            const resp = await axios.post('https://api.visitrack.com/api/Surveys/UpdateFields', {

                AccessToken: data.tkn,
                UserGUID: data.user,
                Duration: '60',
                SearchBy: 'ActivityID',
                SearchValue: data.ID,
                Values: JSON.stringify(data.values)
            });

            if (resp.data) {
                resolve(true)
            }

        } catch (error) {
            resolve(false)
        }

    })
}




async function changeActivity(data) {
    return new Promise(async(resolve, reject) => {
        try {




            const resp = await axios.post('https://api.visitrack.com/api/Surveys/SetDatetime', {

                AccessToken: data.tkn,
                UserGUID: data.user,
                CompanyStatusGUID: data.status,
                ActivityGUID: data.guid,
                DispachDateTime: data.date
            });

            if (resp.data) {
                resolve(true)
            }

        } catch (error) {
            resolve(false)
        }

    })
}


async function getLocation(data) {
    return new Promise(async(resolve, reject) => {
        try {




            const resp = await axios.post('https://api.visitrack.com/api/Locations/ByTypeID', {
                AccessToken: data.tkn,
                LocationTypeID: data.guid,
                WorkzoneCode: data.workzone

            });

            if (resp.data) {
                resolve(resp.data)
            }

        } catch (error) {
            resolve(false)
        }

    })
}



async function fnNettsegur(guid) {
    try {
        const resp = await axios.post('https://api.visitrack.com/api/Surveys/Activities', {
            AccessToken: '538670140830D5E9B8D5C473F050E9E3',
            From: moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm'),
            To: moment().format('YYYY-MM-DD HH:mm'),
            FormGUID: guid,
        });

        const arr = [];

        if (resp) {

            //   console.log(resp.data)

            const nett = await getLocation({ tkn: '538670140830D5E9B8D5C473F050E9E3', guid: 'A3C83A43-E680-4936-8EA0-198A42B62598', workzone: 'NETTSEGUR' })

            const otros = await getLocation({ tkn: '538670140830D5E9B8D5C473F050E9E3', guid: 'A3C83A43-E680-4936-8EA0-198A42B62598', workzone: 'OTROS CLIENTES' })
            console.log(nett.length, otros.length)

            if (nett.length == 0 && otros.length == 0) {
                return;
            }


            for (const item of resp.data) {


                const it = await fnInfo(item.GUID, '538670140830D5E9B8D5C473F050E9E3')

                console.log(it)



                const estado = it.Values.filter((val) => val.apiId == 'ESTADOSERVICIO')

                console.log(estado)

                const existNett = nett.filter((loc) => loc.Name == it.LocationName);
                const existOtros = otros.filter((loc) => loc.Name == it.LocationName);

                let correo = '';

                if (existNett.length > 0) {
                    correo = 'centrasatelite@hotmail.com';
                }

                if (existOtros.length > 0) {
                    correo = 'soportes@nettsegur.com'
                }



                if (estado.length > 0) {

                    const correo_abierto = it.Values.filter((val) => val.apiId == 'CORREOABIERTO')
                    const correo_final = it.Values.filter((val) => val.apiId == 'CORREOFINAL')

                    console.log(correo_abierto, correo_final)

                    if (estado[0].Value == 'ABIERTO') {

                        if (correo_abierto.length == 0) {

                            console.log('entro al correo');

                            await sendEmail(it.GUID, 'abierto', correo)



                            await updateActivity({
                                user: it.UpdatedByGUID,
                                tkn: '538670140830D5E9B8D5C473F050E9E3',
                                guid: it.ID,
                                values: [{
                                    apiId: 'CORREOABIERTO',
                                    Value: 'ENVIADO'
                                }]
                            })

                            await changeActivity({
                                user: it.UpdatedByGUID,
                                tkn: '538670140830D5E9B8D5C473F050E9E3',
                                guid: it.GUID,
                                status: 'ACA3B658-AC7E-4249-BE49-ADF2FF13979F',
                                date: moment().add(1, 'minutes').format('YYYY-MM-DD HH:mm')
                            })





                        } else {
                            if (correo_abierto[0].Value != 'ENVIADO') {
                                console.log('entro al correo');

                                await sendEmail(it.GUID, 'abierto', correo)

                                await updateActivity({
                                    user: it.UpdatedByGUID,
                                    tkn: '538670140830D5E9B8D5C473F050E9E3',
                                    ID: it.ID,
                                    values: [{
                                        apiId: 'CORREOABIERTO',
                                        Value: 'ENVIADO'
                                    }]
                                })

                                await changeActivity({
                                    user: it.UpdatedByGUID,
                                    tkn: '538670140830D5E9B8D5C473F050E9E3',
                                    guid: it.GUID,
                                    status: 'ACA3B658-AC7E-4249-BE49-ADF2FF13979F',
                                    date: moment().add(1, 'minutes').format('YYYY-MM-DD HH:mm')
                                })

                            }
                        }

                    } else if (estado[0].Value == 'FINALIZADO') {

                        if (correo_final.length == 0) {

                            await sendEmail(it.GUID, 'finalizado', correo)

                            await updateActivity({
                                user: it.UpdatedByGUID,
                                tkn: '538670140830D5E9B8D5C473F050E9E3',
                                ID: it.ID,
                                values: [{
                                    apiId: 'CORREOFINAL',
                                    Value: 'ENVIADO'
                                }]
                            })


                            await changeActivity({
                                user: it.UpdatedByGUID,
                                tkn: '538670140830D5E9B8D5C473F050E9E3',
                                guid: it.GUID,
                                status: '4CA24F23-75C5-454E-B789-3D5D424C88F9',
                                date: moment().add(1, 'minutes').format('YYYY-MM-DD HH:mm')
                            })
                            const elimi = await axios.post('https://api.visitrack.com/api/Surveys/MovilDelete', {
                                AccessToken: '538670140830D5E9B8D5C473F050E9E3',
                                ActivityGUID: it.GUID
                            });

                            if (it.ParentGUID) {
                                await changeActivity({
                                    user: 'E80B6AA5-9626-4E11-8B51-895EB00AB621',
                                    tkn: '538670140830D5E9B8D5C473F050E9E3',
                                    guid: it.ParentGUID,
                                    status: '4CA24F23-75C5-454E-B789-3D5D424C88F9',
                                    date: moment().add(1, 'minutes').format('YYYY-MM-DD HH:mm')
                                })
                            }





                        } else {
                            if (correo_final[0].Value != 'ENVIADO') {
                                console.log('entro al correo');

                                await sendEmail(it.GUID, 'finalizado', correo)

                                await updateActivity({
                                    user: it.UpdatedByGUID,
                                    tkn: '538670140830D5E9B8D5C473F050E9E3',
                                    ID: it.ID,
                                    values: [{
                                        apiId: 'CORREOFINAL',
                                        Value: 'ENVIADO'
                                    }]
                                })

                                await changeActivity({
                                    user: it.UpdatedByGUID,
                                    tkn: '538670140830D5E9B8D5C473F050E9E3',
                                    guid: it.GUID,
                                    status: '4CA24F23-75C5-454E-B789-3D5D424C88F9',
                                    date: moment().add(1, 'minutes').format('YYYY-MM-DD HH:mm')
                                })



                                const elimi = await axios.post('https://api.visitrack.com/api/Surveys/MovilDelete', {
                                    AccessToken: '538670140830D5E9B8D5C473F050E9E3',
                                    ActivityGUID: it.GUID
                                });

                                if (it.ParentGUID) {
                                    await changeActivity({
                                        user: 'E80B6AA5-9626-4E11-8B51-895EB00AB621',
                                        tkn: '538670140830D5E9B8D5C473F050E9E3',
                                        guid: it.ParentGUID,
                                        status: '4CA24F23-75C5-454E-B789-3D5D424C88F9',
                                        date: moment().add(1, 'minutes').format('YYYY-MM-DD HH:mm')
                                    })
                                }

                            } else {
                                const elimi = await axios.post('https://api.visitrack.com/api/Surveys/MovilDelete', {
                                    AccessToken: '538670140830D5E9B8D5C473F050E9E3',
                                    ActivityGUID: it.GUID
                                });
                            }
                        }

                    } else {
                        console.log('No hay opción')
                    }

                } else {
                    console.log('No hay nada')
                }

                arr.push(it);



            }






        }



        return arr;
    } catch (error) {
        return [];
    }
}



const envio = job.schedule('*/10 * * * *', async() => {


    try {

        const solicitud1 = await fnNettsegur('1gp0JCZkra')
            //    console.log(solicitud1.length, 'todo')
            // const solicitud2 = await fnForm('02CEE670-587E-49CA-A2CC-C10B1D519F65')
            // const solicitud3 = await fnForm('76E93F88-7612-466E-BBD7-3C95A7679D6D')

    } catch (err) {
        console.log(err)
    }

})

// OSZFORD
/*
async function fnOszford(guid) {
    try {
        const hoy = moment().format('YYYY-MM-DD')
        const resp = await axios.post('https://api.visitrack.com/api/Surveys/Activities', {
            AccessToken: '31CA0D6B-1A7F-4778-9F5D-07145AFF14FE',
            From: moment(hoy + ' 00:00').subtract(1, 'days').format('YYYY-MM-DD HH:mm'),
            To: moment(hoy + ' 23:59').format('YYYY-MM-DD HH:mm'),
            FormGUID: guid,
        });

        const arr = [];

        if (resp) {




            for (const item of resp.data) {


                const it = await fnInfo(item.GUID, '31CA0D6B-1A7F-4778-9F5D-07145AFF14FE')
                const from = moment(hoy + ' 00:00').subtract(1, 'days').format('YYYY-MM-DD')
                const to = moment(hoy + ' 23:59').format('YYYY-MM-DD')
                const fecha = moment(it.DispatchDateTime).format('YYYY-MM-DD')

                if (fecha >= from && fecha <= to) {
                    console.log(it)


                    const leido = it.Values.filter((val) => val.apiId == 'LEIDO')
                    const gestion = it.Values.filter((val) => val.apiId == 'GESTION')
                    const dia = it.Values.filter((val) => val.apiId == 'FECHA')
                    const hora = it.Values.filter((val) => val.apiId == 'HORA')

                    console.log(leido)

                    if (gestion.length > 0 && dia.length > 0 && hora.length > 0) {
                        if (leido.length > 0) {

                            if (leido[0].Value != 'SI') {

                                moment.locale('es')

                                await sendEmailOszford(it.GUID, 'Recuerda que se programò la gestiòn de <strong>' + gestion[0].Value + '</strong> del cliente <strong>' + it.LocationName + '</strong> para el <strong>' + moment(dia[0].Value).format('LL') + '</strong>');
                                arr.push(it);
                            }

                        } else {

                            moment.locale('es')

                            await sendEmailOszford(it.GUID, 'Recuerda que se programò la gestiòn de <strong>' + gestion[0].Value + '</strong> del cliente <strong>' + it.LocationName + '</strong> para el <strong>' + moment(dia[0].Value).format('LL') + '</strong>');


                            arr.push(it);

                        }




                    }


                }






            }






        }



        return arr;
    } catch (error) {
        return [];
    }
}

*/

//H3ZjmGoHEB 



async function sendEmailOszford(guid, msg) {
    return new Promise(async(resolve, reject) => {
        try {


            const body = `<div style=" width: 600px; margin: 20px auto; padding: 20px; border-radius: 20px; background-color: #EAEEF8; font-family: sans-serif; height: 600px;">
          <h3 style="text-align: center; font-size: 32px; margin-bottom: 100px;">RECORDATORIO</h3>

          <div style="text-align: center;">
          
          <p style="text-align: center; line-height: 2; font-size: 16px;"> ${msg}</p>
          <img  src='https://s3.amazonaws.com/logocompanies/6C7539A5-8A23-4FD1-9840-9A477EF06090.jpeg' width='200px'> <br>
          
          </div>

       


          <div style=" margin: 100px auto; background-color: #F5BC41; padding: 15px 20px; color: #fff; font-weight: bold; font-size: 16px; border-radius: 10px; text-align: center; width: 200px;"><a style="color: #fff;" href="https://vtentrena.com/#/interfaces/oszford-alerta?GUID=${guid}" target="_blank">Confirmar</a></div>

          </div>`;

            //auxiliarcomercial@oszford.com

            const resp = await axios.post('https://api.visitrack.com/api/SendEmail', {
                AccessToken: '31CA0D6B-1A7F-4778-9F5D-07145AFF14FE',

                Email: 'santiago.visitrack@gmail.com',
                Subject: 'RECORDATORIO - ' + moment().format('YYYY-MM-DD HH:mm'),
                Body: body,
            });

            if (resp.data) {
                resolve(true)
            }

        } catch (error) {
            resolve(false)
        }

    })
}


const oszford = job.schedule('* * * * *', async() => {


    try {

        //   const solicitud1 = await fnOszford('H3ZjmGoHEB')
        //  console.log(solicitud1.length, 'todo')
        // const solicitud2 = await fnForm('02CEE670-587E-49CA-A2CC-C10B1D519F65')
        // const solicitud3 = await fnForm('76E93F88-7612-466E-BBD7-3C95A7679D6D')

    } catch (err) {
        console.log(err)
    }

})