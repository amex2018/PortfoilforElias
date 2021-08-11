const Skill = require('../model/skill');

exports.SkillCreate = async (req, res, next) =>{

    req.body.user = req.user.id;

    const skill = await Skill.create(req.body)

    res.status(201).json({
        success: true,
        skill
    })

}