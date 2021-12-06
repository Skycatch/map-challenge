const {check, body } = require("express-validator"); // Requerimos express-validator para validar el login y verificar que en la creación de cuentas no haya duplicados.



module.exports = [
    check('name').not().isEmpty().withMessage("Name can not be empty"),
    check('latitude').isFloat({ min:-90, max: 90}).withMessage("Latitude must be between -90 and 90"),
    check('longitude').isFloat({ min:-180, max: 180}).withMessage("Longitude must be between -180 and 180"),
    check('openTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("Open Time must be a valid hour"),
    check('close_time').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("Close Time must be a valid hour"),
];