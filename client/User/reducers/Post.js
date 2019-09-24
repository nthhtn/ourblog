const initialState = { listPost: [] };

export default function (state = initialState, action) {
	console.log(action.type);
	switch (action.type) {
		case 'CREATE_POST_SUCCESS': return { listPost: [action.post, ...state.listPost] };
		case 'LIST_POST_SUCCESS': return { listPost: action.list };
		// case 'UPDATE_POST_SUCCESS': break;
		// case 'DELETE_POST_SUCCESS': break;
		default: return state;
	}
};
