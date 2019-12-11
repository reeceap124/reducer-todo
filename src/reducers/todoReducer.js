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
        default : return state;
    }
}