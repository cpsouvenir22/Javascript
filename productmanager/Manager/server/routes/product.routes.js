const ProductController = require('../controllers/product.controller')

module.exports = app => {
        app.get('/Products', ProductController.index);
        app.post('/Products', ProductController.create);
        app.get('/Products/:id', ProductController.show);
        app.put('/Products/:id', ProductController.update);
        app.delete('/Products/:id', ProductController.destroy);
        
    }