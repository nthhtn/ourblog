const initialState = { listArticle: [] };

export default function (state = initialState, action) {
	switch (action.type) {
		case 'CREATE_ARTICLE_SUCCESS': return { listArticle: [action.article, ...state.listArticle] };
		case 'LIST_ARTICLES_SUCCESS': return { listArticle: action.list };
		case 'UPDATE_ARTICLE_SUCCESS': return { listArticle: state.listArticle.map((item) => item.id === action.id ? { ...item, ...action.data } : item) };
		case 'DELETE_ARTICLE_SUCCESS': return { listArticle: state.listArticle.filter((item) => item.id !== action.id) };
		default: return state;
	}
};
