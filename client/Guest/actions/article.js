function listArticlesSuccess(list) {
	return { type: LIST_ARTICLES, list };
};

export function listArticles(page = 1, limit = 10) {
	return async (dispatch) => {
		const response = await fetch(`/api/articles`, { credentials: 'same-origin' });
		const responseJson = await response.json();
		return dispatch(listArticlesSuccess(responseJson.result));
	};
};

function getArticleByTitleSuccess(article) {
	return { type: GET_ARTICLE_BY_TITLE, article };
};

export function getArticleByTitle(title) {
	return async (dispatch) => {
		console.log(title);
		const response = await fetch(`/api/articles/title/${title}`, { credentials: 'same-origin' });
		const responseJson = await response.json();
		return dispatch(getArticleByTitleSuccess(responseJson.result));
	};
};
