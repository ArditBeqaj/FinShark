import React from 'react';
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';
import { useAuth } from '../../Context/useAuth'; // Assuming you have a custom useAuth hook

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const { token } = useAuth(); // Retrieve the token from your authentication context

  const handleComment = (e: CommentFormInputs) => {
    if (!token) {
      toast.error('You must be logged in to post a comment.');
      return;
    }

    commentPostAPI(e.title, e.content, stockSymbol, token) // Pass the token here
      .then((res) => {
        if (res) {
          toast.success('Comment created successfully!');
        }
      })
      .catch((error) => {
        // Handle error messages gracefully
        const errorMessage =
          error.response?.data?.message || 'Failed to post comment.';
        toast.error(errorMessage);
      });
  };

  return <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />;
};

export default StockComment;
