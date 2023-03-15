import { UniqueEntityId } from '../domain/unique-entity-id';

export default class Entity<Props> {
	private readonly uniqueEntityId: UniqueEntityId;

	constructor(public readonly props: Props, id?: UniqueEntityId) {
		this.uniqueEntityId = id || new UniqueEntityId();
	}

	get id(): string {
		return this.uniqueEntityId.value;
	}

	toJSON(): Required<{ id: string } & Props> {
		return {
			id: this.id,
			...this.props
		} as Required<{ id: string } & Props>;
	}
}
