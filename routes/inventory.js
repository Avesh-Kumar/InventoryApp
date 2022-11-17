const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers');
const itemController = require('../controllers/itemsControllers');

// ----------------- CURD OPERATION OF CATEGORY--------------------------
router.get('/tocreatecategory', categoryController.createPage);
router.get('/todeletecategory', categoryController.deletePage);
router.get('/toupdatecategory', categoryController.updatePage);

router.post('/category/create', categoryController.insertCategory);

router.get('/', categoryController.readCategory);
router.get('/category/readById/:id', categoryController.readCategoryById);
router.delete("/category/delete/:id", categoryController.deleteCategory);
router.patch("/category/update/:id", categoryController.updateCategory);




// // ----------------- CURD OPERATION OF ITEM--------------------------
router.post('/item/create', itemController.insertItem);
router.get('/item/read', itemController.readItem);
router.get("/item/readById/:id", itemController.readItemById);
router.delete("/item/delete/:id", itemController.deleteItem);
router.patch("/item/update/:id", itemController.updateItem);
//get all toys
router.get('/item/toys', itemController.readAllToys);
router.get('/item/fruits', itemController.readAllFruits);

router.get('/item/musicalInstance', itemController.readAllMusicalInstance);
router.get('/item/autoPart', itemController.readAllAutoParts);
router.get('/item/stationary', itemController.readAllStationary);



module.exports = router;