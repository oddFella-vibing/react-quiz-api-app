import { useEffect, useState } from "react";
import SingleQuiz from "../components/SingleQuiz";

import ScoreScreen from "../components/ScoreScreen";
import Loading from "../components/loading";

const MainPage = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizess, setQuizess] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    setCurrentQ(0);
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setQuizess(data.results);
        console.log(data.results);
        setLoading(true);
      })

      .catch((error) => console.log(error));
  }, []);

  function gatherAnswers(answer: string) {
    let newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    console.log(answers.length);
  }

  function handleNext() {
    let nextq = currentQ + 1;
    setCurrentQ(nextq);
  }
  function handlePrev() {
    let prevq = currentQ - 1;
    setCurrentQ(prevq);
  }
  return currentQ < 10 ? (
    !loading ? (
      <Loading />
    ) : (
      <SingleQuiz
        // quizex={quizex}
        quizex={quizess[currentQ]}
        onSelectAns={gatherAnswers}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    )
  ) : (
    <ScoreScreen score={answers.length} />
  );
};

export default MainPage;
