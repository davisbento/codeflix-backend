import { Category } from './category';

describe('Category', () => {
	it('should be defined', () => {
		expect(new Category({ name: 'Category name' })).toBeDefined();
	});

	it('should be able to create a new category', () => {
		const category = new Category({ name: 'Category name' });
		expect(category.name).toBe('Category name');
	});

	it('should be able to create a new category with description', () => {
		const category = new Category({
			name: 'Category name',
			description: 'Category description'
		});

		expect(category.name).toBe('Category name');
		expect(category.description).toBe('Category description');
	});

	it('should be able to create a new category with is_active set to false', () => {
		const category = new Category({
			name: 'Category name',
			is_active: false
		});

		expect(category.name).toBe('Category name');
		expect(category.is_active).toBe(false);
	});

	it('should be able to create a new category without a created date and returning the default date', () => {
		const now = new Date();
		const category = new Category({
			name: 'Category name'
		});

		expect(category.name).toBe('Category name');
		expect(category.created_at).toBeInstanceOf(Date);
		expect(category.created_at).toEqual(now);
		expect(category.id).not.toBeNull();
	});

	it('should be able to create a new category and validate the uuid', () => {
		const category = new Category({
			name: 'Category name'
		});

		expect(category.id).toMatch(
			/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
		);
	});
});
