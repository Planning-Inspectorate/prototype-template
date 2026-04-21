import { Journey, Section, whenQuestionHasAnswer } from '@planning-inspectorate/dynamic-forms';

export const JOURNEY_ID = 'case-view';

export function createJourney(req, response, questions) {
	return new Journey({
		journeyId: JOURNEY_ID,
		sections: [
			new Section('Case details', 'questions')
				.addQuestion(questions.reference)
				.addQuestion(questions.howManyApplicants)
				.addQuestion(questions.submissionDate)
				.withCondition(whenQuestionHasAnswer(questions.howManyApplicants, '5'))
				.addQuestion(questions.description)
		],
		taskListUrl: '/',
		journeyTemplate: 'layouts/layout-journey.njk',
		taskListTemplate: 'layouts/layout-case-details.njk',
		journeyTitle: 'Case view',
		returnToListing: false,
		makeBaseUrl: () => req.baseUrl,
		initialBackLink: '/',
		response
	});
}
