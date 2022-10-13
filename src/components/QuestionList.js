import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ setQuestions, questions, updateQuestion }) {


  //delete function
  function handleDeleteQuestions(deletedItem) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedItem.id)
    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => <QuestionItem question={question}
        key={question.id} updateQuestion={updateQuestion} onDeleteQuestions={handleDeleteQuestions} />)}</ul>
    </section>
  );
}

export default QuestionList;
