import { Router as createRouter } from 'express';
import { asyncHandler } from '../../../util/async-handler.ts';
import { buildListCases } from './list.js';

export function createRoutes() {
	const router = createRouter({ mergeParams: true });

	router.get('/', asyncHandler(buildListCases()));

	return router;
}
