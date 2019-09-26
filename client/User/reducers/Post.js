const initialState = { listPost: [] };

export default function (state = initialState, action) {
	switch (action.type) {
		case 'CREATE_POST_SUCCESS': return { listPost: [action.post, ...state.listPost] };
		case 'LIST_POST_SUCCESS': return { listPost: action.list };
		case 'UPDATE_POST_SUCCESS': return { listPost: state.listPost.map((item) => item.id === action.post.id ? action.post : item) };
		// case 'DELETE_POST_SUCCESS': break;
		default: return state;
	}
};
