export function createArticle(article) {
	return async (dispatch) => {
		const response = await fetch(`/api/articles`, {
			credentials: 'same-origin',
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(article)
		});
		const responseJson = await response.json();
		dispatch(createArticleSuccess(responseJson.result));
	};
};

export function createArticleSuccess(article) {
	return { type: 'CREATE_ARTICLE_SUCCESS', article };
};

export function listArticles(page = 1, limit = 10) {
	return async (dispatch) => {
		const response = await fetch(`/api/articles`, { credentials: 'same-origin' });
		const responseJson = await response.json();
		dispatch(listArticleSuccess(responseJson.result));
	};
};

export function listArticlesSuccess(list) {
	return { type: 'LIST_ARTICLE_SUCCESS', list };
};

export function updateArticle(id, data) {
	return async (dispatch) => {
		const response = await fetch(`/api/articles/${id}`, {
			credentials: 'same-origin',
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
		const responseJson = await response.json();
		dispatch(updateArticleSuccess(id, data));
	};
}

export function updateArticleSuccess(id, data) {
	return { type: 'UPDATE_ARTICLE_SUCCESS', id, data };
}

export function deleteArticle(id) {
	return async (dispatch) => {
		const response = await fetch(`/api/articles/${id}`, {
			credentials: 'same-origin',
			method: 'delete'
		});
		const responseJson = await response.json();
		dispatch(deleteArticleSuccess(id));
	};
}

export function deleteArticleSuccess(id) {
	return { type: 'DELETE_ARTICLE_SUCCESS', id };
}
