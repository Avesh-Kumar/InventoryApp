const { json } = require("express");
const Item = require("../models/itemServices");
//const { body, validationResult } = require("express-validator");
exports.insertItem = async (req, res) => {
    console.log(req.body.Category);
    try {
        const data = req.body;
        const item = await Item.create({ Name: data.Name, Description: data.Description, Category: data.Category, Price: data.Price, Availablity: data.Availablity, Image: data.Image });
        res.status(200).send(`item save successfully : ${item}`);

    } catch (e) {
        res.status(409).send(e.message);

    }
};
exports.readItemById = async (req, res) => {
    try {
        let reqItem = await Item.where({ "_id": req.params.id });
        res.status(200).send(reqItem);
    } catch (e) {
        res.status(409).send(e.message);
    }
};
exports.deleteItem = async (req, res) => {
    try {
        let deletedItem = await Item.deleteOne().where("_id").equals(req.params.id);
        let sts = JSON.stringify(deletedItem);
        res.status(409).send(`item deleted successfully : ${sts}`);
    } catch (e) {
        res.status(409).send(`item is not present in database ${e.message}`)
    }
};
exports.readItem = async (req, res) => {
    try {
        const item = await Item.find();
        res.status(200).send(item);

    } catch (e) {
        res.status(409).send(e.message);

    }
};

exports.updateItem = async (req, res) => {
    try {
        let updatedItem = await Item.updateOne({ "_id": req.params.id }, { $set: { "Price": req.body.Price, "Availablity": req.body.Availablity } });
        let sts = JSON.stringify(updatedItem);
        res.status(200).send(`item updated successfully :${sts}`);
    } catch (e) {
        res.status(409).send(`item is not present in database :${e.message}`)
    }
};
exports.readAllToys = async (req, res) => {
    try {
        // // Virtual for author's URL
        // CategorySchema.virtual("url").get(function (element) {
        //     // We don't use an arrow function as we'll need the this object
        //     console.log(`ID = ${element}`);
        //     return `/inventory/category/${this._id}`;
        // });
        let data = await Item.where({ "Category": "6375b7297c04760d2a922b11" });
        res.send(data);
        res.render("itemList", { data });
    } catch (e) {
        res.render("error")
    }
}
exports.readAllFruits = async (req, res) => {
    try {
        let data = await Item.where({ "Category": "6375b7297c04760d2a922b0e" });
        res.send(data);
        res.render("itemList", { data });
    } catch (e) {
        res.render("error")
    }
}
exports.readAllMusicalInstance = async (req, res) => {
    try {
        let data = await Item.where({ "Category": "6375b7297c04760d2a922b15" });
        res.send(data);
        res.render("itemList", { data });
    } catch (e) {
        res.render("error")
    }
}
exports.readAllAutoParts = async (req, res) => {
    try {
        let data = await Item.where({ "Category": "6375b7297c04760d2a922b13" });
        res.send(data);
        res.render("itemList", { data });
    } catch (e) {
        res.render("error")
    }
}
exports.readAllStationary = async (req, res) => {
    try {
        let data = await Item.where({ "Category": "6375b7287c04760d2a922b0a" });
        res.send(data);
        res.render("itemList", { data });
    } catch (e) {
        res.render("error")
    }
}