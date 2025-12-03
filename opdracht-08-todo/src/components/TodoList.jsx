const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10 bg-blue-700/30 rounded-xl border border-blue-600/40">
        <div className="text-blue-300/70 mb-3">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
        </div>
        <p className="text-white/90">Geen taken toegevoegd</p> {/* WITTE tekst */}
        <p className="text-sm text-white/70 mt-1">Voeg hierboven je eerste taak toe</p> {/* WITTE tekst */}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex items-center p-4 bg-blue-700/40 border border-blue-600/50 rounded-lg hover:bg-blue-700/50 transition-all duration-200"
        >
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-blue-500 text-white rounded-full font-medium border border-blue-400">
              {index + 1}
            </div>
            <span className="text-white text-lg font-medium">{todo}</span> {/* WITTE tekst */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;