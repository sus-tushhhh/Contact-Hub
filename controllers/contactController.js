const asyncHandler = require("express-async-handler");
/** @type {import('mongoose').Model<any>} */
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc Get contact by id
//@route GET /api/contacts
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        throw new Error("Contact not found.");
    }
    res.status(200).json(contact);
});

//@desc Create contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    const { name, phone, email } = req.body;
    if (!name || !phone) {
        res.status(400);
        throw new Error("Name or Phone cannot be empty.");
    }

    const contact = await Contact.create({
        user_id: req.user.id,
        name,
        phone,
        email,
    });
    res.status(201).json(contact);
});

//@desc Update contact by id
//@route PUT /api/contacts
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        throw new Error("Contact not found.");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error(
            "User don't have permission to update other user contacts.",
        );
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
    );
    res.status(200).json(updatedContact);
});

//@desc Delete contact by id
//@route DELETE /api/contacts
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        throw new Error("Contact not found.");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error(
            "User don't have permission to delete other user contacts.",
        );
    }

    await Contact.deleteOne({ _id: contact.id });
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
};
