const courseNameEl = document.getElementById('courseName');
const academyEl = document.getElementById('academy');
const udemyEl = document.getElementById('udemy');
const question = document.getElementById('question');
const yes = document.getElementById('answerYes');
const no = document.getElementById('answerNo');
const courseYes = document.getElementById('courseYes');
const didYouFinish = 'Did you finish this course?';

const questions = [
	{
		id: 0,
		question: 'Are you new to programming?',
		yes: 2,
		no: 1,
	},
	{
		id: 1,
		question: 'Are you new to web development?',
		yes: 2,
		no: 3,
	},
	{
		id: 2,
		question: 'Do you want to be a web developer?',
		courseIdForYes: 1,
		no: 11,
	},
	{
		id: 3,
		question: 'Do you feel 100% comfortable with JavaScript?',
		yes: 6,
		no: 4,
	},
	{
		id: 4,
		question: 'Do you want to be in the top 10% of JavaScript Developers?',
		courseIdForYes: 6,
		no: 5,
	},
	{
		id: 5,
		question: 'Do you want to make your portfolio stand out/become a freelancer?',
		courseIdForYes: 10,
		no: 0,
	},
	{
		id: 6,
		question: 'Are you looking to get a job ASAP/Become a Senior Developer / Learn modern skills that are in demand?',
		yes: 8,
		no: 7,
	},
	{
		id: 7,
		question: 'Did you miss out on a Computer Science Degree? Do you want to work for Google, Amazon, Facebook, ' +
			'Netflix, Microsoft? Do you have a tough time getting interviews and job offers?',
		courseIdForYes: 5,
		no: 4,
	},
	{
		id: 8,
		question: 'Do you want to focus on Fullstack + learn Backend?',
		courseIdForYes: 2,
		no: 9,
	},
	{
		id: 9,
		question: 'Do you want to be a Frontend Developer or become an expert with React?',
		courseIdForYes: 3,
		no: 7,
	},
	{
		id: 10,
		question: 'Do you want to be a Backend Developer?',
		courseIdForYes: 9,
		no: 9,
	},
	{
		id: 11,
		question: 'Do you want to learn Python or learn about Data Science/Machine Learning',
		courseIdForYes: 7,
		no: 12,
	},
	{
		id: 12,
		question: 'Do you want to be a mobile developer?',
		courseIdForYes: 11,
		no: 13,
	},
	{
		id: 13,
		question: 'Do you want to improve as a programmer?',
		courseIdForYes: 5,
		courseIdForYes2: 6, // JS Advanced currently follows CI
		no: 0,
	},
	{
		id: 14,
		question: 'Do you want to be a Data Scientist/Machine Learning expert?',
		courseIdForYes: 8,
		no: 2,
	},
	{
		id: 15,
		question: 'Do you want to learn about SQL + Databases?',
		courseIdForYes: 4,
		no: 2,
	},
];

