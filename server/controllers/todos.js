let todosId=3;

const todos = [
    {
        id:1,
        cretor: 'Sam',
        task: 'Homework',
        date: new Date().toISOString(),
    },
    {
        id:2,
        cretor: 'Angel',
        task: 'Make bed',
        date: new Date().toISOString(),
    }
];

const todosControllers={
    get:(req,res)=>{
     res.status(200).json(todos);
    },
    post: (req,res)=>{
        const {cretor, task, date}=req.body;
        if(!cretor || !task || !date){
         res.status(400).send();
         return;
        }
        const addedTodo = {
            id: todosId++,
            cretor,
            task,
            date
        }
        todos.unshift(addedTodo);
        res.status(200).json(addedTodo);
    },
    put:(req,res)=>{
        console.log(req.params);
        const {id}=req.params;
        const {cretor, task, date}=req.body;
        if(!cretor || !task || !date ||! id){
         res.status(400).send();
         return;
        }
        
         const todoToUpdateIndex= todos.findIndex(todo=> todo.id === Number(id ));
         if(todoToUpdateIndex === -1){
             res.status(404).send('No found')
             return;
         }
         todos[todoToUpdateIndex]={
            id,
            cretor,
            task,
            date
         }
         
         res.status(200).json(todos[todoToUpdateIndex]);
        },
        patch:(req,res)=>{
            console.log(req.params);
            const {id}=req.params;
            const {cretor, task, date}=req.body;
            
             const todoToUpdateIndex= todos.findIndex(todo=> todo.id === parseInt(id ));
             if(todoToUpdateIndex === -1){
                 res.status(404).send('No found')
                 return;
             }
             todos[todoToUpdateIndex]={
                id,
                cretor: cretor ||  todos[todoToUpdateIndex].cretor,
                task: task ||  todos[todoToUpdateIndex].task,
                date: date ||  todos[todoToUpdateIndex].date
             }
             
             res.status(200).json(todos[todoToUpdateIndex]);
            },

            delete:(req,res)=>{
                
                const {id}=req.params;
                console.log(todos, id);
                
                 const todoToDeleteIndex= todos.findIndex(todo=> todo.id === Number(id ));
                 if(todoToDeleteIndex === -1){
                     res.status(404).send('No found')
                     return;
                 }
                 const deleteTodo = todos.splice(todoToDeleteIndex, 1);
                 
                 res.status(200).json(deleteTodo);
                }    
}

module.exports= todosControllers;