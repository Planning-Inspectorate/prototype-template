import { formatDateForDisplay } from '@planning-inspectorate/dynamic-forms';

export function buildListCases() {
	return async (req, res) => {
		console.log('list', req.session);
		const cases = req.session.cases || [];

		res.render('cases/list/list.njk', {
			rows: mapToViewModel(cases)
		});
	};
}

function mapToViewModel(cases) {
	const rows = [];
	for (const c of cases) {
		const row = [];
		row.push({ text: c.reference });
		row.push({ text: (c.submissionDate && formatDateForDisplay(c.submissionDate)) || 'Not set' });
		row.push({
			html: `<a href="/my-journey/view/${c.id}" class="govuk-link">View</a>`
		});
		rows.push(row);
	}
	return rows;
}
