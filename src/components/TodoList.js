const TodoList = ({ todos }) => {
    return <div className="container">
        <h1 className="text-center">Todo List</h1>
        <button type="button" class="btn btn-danger">Delete Selected Todos</button>
        <ul className="list-group">
            {todos.map((todo)=>(
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {todo.id} - {todo.title}
                    <input type='checkbox' checked={todo.completed} />
                </li>
                ))}
        </ul>
    </div>;
}
 
export default TodoList;