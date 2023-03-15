import { v4 as uuid } from 'uuid';

export class UniqueEntityId {
	public readonly value: string;

	constructor(id?: string) {
		this.value = id || uuid();
	}
}
