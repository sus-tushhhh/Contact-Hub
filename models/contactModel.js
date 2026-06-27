const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: [true, "Please add the contact name."],
        },
        phone: {
            type: String,
            required: [true, "Please add the phone number."],
        },
        email: {
            type: String,
            required: [false],
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Contact", contactSchema);
