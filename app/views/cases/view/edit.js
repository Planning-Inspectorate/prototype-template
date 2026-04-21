/**
 * Save question answers/changes to the database
 */
export function buildSaveFn() {
	return async ({ data, req }) => {
		console.info({ answers: data.answers }, 'save edit');

		console.info('case updated');
	};
}
