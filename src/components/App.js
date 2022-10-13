import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  //
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(questions => setQuestions(questions))
  }, [])

  //
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }
  //delete function
  function handleDeleteQuestions(deletedItem) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedItem.id)
    setQuestions(updatedQuestions)
  }

  //update patch
  function handleupdateQuestion(updatedQuestion) {
    const updateQuestion = questions.map((question) => {
        if (question.id === updatedQuestion.id) return updatedQuestion

        return question

      })
    
    setQuestions(updateQuestion)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onUpdateQuestion={handleAddQuestion} /> : <QuestionList
        updateQuestion={handleupdateQuestion} questions={questions} setQuestions={setQuestions} onDelete={handleDeleteQuestions} />}
    </main>
  );
}

export default App;
