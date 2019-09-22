import crypto from 'crypto';

export function sha512HashPassword(password) {
	const saltLength = 15;
	const salt = crypto.randomBytes(Math.ceil(saltLength / 2)).toString('hex').slice(0, saltLength);
	let hash = crypto.createHmac('sha512', salt);
	hash.update(password);
	return { salt, password: hash.digest('hex') };
};
