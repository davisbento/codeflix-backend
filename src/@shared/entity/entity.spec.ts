import { v4 } from 'uuid';
import { UniqueEntityId } from '../domain/unique-entity-id';
import Entity from './entity';

class StubEntity extends Entity<{ name: string }> {
	constructor(props: { name: string }, id?: UniqueEntityId) {
		super(props, id);
	}
}

describe('Entity', () => {
	it('should be able to create a new entity', () => {
		const entity = new StubEntity({ name: 'Entity name' });
		expect(entity).toBeDefined();
	});

	it('should be able to create a new entity and return the id', () => {
		const entity = new StubEntity({ name: 'Entity name' });
		expect(entity.id).toBeDefined();
	});

	it('should be able to create a new entity and return the props', () => {
		const props = { name: 'Entity name' };
		const entity = new StubEntity(props);
		expect(entity.props).toStrictEqual(props);
	});

	it('should accept a valid/custom uuid', () => {
		const props = { name: 'Entity name' };
		const id = v4();
		const uniqueEntityId = new UniqueEntityId(id);
		const entity = new StubEntity(props, uniqueEntityId);
		expect(entity.id).toBeDefined();
		expect(entity.id).toBe(uniqueEntityId.value);
		expect(entity.id).toEqual(id);
	});
});
