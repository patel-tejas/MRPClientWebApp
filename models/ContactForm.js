import mongoose, { models, model } from 'mongoose';
const { Schema } = mongoose;

const ContactForm = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export default models.contact || model('contact', ContactForm)