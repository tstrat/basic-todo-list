const todos = [
    { content: 'Example', completed: true }
];

module.exports = {
    getTodo: (req, res) => {
        res.status(200).send(todos)
    },
    postTodo: (req, res) => {
        const { content, completed } = req.body;
        todos.push({
            content: content || 'No Content',
            completed: completed || false
        });
        res.status(200).send(todos)
    },
    updateTodo: (req, res) => {
        const { completed } = req.body
        const index = req.params.index;

        if ( index < 0 || index >= todos.length ) {
            res.status(401).send('Bad input. Index out of bounds');
            return;
        }

        todos[index].completed = completed;
        res.status(200).send(todos)
    },
    deleteTodo: (req, res) => {
        const index = req.params.index;

        if ( index < 0 || index >= todos.length ) {
            res.status(401).send('Bad input. Index out of bounds');
            return;
        }

        todos.splice(index, 1);
        res.status(200).send(todos)
    }
}
