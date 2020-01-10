import db from '../models/index';

const teacher = {
    async get(req, res) {
        const users = await db.teacher.findAll().then();
        return res.send(users);
    },
    async update(req, res) {
        const {firstname, lastname} = req.body;
        try {
            const user = await db.teacher.update({firstname, lastname}, {
                where: {
                id: req.params.id
                }
            });
            user[0] ? res.send('uptated') : res.sendStatus(404);
        } catch(error) {
            res.status(400).send(error.message)
        }
        return res
    }
}

export default teacher;