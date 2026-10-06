// Sample data for the Inspector service prototype.
// Cases assigned to the currently signed-in inspector.

export const inspectorCases = [
	{
		id: '6234567',
		reference: '6234567',
		type: 'Residential extension',
		procedure: 'Written representations',
		siteVisit: 'Site visit planned',
		status: 'In progress',
		statusTag: 'blue',
		due: '18 Oct',
		dueDate: new Date('2026-10-18T00:00:00.000Z'),
		evidenceItems: 42,
		location: 'Bristol',
		taskFlow: ['Review case and issues', 'Prepare for site visit', 'Draft and submit for QA']
	},
	{
		id: '6654321',
		reference: '6654321',
		type: 'Change of use',
		procedure: 'Hearing',
		siteVisit: 'Site visit complete',
		status: 'Awaiting decision',
		statusTag: 'yellow',
		due: '24 Oct',
		dueDate: new Date('2026-10-24T00:00:00.000Z'),
		evidenceItems: 28,
		location: 'Leeds',
		taskFlow: ['Review hearing notes', 'Draft decision', 'Submit for QA']
	},
	{
		id: '6468101',
		reference: '6468101',
		type: 'New dwelling',
		procedure: 'Written representations',
		siteVisit: 'Awaiting site visit booking',
		status: 'Not started',
		statusTag: 'grey',
		due: '02 Nov',
		dueDate: new Date('2026-11-02T00:00:00.000Z'),
		evidenceItems: 15,
		location: 'Norwich',
		taskFlow: ['Review case and issues', 'Book and prepare for site visit', 'Draft and submit for QA']
	},
	{
		id: '6357911',
		reference: '6357911',
		type: 'Advertisement consent',
		procedure: 'Written representations',
		siteVisit: 'Site visit complete',
		status: 'With QA',
		statusTag: 'purple',
		due: '09 Oct',
		dueDate: new Date('2026-10-09T00:00:00.000Z'),
		evidenceItems: 9,
		location: 'Manchester',
		taskFlow: ['Review case and issues', 'Prepare for site visit', 'Draft and submit for QA']
	}
];

export function getCaseById(id) {
	return inspectorCases.find((c) => c.id === id);
}

