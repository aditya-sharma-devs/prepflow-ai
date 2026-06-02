function QuizzesPage() {
  
  function handleGenerate(event){
    event.preventDefault()
    alert("Quiz generated")
  }
  const quizzes = [

    {
      title: "DSA Fundamentals",
      category: "DSA",
      questions: 10,
      difficulty: "Beginner",
      duration: "15 min",
      description:
        "Test arrays, loops, basic logic, time complexity, and problem-solving fundamentals.",
    },
    {
      title: "Frontend Basics",
      category: "Web Dev",
      questions: 12,
      difficulty: "Beginner",
      duration: "18 min",
      description:
        "Practice HTML, CSS, JavaScript basics, DOM, components, and UI fundamentals.",
    },
    {
      title: "Backend & Database",
      category: "Backend",
      questions: 10,
      difficulty: "Intermediate",
      duration: "20 min",
      description:
        "Check your understanding of APIs, Express, MongoDB, authentication, and models.",
    },
  ];

  return (
    <div className="quizzes-page">
      <div className="page-header">
        <h1>Quizzes</h1>
        <p>Generate topic-based quizzes and test your preparation level.</p>
      </div>

      <div className="quizzes-summary">
        <div className="quiz-summary-card">
          <span>Total Quizzes</span>
          <h2>{quizzes.length}</h2>
        </div>

        <div className="quiz-summary-card">
          <span>Best Score</span>
          <h2>0%</h2>
        </div>

        <div className="quiz-summary-card">
          <span>Accuracy</span>
          <h2>0%</h2>
        </div>
      </div>

      <section className="quiz-generator">
        <div>
          <h2>Generate AI Quiz</h2>
          <p>Enter any topic and create a custom quiz for practice.</p>
        </div>

        <form className="quiz-generator-form">
          <input
            type="text"
            placeholder="Example: DBMS, React, Operating Systems, DSA..."
          />

          <button type="submit" onClick={handleGenerate}>Generate Quiz</button>
        </form>
      </section>

      <section className="saved-quizzes-section">
        <div className="section-title">
          <h2>Available Quizzes</h2>
          <p>Start a quiz and track your performance later.</p>
        </div>

        <div className="quizzes-grid">
          {quizzes.map((quiz, index) => (
            <div className="quiz-card" key={index}>
              <div className="quiz-card-top">
                <span>{quiz.category}</span>
                <small>{quiz.difficulty}</small>
              </div>

              <h2>{quiz.title}</h2>
              <p>{quiz.description}</p>

              <div className="quiz-meta">
                <div>
                  <strong>{quiz.questions}</strong>
                  <small>Questions</small>
                </div>

                <div>
                  <strong>{quiz.duration}</strong>
                  <small>Duration</small>
                </div>
              </div>

              <button className="quiz-start-btn">Start Quiz</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default QuizzesPage;