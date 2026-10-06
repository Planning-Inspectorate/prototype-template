// Dummy "Inspector Preparation Pack" data for the prototype.
//
// The structure mirrors the categories/outputs of a real inspector preparation
// pack (executive orientation, proposal, evidence, site-visit plan, policy
// framework, evidence gaps, decision scaffold and outcome benchmark) but all
// values below are FICTITIOUS and for prototype demonstration only.
//
// Each section is described as an ordered list of "blocks". The section
// template renders these generically, so new content can be added without
// touching the templates.
//
// Supported block types:
//   { type: 'note', variant, title, body }               -> callout box
//   { type: 'paragraphs', heading, items, source }        -> heading + <p> list
//   { type: 'table', caption, headers, rows }             -> govuk table
//   { type: 'checklist', heading, items }                 -> tick-box list
//   { type: 'steps', heading, items }                     -> numbered sequence

export const preparationPacks = {
	'6234567': {
		caseId: '6234567',
		reference: 'TEST/0000001',
		siteAddress: 'Test Site One, Test Street, Test Town, TE5 7ST',
		subtitle:
			'TEST DATA \u2014 Neutral evidence synthesis for case familiarisation, site-visit preparation and decision structuring',
		glance:
			'Householder appeal against refusal of application TEST/APP/001. The proposal is a part two-storey, part single-storey rear extension with a two-storey side extension and alterations to the existing front fenestration. The appeal site is within the Test Estate, identified as a non-designated heritage asset. (All details on this page are placeholder test data.)',
		likelyMainIssue:
			'The effect of the proposal on the character and appearance of the surrounding area, having particular regard to the significance of the Test Estate as a non-designated heritage asset.',
		keyFields: [
			{ field: 'Appellant', detail: 'Appellant One' },
			{ field: 'Agent', detail: 'Agent One, Test Design Company Limited' },
			{ field: 'LPA', detail: 'Test Council' },
			{ field: 'Application decision', detail: 'Refused; decision letter dated 01 January 2026 (test date)' },
			{ field: 'Costs application', detail: 'None' },
			{
				field: 'Site access',
				detail:
					'Appellant says access may be needed to see the rear elevation and surrounding context; no health and safety issue identified'
			},
			{
				field: 'Purpose of this pack',
				detail:
					'Preparation aid only. It does not replace inspection of the plans, policy documents or exercise of independent planning judgement.'
			}
		],
		evidenceControlNote: {
			title: 'Important evidence-control note',
			body:
				'The folder also contains a final appeal decision dated after the site visit. To avoid hindsight bias, the main preparation sections below are based on the pre-decision evidence. A segregated outcome benchmark appears only at the end.'
		},
		sourceLine: 'Source: Test Appellant Case; Test LPA Questionnaire.',
		sections: [
			{
				slug: 'executive-orientation',
				number: 1,
				title: 'Executive orientation',
				summary: 'Main issue, common ground and the matters in dispute.',
				blocks: [
					{
						type: 'note',
						variant: 'blue',
						title: 'Likely main issue',
						body:
							'The effect of the proposal on the character and appearance of the surrounding area, having particular regard to the significance of the Test Estate as a non-designated heritage asset.'
					},
					{
						type: 'paragraphs',
						heading: 'What is common ground',
						items: [
							'The principle of extending the dwelling is acceptable, subject to design and neighbour impacts.',
							'The Test Estate has significance arising from its planned form, openness, short terraces, gaps, simple architecture and consistent roofscape.',
							'The revised proposal is smaller than the previous refused scheme and includes a first-floor setback from the shared boundary.',
							'The proposal would not cause undue harm to neighbouring living conditions. The officer identified some effects, but not enough to justify refusal.',
							'The site is not in the Green Belt; the proposal does not affect the setting of listed buildings; no public representations are recorded in the LPA questionnaire.'
						],
						source: 'Source: Test Communication File; Test Appeal Statement; Test LPA Questionnaire.'
					},
					{
						type: 'table',
						caption: 'What is disputed',
						headers: ['Disputed question', 'LPA position', 'Appellant position'],
						rows: [
							[
								'First-floor gap',
								'The reduced gap would weaken the separation and rhythm between staggered terrace rows.',
								'A gap remains at first-floor level and the existing ground-floor extensions already create continuous built form.'
							],
							[
								'Scale and massing',
								'The combined side and rear first-floor elements would dominate the host dwelling and imbalance the terrace.',
								'The side element is 1.6m wide, the design is subordinate and the scheme has been materially reduced.'
							],
							[
								'Heritage effect',
								'The proposal harms characteristics that contribute to the significance of the Test Estate NDHA.',
								'Any harm is limited and outweighed by benefits; adopted guidance is said to be met.'
							],
							[
								'Emerging Design Code',
								'The LPA gave the draft code substantial weight and relied on its concern about two-storey side extensions.',
								'The code was unadopted and should have received limited weight.'
							],
							[
								'Comparators',
								'Site-specific circumstances distinguish other permissions.',
								'Recent permissions show that two-storey side extensions and 1m setbacks can be acceptable.'
							],
							[
								'Planning balance',
								'Character and heritage harm justify refusal.',
								'The benefits and policy compliance outweigh any limited harm.'
							]
						]
					}
				]
			},
			{
				slug: 'proposal-and-context',
				number: 2,
				title: 'Proposal and physical context',
				summary: 'What is proposed and the checks to make before visiting.',
				blocks: [
					{
						type: 'table',
						caption: 'Proposal components',
						headers: ['Component', 'Evidence to verify'],
						rows: [
							[
								'Two-storey side extension',
								'Approx. 1.6m wide; first-floor setback stated as 1.0m from shared boundary; hipped roof matching the existing ridgeline; front elevation parallel to the host dwelling.'
							],
							[
								'Rear extension',
								'Part two-storey, part single-storey. First-floor element stated as approx. 4.4m wide and 3.3m deep.'
							],
							[
								'Front alterations',
								'Changes to fenestration and roof form associated with the extension.'
							],
							[
								'Previous scheme',
								'The appellant states the side width was reduced from 2.5m to 1.6m, the rear width from 5.4m to 4.4m, and a 1m boundary setback introduced.'
							],
							[
								'Site relationship',
								'Test Property A is an end-of-terrace dwelling that sits forward of the adjacent terrace. Its side elevation is visible from the highway. Test Properties A and B have ground-floor extensions near or at the shared boundary, while a first-floor gap remains.'
							],
							[
								'Neighbours',
								'Test Property C lies to the north-east; Test Property B lies to the south-west across the shared boundary.'
							]
						]
					},
					{
						type: 'checklist',
						heading: 'Document checks before visiting',
						items: [
							'Compare existing and proposed site plans, elevations, sections and roof plans side by side.',
							'Confirm all stated dimensions directly from the drawings, especially the first-floor gap, side width, rear depth and roof elongation.',
							'Check whether the proposal is flush with or set back from the original front elevation and how this affects subordination.',
							'Locate the previous scheme drawings to understand what changed and whether the current scheme resolves the former harm.',
							'Review the appellant’s Test Appendix C comparators, but test each for separation distance, orientation, frontage setback, roof form and terrace geometry.'
						]
					}
				]
			},
			{
				slug: 'party-evidence',
				number: 3,
				title: 'Evidence from each main party',
				summary: 'The LPA and appellant cases, with a reliability caution.',
				blocks: [
					{
						type: 'paragraphs',
						heading: 'LPA evidence and reasoning',
						items: [
							'The estate’s significance is described through openness, spaciousness, regular built-form patterns, homogeneity, short terraces, pitched roofs and gaps between rows.',
							'The host dwelling sits forward of the adjacent terrace, making its side elevation and the first-floor gap more prominent in the street scene.',
							'The combined first-floor side and rear additions are considered overly prominent, not subordinate, and harmful to the original form of the dwelling and terrace rhythm.',
							'The LPA says the emerging Test Design Code reinforces concern about two-storey side extensions and cites another appeal concerning erosion of a first-floor gap.',
							'Neighbour amenity was assessed separately. Some loss of light, outlook or enclosure was identified, but not to an undue degree. Biodiversity enhancement was absent, but this was not considered a refusal reason.'
						],
						source: 'Source: Test Communication File.'
					},
					{
						type: 'paragraphs',
						heading: 'Appellant evidence and reasoning',
						items: [
							'The scheme was redesigned after the earlier refusal, with reduced width and a new 1m first-floor setback.',
							'The appellant argues the proposal follows the adopted Residential Extensions and Alterations SPD, including the treatment of side extensions and the 45-degree guidance.',
							'The appellant challenges the weight given to the emerging Design Code and says the LPA failed to carry out the necessary balance for a non-designated heritage asset.',
							'The appellant says the existing ground-floor built form at Test Properties A and B was not adequately considered.',
							'Test Appendix C presents permissions elsewhere in the Test Estate where setbacks, subordination, local precedents or site-specific balancing supported approval.',
							'The claimed benefits are additional family accommodation, improved living conditions and efficient use of an existing residential plot.'
						],
						source: 'Source: Test Appeal Statement and Test Appendix C.'
					},
					{
						type: 'note',
						variant: 'yellow',
						title: 'Reliability caution',
						body:
							'Assertions about policy compliance, precedent comparability and the weight of the emerging Design Code require independent checking. Neither party’s characterisation should be adopted without testing against the plans, policy wording and observed site context.'
					}
				]
			},
			{
				slug: 'site-visit-plan',
				number: 4,
				title: 'Site-visit inspection plan',
				summary: 'Viewpoints to inspect and the questions the visit should answer.',
				blocks: [
					{
						type: 'note',
						variant: 'blue',
						title: 'Primary purpose of the visit',
						body:
							'Resolve how the proposed first-floor side and rear massing would be perceived in the real street scene, and whether the remaining gap and roof form would preserve or erode the legibility of separate terrace rows and the significance of the Test Estate.'
					},
					{
						type: 'table',
						caption: 'Viewpoints and observations',
						headers: ['Viewpoint / task', 'What to observe', 'Record'],
						rows: [
							[
								'Approach along Test Street in both directions',
								'When Test Property A first becomes visible; prominence of the flank; rhythm of short terraces; consistency of gaps and roofs.',
								'Photograph or note each key sequential view.'
							],
							[
								'Opposite side of road',
								'Width and perception of the gap; relationship between Test Properties A and B; effect of the stagger between terrace rows.',
								'Sketch sightlines and identify the most representative public viewpoint.'
							],
							[
								'Front of Test Property A',
								'Host width, roof proportions, facade rhythm and whether the side addition would read as subordinate.',
								'Check drawing against physical reference points.'
							],
							[
								'Shared side with Test Property B',
								'Existing ground-floor connection, first-floor separation, boundary treatment and the visibility of the retained gap.',
								'Estimate and verify separation; note whether ground-floor development changes perception of openness.'
							],
							[
								'Rear context, if access available',
								'Combined side/rear massing, relationship to the original rear elevation and terrace, and neighbour outlook.',
								'Check plans and note whether rear effects reinforce or differ from street-scene effects.'
							],
							[
								'Local comparators',
								'Only nearby examples visible without broadening the case unfairly. Note whether contexts genuinely match.',
								'Record differences in orientation, setbacks, gap widths, roof forms and prominence.'
							]
						]
					},
					{
						type: 'paragraphs',
						heading: 'Questions the visit should answer',
						items: [
							'Would the original separation between the two terrace rows remain readily legible?',
							'Would elongating the ridge and roof width weaken the simple proportional relationship between Test Properties A and B?',
							'Is the first-floor gap an important contributor to the estate’s openness at this precise location?',
							'Does the forward position of Test Property A materially increase the extension’s prominence?',
							'Does the combined side and rear first-floor form read as subordinate to the original dwelling?',
							'Are the appellant’s comparators genuinely comparable, or do wider gaps, front setbacks or different orientations explain their outcomes?'
						]
					}
				]
			},
			{
				slug: 'policy-framework',
				number: 5,
				title: 'Policy and decision framework',
				summary: 'The framework to apply and a neutral decision sequence.',
				blocks: [
					{
						type: 'table',
						caption: 'Framework elements',
						headers: ['Framework element', 'Inspector task'],
						rows: [
							[
								'Development plan',
								'Assess the proposal against Test Regional Plan Policy HC1 and the relevant Test Town Local Plan policies identified by the parties: SPP6, SP2, DMD1, DMD4 and DMD5.'
							],
							[
								'Adopted SPD',
								'Use the Residential Extensions and Alterations SPD as guidance. Compliance with dimensional or layout guidance is relevant but does not automatically settle the wider character and heritage judgement.'
							],
							[
								'Non-designated heritage asset',
								'Identify the estate’s significance, describe the proposal’s effect on that significance, grade the harm in clear terms and make a balanced judgement against the benefits.'
							],
							[
								'Emerging Design Code',
								'Establish its status at the relevant date and assign weight by reference to its stage, objections and consistency. Avoid treating it as adopted policy.'
							],
							[
								'Other decisions',
								'Treat comparators as material only to the extent that their site context and design are genuinely comparable. Explain critical similarities and differences.'
							],
							[
								'Amenity',
								'Record the LPA’s conclusion that effects on neighbours are not undue. Absence of harm is normally neutral rather than a benefit.'
							],
							[
								'Conditions',
								'If minded to allow, consider whether materials, approved plans and any other necessary controls could make the development acceptable. Do not use conditions to cure unacceptable fundamental massing or heritage harm.'
							]
						]
					},
					{
						type: 'steps',
						heading: 'Neutral decision sequence',
						items: [
							'Define the significance and locally distinctive characteristics of the Test Estate NDHA.',
							'Establish the appeal site’s specific contribution to that significance.',
							'Describe the proposal accurately from the drawings.',
							'Assess the visual effect from representative public and private viewpoints.',
							'Reach a reasoned finding on character, appearance and heritage significance.',
							'Assess development-plan compliance as a whole and assign weight to other material considerations.',
							'Weigh identified harm against public benefits, keeping personal benefits in proper perspective.',
							'Conclude whether conditions can address any remaining matter and state the decision clearly.'
						]
					}
				]
			},
			{
				slug: 'evidence-gaps',
				number: 6,
				title: 'Evidence gaps, tensions and safeguards',
				summary: 'Inconsistencies to resolve and fairness safeguards.',
				blocks: [
					{
						type: 'table',
						caption: 'Issues and required treatment',
						headers: ['Issue', 'Why it matters', 'Required treatment'],
						rows: [
							[
								'Site address omitted on LPA questionnaire cover',
								'Administrative incompleteness could cause cross-case confusion.',
								'Cross-check all documents against appeal reference TEST/0000001 and application TEST/APP/001.'
							],
							[
								'Access inconsistency',
								'Appellant form says access may be needed; LPA questionnaire says inspector access to appellant land is not needed.',
								'Arrange or confirm access based on what is necessary to inspect the rear and context.'
							],
							[
								'Neighbour count inconsistency',
								'The report references both eight and six neighbours in different sections.',
								'Do not infer representations from notification count; questionnaire records no public representations.'
							],
							[
								'Previous appeal reference challenged',
								'The appellant says appeal TEST/0000099 was unverifiable.',
								'Do not rely on it unless the decision is located and its factual comparability established.'
							],
							[
								'Emerging policy weight',
								'LPA describes substantial weight; appellant says limited weight.',
								'Apply an independent, reasoned weighting based on status at the relevant date.'
							],
							[
								'Amenity versus design',
								'The same physical form can be acceptable for amenity yet harmful to character.',
								'Treat these as distinct planning tests; avoid characterising the findings as logically inconsistent.'
							],
							[
								'Comparator schedule',
								'Examples may be selectively presented and contexts differ.',
								'Use as cross-checks, not substitutes for site-specific assessment.'
							],
							[
								'Personal data',
								'The case documents contain names and contact details.',
								'Keep the working pack case-focused and avoid unnecessary reproduction of personal contact details.'
							]
						]
					},
					{
						type: 'note',
						variant: 'yellow',
						title: 'Fairness safeguard',
						body:
							'If any matter not already before the parties becomes potentially determinative, ensure procedural fairness before relying on it. This pack does not identify or introduce new evidence.'
					}
				]
			},
			{
				slug: 'decision-scaffold',
				number: 7,
				title: 'Decision-writing scaffold',
				summary: 'A suggested structure and quality-control questions.',
				blocks: [
					{
						type: 'paragraphs',
						heading: 'Suggested structure',
						items: [
							'Preliminary matters: Confirm the proposal description, any revised national policy position, procedural matters and the evidence considered.',
							'Main issue: Frame the issue around character and appearance with specific regard to the Test Estate NDHA.',
							'Significance and site contribution: Explain the characteristics that contribute to significance and how the first-floor gap, stagger and roof proportions operate at this site.',
							'Effect of the proposal: Analyse the retained gap, prominence, combined side/rear massing, roof elongation, subordination and terrace legibility.',
							'Other decisions and emerging policy: Give transparent reasons for the weight assigned and identify material factual differences.',
							'Benefits and balance: Separate public benefits, personal benefits and neutral considerations. Balance them against the degree of harm found.',
							'Overall conclusion: State development-plan compliance, other material considerations, conditions if relevant, and the final outcome.'
						]
					},
					{
						type: 'checklist',
						heading: 'Quality-control questions',
						items: [
							'Have all material arguments from both main parties been addressed?',
							'Are observations distinguished from party assertions?',
							'Is every finding traceable to a plan, policy, document or site observation?',
							'Is the degree of heritage harm stated consistently throughout?',
							'Are neutral considerations kept out of the benefits side of the balance?',
							'Are comparator differences explained rather than merely listed?',
							'Does the conclusion follow logically from the preceding analysis?',
							'Have names, address, references and proposal wording been checked?'
						]
					}
				]
			},
			{
				slug: 'outcome-benchmark',
				number: 8,
				title: 'Segregated outcome benchmark',
				summary: 'Post-decision benchmark and source register — do not use for pre-visit reasoning.',
				blocks: [
					{
						type: 'note',
						variant: 'red',
						title: 'Do not use this section for pre-visit reasoning',
						body:
							'This section records the later outcome solely as a validation benchmark for the test case. It should not be used to reverse-engineer the site-visit observations or the independent assessment above.'
					},
					{
						type: 'paragraphs',
						heading: 'Recorded outcome',
						items: [
							'The recorded site visit took place on 2 September 2026 and the decision was issued on 22 September 2026.',
							'The final decision identified the main issue as the effect on character and appearance, having regard to the Test Estate as an NDHA.',
							'The Inspector found that reducing the first-floor gap and elongating the roof would weaken separation between terrace rows and the simple architectural cohesion of the estate.',
							'The harm to the NDHA was found to be limited. The benefits were given very limited weight and did not outweigh that harm.',
							'The appeal was dismissed.'
						],
						source: 'Source: Test Final Decision.'
					},
					{
						type: 'table',
						caption: 'Source register',
						headers: ['Document', 'Use in pack'],
						rows: [
							['Test Appellant Case', 'Case metadata, proposal, access and uploaded evidence.'],
							['Test LPA Questionnaire', 'Constraints, notification, documents and site access record.'],
							['Test Communication File', 'LPA delegated report, policy context and assessment.'],
							['Test Appeal Statement', 'Appellant’s case, scheme changes, planning balance and policy arguments.'],
							['Test Appeal Statement Appendix B', 'Correspondence challenging the cited appeal reference.'],
							['Test Appeal Statement Appendix C', 'Comparator permissions and supporting reports.'],
							['Test Final Decision', 'Post-decision benchmark only.']
						]
					}
				]
			}
		]
	}
};

export function getPreparationPack(caseId) {
	return preparationPacks[caseId];
}

export function getPreparationPackSection(caseId, slug) {
	const pack = preparationPacks[caseId];
	if (!pack) return undefined;
	const index = pack.sections.findIndex((s) => s.slug === slug);
	if (index === -1) return undefined;
	return {
		pack,
		section: pack.sections[index],
		previous: pack.sections[index - 1],
		next: pack.sections[index + 1]
	};
}

