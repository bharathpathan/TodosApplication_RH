const todoReducer = (state = [], action) => {

    switch (action.type) {
    case 'ADD_TODO':
                      state=state.concat([action.data])
                      return state

    case 'DELETE_TODO':
                      state=state.filter((todo) => todo.id !== action.id)

                      return state

    case 'Delete_completed':
                      state=state.filter((todo) => !todo.completed )

                      return state

    case 'COMPLETE_TODO':
                      state= state.map((todo) => todo.id === action.id ? {...todo, completed: true } : todo)

                      return state
    case 'EDIT_TODO':

                      state= state.map((todo) => todo.id === action.id ? {...todo, editing: !todo.editing } : todo)

                     state.filter_data=state.filter((todo) => todo.id === action.id )
                     
                      return state
    case 'UPDATE':

                      state=state.map((todo) => {
                        if (todo.id === action.id) {
                        return {
                        ...todo,
                        title: action.data.newTitle,
                        description: action.data.newDescription,
                        editing: !todo.editing
                        }
                        } else return todo;
                        })
                        state.filter_data=[]
                      return state
    case 'filter':
                      const value = action.search1;
                      const works = state.filter((todo) => (todo.title.includes(value)||todo.description.includes(value)));
                      state.filter_data=works
                      return state;
        

    default:
    return state;
    }
    }
    export default todoReducer;