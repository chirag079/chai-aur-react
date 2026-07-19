import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo({
      todo: todo.trim(),
      completed: false,
    });

    setTodo("");
  };

  return (
    <div className="relative mx-auto mb-12 max-w-4xl">


      {/* Paper */}
      <form
        onSubmit={add}
        className="
          relative
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-[#ead8b4]
          bg-[#fffaf0]
          px-6
          py-5
          shadow-[0_12px_30px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]
        "
      >
        {/* Decorative lines */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">

          <div className="absolute left-0 top-12 h-px w-full bg-[#f1e4c9]" />

          <div className="absolute left-0 top-24 h-px w-full bg-[#f1e4c9]" />

        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="What's on your mind today?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="
            relative
            z-10
            flex-1
            bg-transparent
            text-2xl
            text-[#4b3425]
            placeholder:text-[#a68b6b]
            outline-none
            font-['Patrick_Hand']
          "
        />

        {/* Button */}
        <button
          type="submit"
          className="
            relative
            z-10
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#7c3f2d]
            px-6
            py-3
            text-white
            font-semibold
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#633121]
            hover:shadow-xl
            active:scale-95
          "
        >
          <FiPlus size={18} />
          Pin Note
        </button>

        {/* Folded paper corner */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-8
            w-8
            rounded-tl-lg
            bg-[#f6e9c8]
            shadow-[-2px_-2px_6px_rgba(0,0,0,0.08)]
          "
          style={{
            clipPath: "polygon(100% 0,0 100%,100% 100%)",
          }}
        />
      </form>
    </div>
  );
}

export default TodoForm;