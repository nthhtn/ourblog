export function listPost() {

};

export function createPost(post) {
	return { type: 'CREATE_POST_SUCCESS', post };
};
