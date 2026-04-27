import { Journey, Section, whenQuestionHasAnswer } from '@planning-inspectorate/dynamic-forms';

export const JOURNEY_ID = 'create-a-case';

export function createJourney(req, response, questions) {
	return new Journey({
		journeyId: JOURNEY_ID,
		sections: [
			new Section('Questions', 'questions')
				.addQuestion(questions.caseOfficer)
				.addQuestion(questions.planTitle)
				.addQuestion(questions.planType)
				.addQuestion(questions.lpa)
				.addQuestion(questions.anotherLPA)
				.withCondition(whenQuestionHasAnswer(questions.anotherLPA, 'yes'))
				.addQuestion(questions.secondLPA)
				.addQuestion(questions.mainContactFirstName)
				.addQuestion(questions.mainContactLastName)
				.addQuestion(questions.mainContactEmail)
				.addQuestion(questions.mainContactPhoneNumber)
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
