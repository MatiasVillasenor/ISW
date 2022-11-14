const reservaEspacio = require('../models/reservaEspacio');

const createreservaEspacio = (req,res)=>{
    const {espacioReservado,FechaInicio,FechaTermino,observacion,estadoEspacio,estadoReserva} =req.body
    const newreservaEspacio = new reservaEspacio({
        espacioReservado,
        FechaInicio,
        FechaTermino,
        observacion,
        estadoEspacio,
        estadoReserva
    })
    newreservaEspacio.save((error,reservaEspacio)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido registrar la reserva"});
        }
        return res.status(201).send(reservaEspacio);
    })
}

module.exports ={
    createreservaEspacio   
}
