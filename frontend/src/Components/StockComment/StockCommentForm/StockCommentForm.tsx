import React from 'react'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type Props = {
    symbol: string;
    handleComment: (e: CommentFormInputs) => void;
};
type CommentFormInputs ={
    title: string;
    content: string;
}

const validation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

function StockCommentForm({symbol, handleComment}: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<CommentFormInputs>({ resolver: yupResolver(validation) });
  return (
    <form className="mt-6 ml-6 space-y-6" onSubmit={handleSubmit(handleComment)}>
  <div className="relative">
    <input
      type="text"
      id="title"
      className="w-full p-3 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300"
      placeholder="Title"
      {...register("title")}
    />
    {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
  </div>

  <div className="relative">
    <textarea
      id="comment"
      rows={6}
      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300"
      placeholder="Write a comment..."
      {...register("content")}
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full py-3 px-6 text-sm font-semibold text-white bg-lightGreen rounded-lg shadow-md hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 transition-all duration-300"
  >
    Post comment
  </button>
</form>

  )
}

export default StockCommentForm