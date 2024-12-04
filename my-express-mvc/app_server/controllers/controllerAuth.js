const passport = require('passport');
const User = require("../models/user");


const login = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ "message": "All fields required" });
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(404).json(err);
        }
        if (user) {
            const token = user.generateJwt();
            res.status(200).json({token});
        } else {
            res.status(401).json(info);
        }
    })(req, res, next);
};

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({"message": "All fields required"});
    }
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    
    user.save()
        .then((result) => {
            const token = user.generateJwt();
            res.status(200).json({token});
        })
        .catch((err) => {
            res.status(400).json({
                    ... err,
                    "message": "User with the same username already registered"
                });
        });
};
module.exports = { register, login };