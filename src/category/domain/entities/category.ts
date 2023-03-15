import { UniqueEntityId } from '../../../@shared/domain/unique-entity-id';
import Entity from '../../../@shared/entity/entity';

export type CategoryProps = {
	name: string;
	description?: string;
	is_active?: boolean;
	created_at?: Date;
};

export class Category extends Entity<CategoryProps> {
	constructor(public readonly props: CategoryProps, id?: UniqueEntityId) {
		super(props, id);
		this.props.is_active = this.props.is_active ?? true;
		this.props.description = this.props.description || undefined;
		this.props.created_at = this.props.created_at || new Date();
	}

	get name(): string {
		return this.props.name;
	}

	get is_active(): boolean {
		return this.props.is_active ?? true;
	}

	get description(): string {
		return this.props.description || '';
	}

	get created_at(): Date {
		return this.props.created_at || new Date();
	}

	private set name(name: string) {
		this.props.name = name;
	}

	private set description(description: string) {
		this.props.description = description;
	}

	private set is_active(is_active: boolean) {
		this.props.is_active = is_active;
	}
}
