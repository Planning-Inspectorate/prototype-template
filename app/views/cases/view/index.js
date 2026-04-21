import { Router as createRouter } from 'express';
import {
	buildGetJourney,
	buildList,
	buildSave,
	question,
	validate,
	validationErrorHandler
} from '@planning-inspectorate/dynamic-forms';
import { questions } from '../questions.js';
import { createJourney } from './journey.js';
import { buildGetJourneyMiddleware } from './controller.js';
import { buildSaveFn } from './edit.js';
import { asyncHandler } from '../../../util/async-handler.ts';

export function createRoutes() {
	const router = createRouter({ mergeParams: true });
	// read 'answers'/data from the database
	const getJourneyResponse = buildGetJourneyMiddleware();
	const getJourney = buildGetJourney((req, journeyResponse) => createJourney(req, journeyResponse, questions));
	const saveEdits = buildSave(buildSaveFn(), true);

	router.get('/', getJourneyResponse, getJourney, asyncHandler(buildList()));

	// when any question is answered, return to the 'task list' or case details view
	router.get('/:section/:question', getJourneyResponse, getJourney, question);
	router.post(
		'/:section/:question',
		getJourneyResponse,
		getJourney,
		validate,
		validationErrorHandler,
		asyncHandler(saveEdits)
	);

	return router;
}
