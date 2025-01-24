import React, { useEffect, useState } from 'react';
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentGetAPI, commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';
import { useAuth } from '../../Context/useAuth'; // Assuming you have a custom useAuth hook
import { CommentGet } from '../../Models/Comment';
import Spinner from '../Spinner/Spinner';
import StockCommentList from '../StockCommentList/StockCommentList';

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const { token } = useAuth(); // Retrieve the token from your authentication context
  const [comments, setComment] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

useEffect(() => {
  getComments();
}, []
)

  const handleComment = (e: CommentFormInputs) => {
    if (!token) {
      toast.error('You must be logged in to post a comment.');
      return;
    }

    commentPostAPI(e.title, e.content, stockSymbol, token) // Pass the token here
      .then((res) => {
        if (res) {
          toast.success('Comment created successfully!');
          getComments();
        }
      })
      .catch((error) => {
        // Handle error messages gracefully
        const errorMessage =
          error.response?.data?.message || 'Failed to post comment.';
        toast.error(errorMessage);
      });
  };

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol)
    .then((res) => {
      setLoading(false);
      setComment(res?.data!);
    })
  }
  return (
    <div className="flex flex-col">
      {loading ? <Spinner/> : <StockCommentList comments={comments!}/>}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
)
  
};

export default StockComment;
