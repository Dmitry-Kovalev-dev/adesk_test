import './index.css'

const questions = document.querySelectorAll('.faq__text');

const toggleAnwer = (answerEl) => {
  answerEl.classList.toggle('faq__answer-box_off');
};

questions.forEach((question) => {
  question.addEventListener('click', (evt) => {
    toggleAnwer(evt.target.nextElementSibling);
  });
});
