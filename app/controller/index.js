const Header = require('../model/header');
const Contact = require('../model/contact');

async function header(req, res){
    try {
        const header = await Header.findOne();
        res.json(header);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Post Contact Form Data
async function contact(req, res){
    try {
        const contact = await Contact.create(req.body);
        res.json({ success: true, contact });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    header,
    contact
}