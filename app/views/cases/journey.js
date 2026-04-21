import { Journey, Section, whenQuestionHasAnswer } from '@planning-inspectorate/dynamic-forms';

export const JOURNEY_ID = 'create-a-case';

export function createJourney(req, response, questions) {
	return new Journey({
		journeyId: JOURNEY_ID,
		sections: [
			new Section('Questions', 'questions')
				.addQuestion(questions.reference)
				.addQuestion(questions.howManyApplicants)
				.addQuestion(questions.submissionDate)
				.withCondition(whenQuestionHasAnswer(questions.howManyApplicants, '5'))
				.addQuestion(questions.description)
		],
		taskListUrl: 'check-your-answers',
		journeyTemplate: 'layouts/layout-journey.njk',
		taskListTemplate: 'layouts/layout-check-your-answers.njk',
		journeyTitle: 'Create a case',
		returnToListing: false,
		makeBaseUrl: () => req.baseUrl,
		initialBackLink: '/',
		response
	});
}
