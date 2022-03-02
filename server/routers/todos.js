

const {Router} = require('express');
const todosControllers = require('../controllers/todos')

const todosRouter = Router();

  
todosRouter.get('/', todosControllers.get);
todosRouter.post('/', todosControllers.post);
todosRouter.put('/:id', todosControllers.put);
todosRouter.patch('/:id', todosControllers.patch);
todosRouter.delete('/:id', todosControllers.delete);


module.exports=todosRouter;