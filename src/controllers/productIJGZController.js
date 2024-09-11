const ProductIJGZ = require('../models/productIJGZ');

//obtener todos los productos
exports.getAllProducts = async(req, res) =>{
    try{
        const products = await ProductIJGZ.find();
        res.json(products);
    } catch(error){
        res.status(500).json({ error: 'Error al obtener todos los productos' });
    }
};

//obtener por id
exports.getProductById = async (req, res) => {
    try{
        const product = await ProductIJGZ.findById(req.params.id);
        if(!product){
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(product);
    } catch(error){
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

//crear nuevo producto
exports.createProduct = async(req, res) => {
    try{
        const newProduct = new ProductIJGZ(req.body);
        const saveProduct = await newProduct.save();
        res.status(201).json(saveProduct);
    }   catch (error){
        res.status(500).json({ error: 'Error al crear producto' });
    }
};

//actualizar producto
exports.updateProduct = async (req, res) => {
    try{
        const updateProduct = await ProductIJGZ.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
        });
        if(!updateProduct){
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(updateProduct);
    } catch(error) {
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
};

//eliminar producto
exports.deleteProduct = async(req, res) => {
    try {
        const product = await ProductIJGZ.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
};