const courses = [
	{
		id: 0,
		courseName: 'Learning to Learn [Efficient Learning]',
		academyLink: 'https://academy.zerotomastery.io/p/learning-to-learn-efficient-learning-zero-to-mastery-blueprint',
		udemyLink: 'https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/',
	},
	{
		id: 1,
		courseName: 'The Complete Web Developer in 2020: Zero to Mastery',
		academyLink: 'https://academy.zerotomastery.io/p/complete-web-developer-zero-to-mastery',
		udemyLink: 'https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/',
		yes: 3,
	},
	{
		id: 2,
		courseName: 'The Complete Junior to Senior Web Developer Roadmap',
		academyLink: 'https://academy.zerotomastery.io/p/the-complete-junior-to-senior-web-developer-roadmap',
		udemyLink: 'https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/',
		yes: 10,
	},
	{
		id: 3,
		courseName: 'Complete React Developer 2020',
		academyLink: 'https://academy.zerotomastery.io/p/complete-react-developer-redux-hooks-graphql-zero-to-mastery',
		udemyLink: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/',
		yes: 7,
	},
	{
		id: 4,
		courseName: 'Complete SQL + Databases Bootcamp',
		academyLink: 'https://academy.zerotomastery.io/p/complete-sql-database-bootcamp-zero-to-mastery',
		udemyLink: '',
		yes: 0,
	},
	{
		id: 5,
		courseName: 'Master the Coding Interview: Data Structures + Algorithms',
		academyLink: 'https://academy.zerotomastery.io/p/master-the-coding-interview-data-structures-algorithms',
		udemyLink: 'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/',
		yes: 4,
	},
	{
		id: 6,
		courseName: 'JavaScript: The Advanced Concepts',
		academyLink: 'https://academy.zerotomastery.io/p/advanced-javascript-concepts',
		udemyLink: 'https://www.udemy.com/course/advanced-javascript-concepts/',
		yes: 5,
	},
	{
		id: 7,
		courseName: 'Complete Python Developer in 2020',
		academyLink: 'https://academy.zerotomastery.io/p/complete-python-developer-zero-to-mastery',
		udemyLink: 'https://www.udemy.com/course/complete-python-developer-zero-to-mastery/',
		yes: 14,
	},
	{
		id: 8,
		courseName: 'Complete Machine Learning and Data Science',
		academyLink: 'https://academy.zerotomastery.io/p/complete-machine-learning-and-data-science-bootcamp-zero-to-mastery',
		udemyLink: 'https://www.udemy.com/course/complete-machine-learning-and-data-science-zero-to-mastery/',
		yes: 15,
	},
	{
		id: 9,
		courseName: 'Deno: The Complete Guide',
		academyLink: 'https://academy.zerotomastery.io/p/deno-the-complete-guide-zero-to-mastery',
		udemyLink: 'https://www.udemy.com/course/deno-the-complete-guide-zero-to-mastery/',
		yes: 15,
	},
	{
		id: 10,
		courseName: 'JavaScript Web Projects: 20 Projects to Build Your Portfolio',
		academyLink: 'https://academy.zerotomastery.io/p/javascript-projects',
		udemyLink: 'https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/',
		yes: 0,
	},
	{
		id: 11,
		courseName: 'The Complete React Native',
		academyLink: '',
		udemyLink: '',
		yes: 0,
	},
]

let currentQuestion = 0;
question.innerHTML = questions[currentQuestion].question;

const answerYes = () => {
	if (questions[currentQuestion].yes !== undefined) {
		hideCourse();
		yes.style.display = 'block';
		no.style.display = 'block';
		courseYes.style.display = 'none';
		currentQuestion = questions[currentQuestion].yes;
		question.innerHTML = questions[currentQuestion].question;
	} else if (questions[currentQuestion].courseIdForYes !== undefined) {
		yes.style.display = 'none';
		no.style.display = 'none';
		courseYes.style.display = 'block';
		question.innerHTML = didYouFinish;
		showCourse(questions[currentQuestion].courseIdForYes);
	}
}

const answerNo = () => {
	hideCourse();
	currentQuestion = questions[currentQuestion].no;
	question.innerHTML = questions[currentQuestion].question;
}

const showCourse = (courseId) => {
	let {courseName, academyLink, udemyLink, yes} = courses[courseId];

	courseNameEl.style.display = 'block';
	courseNameEl.innerHTML = courseName;

	if (academyLink !== '') {
		academyEl.style.display = 'block';
		academyEl.innerHTML = `<a href="${academyLink}" target="_blank">Academy</a>`;
	}

	if (udemyLink !== '') {
		udemyEl.style.display = 'block';
		udemyEl.innerHTML = `<a href="${udemyLink}" target="_blank">Udemy</a>`;
	}

	// Link next question to yes button
	currentQuestion = yes;
}

const completeCourse = () => {
	hideCourse();
	yes.style.display = 'block';
	no.style.display = 'block';
	courseYes.style.display = 'none';
	question.innerHTML = questions[currentQuestion].question;
}

const hideCourse = () => {
	courseNameEl.style.display = 'none'
	academyEl.style.display = 'none'
	udemyEl.style.display = 'none'
}

yes.addEventListener('click', answerYes);
no.addEventListener('click', answerNo);

