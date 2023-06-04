import { useEffect, useState } from 'react';
import { getQuestions, AvailableQuestions } from '../QuestionInstance';
import { useNavigate } from 'react-router-dom';

export default function Question() {
  const navigate = useNavigate();

  getQuestions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    AvailableQuestions[currentIndex]
  );

  useEffect(() => {
    if (currentIndex + 1 > AvailableQuestions.length) {
      var dict = {};
      for (var i = 1; i <= 14; i++) {
        dict[i + ''] = localStorage.getItem(i + '');
      }

      var sortedResult = Object.keys(dict).map(function (key) {
        return [key, dict[key]];
      });

      sortedResult.sort(function (first, second) {
        return second[1] - first[1];
      });

      var most = sortedResult[0][0];
      console.log(sortedResult);

      navigate(`/result/${most}`);
    } else setCurrentQuestion(AvailableQuestions[currentIndex]);
  }, [currentIndex]);

  const selectAns = (data) => {
    currentQuestion.select(data);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://www.careerlines.in/assets/img/logo.png"
                alt=""
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Project O
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Chi tiết <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-2xl sm:py-40 lg:py-40 py-40">
          <div className="text-left pl-5 pb-5 bg-white rounded-lg drop-shadow-xl">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl py-10">
              {currentQuestion.questionContent}
            </h1>
            <h3>
              <b>A. </b>
              {Object.keys(currentQuestion.answerData)[0]}
            </h3>
            <h3>
              <b>B. </b>
              {Object.keys(currentQuestion.answerData)[1]}
            </h3>
            <h3>
              <b>C. </b>
              {Object.keys(currentQuestion.answerData)[2]}
            </h3>
            <h3>
              <b>D. </b>
              {Object.keys(currentQuestion.answerData)[3]}
            </h3>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  selectAns(Object.keys(currentQuestion.answerData)[0]);
                }}
              >
                A
              </button>

              <button
                className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  selectAns(Object.keys(currentQuestion.answerData)[1]);
                }}
              >
                B
              </button>

              <button
                className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  selectAns(Object.keys(currentQuestion.answerData)[2]);
                }}
              >
                C
              </button>

              <button
                className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  selectAns(Object.keys(currentQuestion.answerData)[3]);
                }}
              >
                D
              </button>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {currentIndex + 1}/{AvailableQuestions.length}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
}
