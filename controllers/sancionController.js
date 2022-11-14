const sancion = require('../models/sancion');

const createsancion = (req,res)=>{
    const {tipo,tiempoSancion,montoSancion} =req.body
    const newSancion = new sancion({
        tipo,
        tiempoSancion,
        montoSancion
    })
    newSancion.save((error,sancion)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido asignar la sanción"});
        }
        return res.status(201).send(sancion);
    })
}

module.exports ={
    createsancion   
}
