import {JOURNEY_ID} from "./journey.js";

/**
 * Returns a controller/handler to save the journey answers to the database
 */
export function buildSaveController() {
	return async (req, res) => {
		if (!res.locals || !res.locals.journeyResponse) {
			throw new Error('journey response required');
		}
		const journeyResponse = res.locals.journeyResponse;
		const answers = journeyResponse.answers;
		if (typeof answers !== 'object') {
			throw new Error('answers should be an object');
		}

		console.info(answers, 'save');

		if (!req.session.cases) {
			req.session.cases = [];
		}

		req.session.cases.push(answers);
		console.info(req.session, 'save');

		// clear answers
		delete req.session?.data;
		delete req.session?.forms[JOURNEY_ID];

		res.render('layouts/success.njk', { reference: answers.reference });
	};
}
