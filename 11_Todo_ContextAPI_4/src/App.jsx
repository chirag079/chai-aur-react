import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { FiCheckCircle, FiClock, FiClipboard } from "react-icons/fi";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => [
      {
        id: Date.now(),
        ...todo,
      },
      ...prev,
    ]);
  }

  function updateTodo(id, todo) {
    setTodos((prev) =>
      prev.map((currTodo) =>
        currTodo.id === id ? { ...currTodo, ...todo } : currTodo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completed = todos.filter((todo) => todo.completed).length;
  const remaining = todos.length - completed;

  return (
    <TodoContextProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      {/* Background */}
      <div className="min-h-screen bg-[#7b5538] p-6 md:p-10">

        {/* Wooden Frame */}
        <div className="mx-auto max-w-7xl rounded-[34px] border-[14px] border-[#5a3921] bg-[#c89b68] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">

          {/* Cork Board */}
          <div className="rounded-3xl border border-[#d7b48c] bg-[#d9b382] p-8">

            {/* Header */}

            <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <h1 className="text-5xl font-black tracking-tight text-[#3d2413]">
                  📌 PinBoard
                </h1>

                <p className="mt-3 max-w-lg text-lg text-[#65452d]">
                  Capture ideas, pin your tasks, and clear your board one note at
                  a time.
                </p>
              </div>

              {/* Stats */}

              <div className="grid grid-cols-3 gap-4">

                <div className="rounded-2xl border border-[#c89a67] bg-[#fffaf1]/90 px-5 py-4 shadow-md">
                  <div className="mb-2 flex items-center gap-2 text-[#7c5c41]">
                    <FiClipboard />
                    <span className="text-sm font-semibold">Pinned</span>
                  </div>

                  <h2 className="text-3xl font-bold text-[#382113]">
                    {todos.length}
                  </h2>
                </div>

                <div className="rounded-2xl border border-[#c89a67] bg-[#fffaf1]/90 px-5 py-4 shadow-md">
                  <div className="mb-2 flex items-center gap-2 text-green-700">
                    <FiCheckCircle />
                    <span className="text-sm font-semibold">Done</span>
                  </div>

                  <h2 className="text-3xl font-bold text-green-700">
                    {completed}
                  </h2>
                </div>

                <div className="rounded-2xl border border-[#c89a67] bg-[#fffaf1]/90 px-5 py-4 shadow-md">
                  <div className="mb-2 flex items-center gap-2 text-orange-700">
                    <FiClock />
                    <span className="text-sm font-semibold">Left</span>
                  </div>

                  <h2 className="text-3xl font-bold text-orange-700">
                    {remaining}
                  </h2>
                </div>

              </div>
            </div>

            {/* Form */}

            <TodoForm />

            {/* Notes */}

            {todos.length === 0 ? (
              <div className="mt-16 rounded-3xl border-2 border-dashed border-[#b48759] bg-[#fff9f2]/60 py-24 text-center">

                <div className="text-6xl">📌</div>

                <h2 className="mt-6 text-3xl font-bold text-[#55331d]">
                  Nothing pinned yet
                </h2>

                <p className="mt-3 text-[#6d4a2e]">
                  Add your first note and start filling your board.
                </p>

              </div>
            ) : (
              <div
                className="
                mt-12
                grid
                gap-8
                sm:grid-cols-2
                xl:grid-cols-3
              "
              >
                {todos.map((todo, index) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;