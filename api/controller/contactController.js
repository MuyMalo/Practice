//Import contact model
Contact = require('../model/contactModel');

//Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            //.json parses requests with JSON
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retieved successfully",
            data: contacts
        });
    });
};

//Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    //.body from body-parser
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    //save the contact and check for errors
    contact.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

//Handle view contact info
exports.view = function (req, res) {
    //.params contains route parameters in path portion of URL
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
        //.send is like .json but does less
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

//Handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
            if (err)
                res.send(err);
    contact.name = req.body.name ? req.body.name : contact.name;
            contact.gender = req.body.gender;
            contact.email = req.body.email;
            contact.phone = req.body.phone;
    // save the contact and check for errors
            contact.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Contact Info updated',
                    data: contact
                });
            });
        });
};

// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
    res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};