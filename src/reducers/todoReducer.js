export const initialState = {
	items: [{}]
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO' : 
            return {
                ...state,
                items: [...state.items,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
            case 'TOGGLE_COMPLETED' :
                return{
                    ...state,
                    items : state.items.map((val) => {
                        if (val.id === action.payload) {
                            return{
                                ...val,
                                completed : !val.completed
                            }
                        } else {
                            return val
                        }
                          
                    })
                } 
                
                
                
            case 'REMOVE_COMPLETED' :
                return {
                    ...state,
                    items: state.items.filter(val => {
                        return val.completed !== true
                    })
                }
                
        default : return state;
    }
}