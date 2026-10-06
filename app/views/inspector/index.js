import { Router as createRouter } from 'express';
import { inspectorCases, getCaseById } from './data.js';
import { getPreparationPack, getPreparationPackSection } from './prep-pack-data.js';

const statusTagClass = {
	blue: 'govuk-tag--blue',
	yellow: 'govuk-tag--yellow',
	grey: 'govuk-tag--grey',
	purple: 'govuk-tag--purple',
	green: 'govuk-tag--green'
};

export function createRoutes() {
	const router = createRouter({ mergeParams: true });

	// "My cases" dashboard - cases assigned to me
	router.get('/', (req, res) => {
		res.render('inspector/dashboard.njk', {
			serviceName: 'Manage my casework',
			activeNav: 'my-cases',
			cases: inspectorCases.map((c) => ({
				...c,
				statusTagClass: statusTagClass[c.statusTag] || 'govuk-tag--grey'
			}))
		});
	});

	// Case overview
	router.get('/cases/:id', (req, res) => {
		const caseDetails = getCaseById(req.params.id);
		if (!caseDetails) {
			res.status(404).send('Case not found');
			return;
		}
		res.render('inspector/case-overview.njk', {
			serviceName: 'Inspector workspace',
			activeNav: 'my-cases',
			case: {
				...caseDetails,
				statusTagClass: statusTagClass[caseDetails.statusTag] || 'govuk-tag--grey'
			}
		});
	});

	// Preparation pack overview for a case
	router.get('/cases/:id/preparation-pack', (req, res) => {
		const pack = getPreparationPack(req.params.id);
		if (!pack) {
			res.status(404).send('Preparation pack not found');
			return;
		}
		res.render('inspector/preparation-pack.njk', {
			serviceName: 'Inspector workspace',
			activeNav: 'my-cases',
			pack
		});
	});

	// A single section of the preparation pack
	router.get('/cases/:id/preparation-pack/:section', (req, res) => {
		const result = getPreparationPackSection(req.params.id, req.params.section);
		if (!result) {
			res.status(404).send('Preparation pack section not found');
			return;
		}
		res.render('inspector/preparation-pack-section.njk', {
			serviceName: 'Inspector workspace',
			activeNav: 'my-cases',
			pack: result.pack,
			section: result.section,
			previous: result.previous,
			next: result.next
		});
	});

	return router;
}

