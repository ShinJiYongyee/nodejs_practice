const asyncHandler = require("express-async-handler");

// GET
const getAllContacts = asyncHandler(async (req, res) => {
    try {
        res.status(200).send("Contacts Page");
    } catch(error) {
        res.send(error.message);
    }     
});

// POST
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return res.status(400).send("필수 값이 입력되지 않았습니다");
    }
    res.status(201).send("Create Contact");
})

// GET :id
const getContact = asyncHandler(async(req, res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// UPDATE :id
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// DELETE :id
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

module.exports = {
    getAllContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact
};
