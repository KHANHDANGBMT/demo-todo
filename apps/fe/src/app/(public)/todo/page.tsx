"use client";

import { Popconfirm } from "@/components/ui/Popconfirm";
import { useMutation, useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useEffect, useMemo, useState } from "react";

export default function Component() {
  // const [todos, setTodos] = useState<any>([]);
  const [newTodo, setNewTodo] = useState("");

  const listTodos = useQuery({
    queryFn: async () => {
      const result = await fetch("http://localhost:5000/v1/todo/list", {
        method: "GET",
      });
      return await result.json();
    },
    queryKey: ["query list todos"],
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const triggerCompleteTodo = useMutation({
    mutationFn: (todoId: string) =>
      fetch(`http://localhost:5000/v1/todo/${todoId}`, { method: "PUT" }),
    mutationKey: ["trigger-complete-todo"],
  });

  const createTodo = useMutation({
    mutationFn: (todo: any) => {
      console.log(todo, "todo...");
      return fetch("http://localhost:5000/v1/todo/", {
        body: JSON.stringify(todo),
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      listTodos.refetch();
    },
    mutationKey: ["create-todo"],
  });

  const deleteTodoMutation = useMutation({
    mutationFn: (todoId: string) => {
      return fetch(`http://localhost:5000/v1/todo/${todoId}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      listTodos.refetch();
    },
    mutationKey: ["delete-todo"],
  });

  const todos = useMemo(() => {
    return listTodos?.data || [];
  }, [listTodos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      createTodo.mutate({
        name: newTodo,
      });
      setNewTodo("");
    }
  };
  const toggleTodo = (id: any) => {
    triggerCompleteTodo.mutate(id);
  };
  const deleteTodo = (id: any) => {
    deleteTodoMutation.mutate(id);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 overflow-auto max-h-[600px]">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
          Todo App
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
            className="flex-1 px-4 py-2 rounded-l-md bg-gray-100 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-400"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo: any) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between px-4 py-2 rounded-md ${
                todo.completed
                  ? "bg-gray-200 line-through text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                  : "bg-white dark:bg-gray-800 dark:text-gray-200"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo._id)}
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <span>{todo.name}</span>
              </div>
              <Popconfirm onOk={() => deleteTodo(todo._id)}>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                  <TrashIcon className="w-5 h-5" />
                </button>
              </Popconfirm>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
