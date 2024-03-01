const UserProfile = require('../model/user-model')
exports.createUser = async (req, res) => {
    try {
        if (req.body) {
            const { name,email,phone,age,qualification} = req.body;

            let userProfile = await UserProfile.findOne({
                $or: [
                    { email: email }
                ]
            });
            if (userProfile) return res.status(400).json({ "message": "User already exist"})
            let newUser = {
                         name : name,
                         email : email,
                         phone : phone,
                         age : age,
                         qualification :qualification
                     };
           

            const newUserProfile = new UserProfile(newUser);

            const savedUser = await newUserProfile.save();
return res.status(201).json({"status":"success","result":savedUser})
           
        } else {
            return res.status(400).json({ "message": "Invalid Request"});
        }
    } catch (error) {
        return res.status(500).json({ "message": "Internal Server Error"});
    }
};