class Category {
	constructor(public name: string) {}

	public static create(id: string): Category {
		return new Category(id);
	}
}
