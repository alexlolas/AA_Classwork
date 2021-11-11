
const allTodos = ({todos}) => {
    return (Object.keys(todos).map(id => todos[id]))
}

export default allTodos;