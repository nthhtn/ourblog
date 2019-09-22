const initialState = {
	listPost: []
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'CREATE_POST_SUCCESS': return { listPost: [...state.listPost, action.post] };
		case 'LIST_POST_SUCCESS': return { listPost: [...state.listPost] };
		// case 'UPDATE_POST_SUCCESS': break;
		// case 'DELETE_POST_SUCCESS': break;
		default: return state;
	}
};
