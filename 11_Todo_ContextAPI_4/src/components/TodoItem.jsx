
import { useEffect, useState } from "react";
import { FiCheck, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useTodo } from "../contexts";

const paperColors = [
  "bg-[#FFF8E8]",
  "bg-[#EEF8EE]",
  "bg-[#F4EEFF]",
  "bg-[#EDF7FF]",
  "bg-[#FFF1E8]",
];

const rotations = [
  "rotate-[2deg]",
  "-rotate-[2deg]",
  "rotate-[1deg]",
  "-rotate-[1deg]",
  "rotate-[3deg]",
];

function TodoItem({ todo, index }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  useEffect(() => {
    setTodoMsg(todo.todo);
  }, [todo.todo]);

  const editTodo = () => {
    if (!todoMsg.trim()) return;

    updateTodo(todo.id, {
      ...todo,
      todo: todoMsg.trim(),
    });

    setIsTodoEditable(false);
  };

  return (
    <div
      className={`
        group
        relative
        min-h-[260px]
        overflow-hidden
        rounded-xl
        border
        border-[#e4d5bd]
        ${paperColors[index % paperColors.length]}
        ${rotations[index % rotations.length]}
        p-6
        shadow-[0_12px_30px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:-translate-y-3
        hover:rotate-0
        hover:shadow-[0_22px_45px_rgba(0,0,0,0.25)]
      `}
    >
      {/* Notebook Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-14 left-0 h-px w-full bg-[#e6d7bf]" />
        <div className="absolute top-24 left-0 h-px w-full bg-[#e6d7bf]" />
        <div className="absolute top-34 left-0 h-px w-full bg-[#e6d7bf]" />
        <div className="absolute top-44 left-0 h-px w-full bg-[#e6d7bf]" />
        <div className="absolute top-54 left-0 h-px w-full bg-[#e6d7bf]" />
      </div>

      {/* Metallic Pin */}
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-6 w-6 rounded-full border border-zinc-400 bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 shadow-lg">
          <div className="absolute left-1/2 top-5 h-5 w-[2px] -translate-x-1/2 rounded-full bg-zinc-700" />
        </div>
      </div>

      {/* Completed Stamp */}
      {todo.completed && (
        <div className="absolute right-5 top-5 rotate-12 rounded-md border-2 border-red-500 px-3 py-1 text-xs font-black tracking-[0.3em] text-red-600 opacity-70">
          DONE
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 mt-3 flex items-center justify-between">

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="h-5 w-5 cursor-pointer accent-[#7c3f2d]"
          />

          <span className="text-sm font-semibold uppercase tracking-widest text-[#7d5a3d]">
            Note
          </span>
        </label>

        {/* Actions */}
        <div className="flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">

          <button
            type="button"
            disabled={todo.completed}
            onClick={() => {
              if (isTodoEditable) {
                editTodo();
              } else {
                setIsTodoEditable(true);
              }
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#6b442b] shadow transition hover:scale-110 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isTodoEditable ? <FiCheck size={18} /> : <FiEdit2 size={18} />}
          </button>

          <button
            type="button"
            onClick={() => deleteTodo(todo.id)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-red-500 shadow transition hover:scale-110 hover:bg-white"
          >
            <FiTrash2 size={18} />
          </button>

        </div>
      </div>

      {/* Note */}
      <textarea
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`
          relative
          z-10
          mt-6
          h-[150px]
          w-full
          resize-none
          bg-transparent
          text-[1.55rem]
          leading-10
          outline-none
          font-['Patrick_Hand']
          text-[#3b2d24]

          ${
            isTodoEditable
              ? "rounded-lg bg-white/40 px-2"
              : ""
          }

          ${
            todo.completed
              ? "line-through text-[#8d7b68]"
              : ""
          }
        `}
      />

      {/* Folded Corner */}
      <div
        className="absolute bottom-0 right-0 h-10 w-10 bg-white/40 shadow-[-2px_-2px_5px_rgba(0,0,0,0.08)]"
        style={{
          clipPath: "polygon(100% 0,0 100%,100% 100%)",
        }}
      />
    </div>
  );
}

export default TodoItem;

