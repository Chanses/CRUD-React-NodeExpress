const db = require('../db');
class PersonController {
    async createPerson(req,res)
    {
        const {fullname, nickname, age, gender} = req.body;
        const newPerson = await db.query(`INSERT INTO person (fullname, nickname, age, gender) values ($1, $2, $3, $4) RETURNING *`,
         [fullname,nickname,age, gender ]);
       
        res.json(newPerson.rows[0]);

    }
    async getPerson(req,res)
    {
        const id = req.params.id;
        const person = await db.query(`SELECT * FROM person where id = $1` ,[id]);
       
        res.json(person.rows[0]);
        
    }
    async getPersonsAll(req,res)
    {
        const person = await db.query(`SELECT * FROM person order by id asc`);
       
        res.json(person.rows);
    }
    async updatePerson(req,res)
    {
        const {id, fullname, nickname, age, gender} = req.body;
        const person = await db.query(`UPDATE person set fullname = $1, nickname = $2, age = $3, gender = $4 where id = $5 RETURNING *`,
        [fullname,nickname,age,gender,id]);

        res.json(person.rows[0]);
    }
    async deletePerson(req,res)
    { const id = req.params.id;
        const person = await db.query(`DELETE FROM person where id = $1` ,[id]);
       
        res.json(person.rows[0]);
        
    }
}
module.exports = new PersonController();