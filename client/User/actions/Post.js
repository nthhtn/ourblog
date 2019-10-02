export function createPost(post) {
	return async (dispatch) => {
		const response = await fetch(`/api/posts`, {
			credentials: 'same-origin',
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(post)
		});
		const responseJson = await response.json();
		dispatch(createPostSuccess(responseJson.result));
	};
};

export function createPostSuccess(post) {
	return { type: 'CREATE_POST_SUCCESS', post };
};

export function listPost(page = 1, limit = 10) {
	return async (dispatch) => {
		const response = await fetch(`/api/posts`, { credentials: 'same-origin' });
		const responseJson = await response.json();
		dispatch(listPostSuccess(responseJson.result));
	};
};

export function listPostSuccess(list) {
	return { type: 'LIST_POST_SUCCESS', list };
};

export function updatePost(id, data) {
	return async (dispatch) => {
		const response = await fetch(`/api/posts/${id}`, {
			credentials: 'same-origin',
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
		const responseJson = await response.json();
		dispatch(updatePostSuccess(id, data));
	};
}

export function updatePostSuccess(id, data) {
	return { type: 'UPDATE_POST_SUCCESS', id, data };
}

export function deletePost(id) {
	return async (dispatch) => {
		const response = await fetch(`/api/posts/${id}`, {
			credentials: 'same-origin',
			method: 'delete'
		});
		const responseJson = await response.json();
		dispatch(deletePostSuccess(id));
	};
}

export function deletePostSuccess(id) {
	return { type: 'DELETE_POST_SUCCESS', id };
}
