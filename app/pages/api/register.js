/*const bcrypt = require('bcrypt')

export default function handler(req, res) {
    if (req.method === 'POST') {
        const obj = JSON.parse(JSON.stringify(req.body));
        try{
            if (await obj.password==obj.confirmPassword){
                const salt= await bcrypt.genSalt()
                const hashedPassword = await bcrypt.hash(obj.password,salt)
                const user= {name:obj.name , password: hashedPassword}
                dbo.collection("customers").insertOne(user)
                res.redirect('/')
            } else {
                res.send('Passwords do not match')
            }
        } catch (err){
            console.log(err)
            res.status(500).send()
        }
    }
}*/