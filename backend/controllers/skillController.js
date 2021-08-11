const Skill = require('../model/skill');

// create new skill api
exports.SkillCreate = async (req, res, next) =>{

    req.body.user = req.user.id;

    const skill = await Skill.create(req.body)

    res.status(201).json({
        success: true,
        skill
    })

}

// get all skill api
exports.GetSkill = async (req, res, next) =>{

    const skills = await Skill.find();
    res.status(200).json({
        success: true,
        count: skills.length,
        skills
    })
}

// update skill api  its by id
exports.UpdateSkill = async (req, res, next) => {

    let skill = await Skill.findById(req.params.id);

    // checked is valid id
    if(!skill){
        return res.status(404).json({
            success: false,
            message: "Item Id is Invalid "
        })
    }
 

    // update using this query findByIdAndUpdate()
    skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        skill
    })
}

// delete skill its by id
exports.DeleteSkill = async (req, res, next) =>{
    let skill = await Skill.findById(req.params.id);
    if(!skill){
        return res.status(404).json({
            success: true,
            message: "Skill Not Found"
        })
    }
   
   skill = await Skill.findByIdAndDelete(req.params.id)

   res.status(200).json({
       success: true,

       message: "Deleted Successfully..."
   })
}