import { JOURNEY_ID } from './journey.js';
import { JourneyResponse } from '@planning-inspectorate/dynamic-forms';

/**
 * Get data from the database to populate the journey response
 */
export function buildGetJourneyMiddleware() {
	return async (req, res, next) => {
		const id = req.params.id;
		if (!id) {
			throw new Error('id param required');
		}
		console.info({ id }, 'view case');

		const caseDetails = (req.session.cases || []).find(c => c.id.toString() === id);
		if (!caseDetails) {
			throw new Error('case not found');
		}
		const answers = databaseToViewModel(caseDetails);

		console.info({ answers }, 'view case');

		// put these on locals for the list controller
		res.locals.originalAnswers = { ...answers };
		res.locals.journeyResponse = new JourneyResponse(JOURNEY_ID, 'ref', answers);

		next();
	};
}

function databaseToViewModel(caseDetails) {
	return {
		reference: caseDetails.reference,
		description: caseDetails.description,
		applicantCount: String(caseDetails.applicantCount),
		submissionDate: caseDetails.submissionDate && new Date(caseDetails.submissionDate).toISOString()
	};
}
