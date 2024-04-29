const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { getConnection, runQueryValues, loginSyntax } = require('../model/dbPool')
const secret = "tech4dev"

const login = async (req, res) => {
    const credentials = {
        username: req.body.username,
        userpassword: req.body.userpassword
    }

    const connection = await getConnection();
    try {

        const result = await runQueryValues(connection, loginSyntax, [credentials.username])
            const vFy =  await bcrypt.compare(credentials.userpassword,result[0].userpassword)
            if(vFy){
               const token = jwt.sign(credentials, secret)
            res.status(200).json({ message: result, token })
            console.log(token) 
            }else{
                // res.status(403).json({ message: 'invalid Login Credentials' })
                    res.status(403).json({ message: 'Wrong Password' })
            }
        }
    catch (err) {
        console.log(err)
        res.status(403).json({message: "Username does not exist. Do you want to create an account?"})
    }


}
module.exports = { login }