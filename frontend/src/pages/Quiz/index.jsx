import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { GoRuby } from 'react-icons/go';
import { HiMenuAlt4 } from 'react-icons/hi';
import { CgRadioCheck, CgCheckO } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import dataQuestions from '../../questions';

import Header from '../../components/Header';
import BarNavigation from '../../components/BarNavigation';

import './styles.css';

const Quiz = () => {
  const calcBarPorcent = 100 / dataQuestions.length;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [barProgress, setBarProgress] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  const notify = () =>
    toast('Putz, resposta incorreta :(', {
      position: 'top-right',
      className: 'toast-background',
      autoClose: 1500,
      progressStyle: { background: '#FFF' },
    });

  function handleAnswer(isCorrect) {
    setBarProgress(barProgress + calcBarPorcent);
    if (isCorrect) {
      setScore(score + 1);
    } else {
      notify();
    }

    let nextQuestion = currentQuestion + 1;

    if (nextQuestion < dataQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setTimeout(() => {
        setShowScore(true);
      }, 1000);
    }
  }

  return (
    <>
      <section className='container'>
        {showScore ? (
          <>
            <Header />
            <div className='box-score'>
              <div className='container-stars'>
                <div className='first-star'></div>
                <div className='first-star'></div>
                <div className='first-star'></div>
                <div className='first-star'></div>
                <div className='first-star'></div>
              </div>
              <p>
                <span>Parabéns!!</span> <br /> Você acertou {score}/
                {dataQuestions.length}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className='section-header'>
              <div className='header-top'>
                <Link to='/'>
                  <FaChevronLeft size={20} color='fff' />
                </Link>
                <p>
                  8
                  <GoRuby size={30} color='var(--secundary-color)' />
                </p>

                <HiMenuAlt4 size={30} color='#FFF' />
              </div>
              <span>
                <div className='bar-progress'>
                  <div
                    className='level-progress'
                    style={{ width: `${barProgress}%` }}
                  ></div>
                </div>
                <div className='numbers-questions'>
                  {currentQuestion + 1}/{dataQuestions.length}
                </div>
              </span>
            </div>
            <div className='section-answers'>
              <p>{dataQuestions[currentQuestion].questionTitle}</p>

              {dataQuestions[currentQuestion].answerOptions.map(
                (answerData) => (
                  <button
                    key={answerData.answer}
                    onClick={() => handleAnswer(answerData.isCorrect)}
                  >
                    {answerData.answer}
                    {checked ? (
                      <CgCheckO size={20} />
                    ) : (
                      <CgRadioCheck size={20} />
                    )}
                  </button>
                )
              )}
            </div>
          </>
        )}

        <BarNavigation />
      </section>
    </>
  );
};

export default Quiz;
