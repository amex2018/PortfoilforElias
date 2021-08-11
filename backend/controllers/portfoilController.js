const Portfoil = require('../model/portfoil');

exports.CreatePortfoil = async (req, res, next) => {
   req.body.user = req.user.id;

    const portfoil = await Portfoil.create(req.body)

    res.status(201).json({
        success: true,
        portfoil
    })
}

// get all portfoil
 exports.GetPortfoil = async (req, res, next) => {
     const portfoil = await Portfoil.find();

     res.status(200).json({
         success: true,
         count: portfoil.length,
         portfoil
     })
}

// update portfoil its by id => /api/v1/admin/update/:id
exports.UpdatePortfoil = async (req, res, next) => {

    let portfoil = await Portfoil.findById(req.params.id)


    if(!portfoil){
       return res.status(404).json({
            success: true,
            message: "not found"
        })
    }

    // update 
    portfoil = await Portfoil.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        portfoil
    })
}

// delete
exports.DeletePortfoil = async (req, res, next) =>{
    let portfoil = await Portfoil.findById(req.params.id)

    
    if(!portfoil){
        return res.status(404).json({
             success: true,
             message: "not found"
         })
     }

     portfoil  = await Portfoil.findByIdAndDelete(req.params.id);
     res.status(200).json({
         success: true,
         message: "Deleting is successfuly..."
     })

}