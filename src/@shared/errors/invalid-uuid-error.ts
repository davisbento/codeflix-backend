export default class InvalidUuidError extends Error {
	constructor() {
		super('Invalid uuid');
	}
}
