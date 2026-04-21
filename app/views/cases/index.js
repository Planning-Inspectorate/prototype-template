import { Router as createRouter } from 'express';
import {
	buildGetJourney,
	buildGetJourneyResponseFromSession,
	buildList,
	buildSave,
	question,
	saveDataToSession,
	validate,
	validationErrorHandler
} from '@planning-inspectorate/dynamic-forms';
import { createJourney, JOURNEY_ID } from './journey.js';
import { questions } from './questions.js';
import { buildSaveController } from './save.js';
import { createRoutes as createListRoutes } from './list/index.js';
import { createRoutes as createDetailsRoutes } from './view/index.js';
import { asyncHandler } from '../../util/async-handler.ts';

export function createRoutes() {
	const router = createRouter({ mergeParams: true });

	// read answers from the session
	const getJourneyResponse = buildGetJourneyResponseFromSession(JOURNEY_ID);
	const getJourney = buildGetJourney((req, journeyResponse) => createJourney(req, journeyResponse, questions));
	const saveToSession = asyncHandler(buildSave(saveDataToSession));
	const saveToDatabase = asyncHandler(buildSaveController());

	router.use('/list', createListRoutes());
	router.use('/view/:id', createDetailsRoutes());

	router.get('/:section/:question', getJourneyResponse, getJourney, question);
	router.post('/:section/:question', getJourneyResponse, getJourney, validate, validationErrorHandler, saveToSession);

	router.get('/check-your-answers', getJourneyResponse, getJourney, buildList());
	router.post('/check-your-answers', getJourneyResponse, getJourney, saveToDatabase);

	return router;
}
