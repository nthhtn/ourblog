const initialState = {
	list: [],
	current: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'LIST_ARTICLES': return { ...state, list: action.list };
		case 'GET_ARTICLE_BY_TITLE': return { ...state, current: action.article };
		default: return state;
	}
};
