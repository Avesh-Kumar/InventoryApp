
const { json } = require("express");
const Category = require("../models/categoryServices");
exports.insertCategory = async (req, res) => {
    console.log(req.body.name);
    try {
        const category = await Category.create({ Name: req.body.name, Description: req.body.description });
        res.status(200).send(`category save successfully : ${category}`);
        res.render("categoryForm", { category })

    } catch (e) {
        res.status(409).send(e.message);

    }
}
exports.readCategoryById = async (req, res) => {
    try {
        let category = await Category.where('_id').equals(req.params.id);
        res.status(200).send(`associate data with given id : ${category}`)
    } catch (e) {
        res.status(409).send(`id not found ${e.message}`);
    }
}
exports.updateItem = async (req, res) => {

}

exports.readCategory = async (req, res) => {
    try {
        const category = await Category.find();
        //res.status(200).send(category);
        res.render("categoryGet", { category });

    } catch (e) {
        res.status(409).send(e.message);

    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.deleteOne().where('_id').equals(req.params.id)
        const data = JSON.stringify(category);
        res.status(200).send(`category deleted successfully ${data}`);
    } catch (e) {
        res.status(409).send(e.message);
    }
}

exports.updateCategory = async (req, res) => {
    console.log(req.params.id);
    try {
        let category = await Category.updateOne({ '_id': req.params.id }, { $set: { "Name": req.body.name } });
        const data = JSON.stringify(category);
        res.status(200).send(`category updated successfully ${data}`);
    } catch (e) {
        res.status(409).send(e.message);
    }
}

exports.createPage = async (req, res) => {
    res.render("categoryForm");
}
exports.deletePage = async (req, res) => {
    res.render("categoryDelete");
}
exports.updatePage = async (req, res) => {
    res.render("categoryDelete");
}