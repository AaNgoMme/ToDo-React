const initialState = {
    toDoItemStore: [
      ]
}

const UPDATE_TODO = 'UPDATE_TODO'

export const updateToDo = (toDoItemStore) => ({
    type: UPDATE_TODO,
    toDoItemStore
})

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_TODO':
            return {
                ...state,
                toDoItemStore: action.toDoItemStore
            }
        default:
            return state
    }  
}