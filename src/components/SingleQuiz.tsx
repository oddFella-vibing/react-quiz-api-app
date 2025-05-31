import  { useEffect, useState } from "react";
import type { QuizzType } from "../types";

interface QuizPropType {
  quizex: QuizzType;
  onSelectAns: (a: string) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const SingleQuiz = ({
  quizex,
  onSelectAns,
  handleNext,
  handlePrev,
}: QuizPropType) => {
  const [isCheck, setIsCheck] = useState(false);
  const [selected, setIsSelected] = useState("");
  const [shuffleanswers, setShuffleanswers] = useState([""]);
  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const quesarray: string[] = [...quizex.incorrect_answers];
  quesarray.push(quizex.correct_answer);

  useEffect(() => {
    setShuffleanswers(shuffle(quesarray));
  }, [quizex]);

  function handleCheck() {
    setIsCheck(!isCheck);
  }
  function onSelect(ans: string) {
    setIsSelected(ans);
   
  }
  function onhandleNext(){
    handleNext();
    setIsCheck(false);
     selected==quizex.correct_answer&&onSelectAns(selected);
  }
  function onhandlePrev(){
    handlePrev();
    setIsCheck(false);
     selected==quizex.correct_answer&&onSelectAns(selected);
  }
  return (
    <>
      <div className="flex flex-col py-30 px-20 gap-10 text-white">
        <p>{quizex.question}</p>
        <ul className="flex flex-col gap-5">
          {shuffleanswers.map((a, i) => {
            return isCheck ? (
              <button
                key={i}
                 style={selected===a? {backgroundColor:'rgba(91, 136, 250, 0.283)'}:{}}
                className="generalButt flex flex-row justify-center gap-2"
              >
                <p>{a}</p>
                {a === quizex.correct_answer ? (
                  <img
                    src="src/assets/check_circle_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="correct"
                  />
                ) : (
                  <img
                    src="src/assets/cancel_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="incorrect"
                  />
                )}
              </button>
            ) : (
              <button
              style={selected===a? {backgroundColor:'rgba(91, 136, 250, 0.283)'}:{}}
                key={i}
                onClick={() => onSelect(a)}
                className="generalButt"
              >
                {a}
              </button>
            );
          })}
        </ul>
        <div className="flex flex-row justify-between">
          <button onClick={() => onhandlePrev() } className="arrowButt"> &lt; </button>
          <button className="generalButt" onClick={() => handleCheck()}>
            check answer
          </button>
          <button onClick={() => onhandleNext()} className="arrowButt">&gt;</button>
        </div>
      </div>
    </>
  );
};

export default SingleQuiz;
