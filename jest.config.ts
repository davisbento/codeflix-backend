/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	clearMocks: true,
	coverageProvider: 'v8',
	testRegex: '.*\\..*spec.ts$',
	transform: {
		'^.+\\.(t|j)s$': ['@swc/jest']
	}
};
