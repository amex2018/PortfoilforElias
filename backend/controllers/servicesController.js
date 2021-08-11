const Services = require('../model/service');

exports.CreateServices = async (req, res, next) => {
   req.body.user = req.user.id;

    const services = await Services.create(req.body)

    res.status(201).json({
        success: true,
        services
    })
}

// get all services
 exports.GetServices = async (req, res, next) => {
     const services = await Services.find();

     res.status(200).json({
         success: true,
         count: services.length,
         services
     })
}

// update services its by id => /api/v1/admin/update/:id
exports.UpdateServices = async (req, res, next) => {

    let services = await Services.findById(req.params.id)


    if(!services){
       return res.status(404).json({
            success: true,
            message: "not found"
        })
    }

    // update 
    services = await Services.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        services
    })
}

// delete
exports.DeleteServices = async (req, res, next) =>{
    let services = await Services.findById(req.params.id)

    
    if(!services){
        return res.status(404).json({
             success: true,
             message: "not found"
         })
     }

     services  = await Services.findByIdAndDelete(req.params.id);
     res.status(200).json({
         success: true,
         message: "Deleting is successfuly..."
     })

}