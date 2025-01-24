import React from 'react'
import { CommentGet } from '../../Models/Comment';
import StockCommentListItem from '../StockCommentListItem/StockCommentListItem';

type Props = {
    comments: CommentGet[];
}

const StockCommentList = ({comments}: Props) => {
  return (
    <>
    <span className="text-xl font-semibold text-gray-900 uppercase tracking-wide p-4">Comments:</span>

        {comments ? comments.map((comment) => {
            return <StockCommentListItem comment={comment}/>;
        })
    :""}
    </>
  )
}

export default StockCommentList