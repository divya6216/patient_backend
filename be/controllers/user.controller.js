const Record = require('../models/record.model');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    try {
        if (await User.isEmailTaken(req.body.email)) {
            res.status(400).json({message:'Email Already taken'})
            return;
        }
       const user =  await User.create(req.body);
        res.status(200).json({ id: user?._id });
        return;
    } catch (error) {
        res.status(500).json(error)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (await bcrypt.compare(req.body.password, user.password)) {
                res.status(200).json({ id: user?._id });
                return;
            }
            res.status(400).json({message: 'Incorrect email or password'});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const createRecord = async (req, res) => {
    try {
        await Record.create(req.body);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteRecord = async (req, res) => {
    try {
        await Record.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json(error)
    }
}

const editRecord = async (req, res) => {
    try {
        await Record.updateOne({_id: req.body.id}, {$set: {...req.body}});
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json(error)
    }
}



const getRecords = async (req, res) => {
    try {
      const records =   await Record.find({});
      res.status(200).json(records)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getRecordById = async (req, res) => {
    try {
      const record =   await Record.findById(req.params.id)
      res.status(200).json(record)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports =  {
    register,
    login,
    createRecord,
    getRecordById,
    getRecords,
    editRecord,
    deleteRecord
}