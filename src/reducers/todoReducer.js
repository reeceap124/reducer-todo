export const initialState = {
	items: [
	{
	item: 'This is initial item state',
	completed: false,
	id: 3892987589
	}]
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO' : 
            return {
                ...state,
                items: [
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