import axios from "axios";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5102/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string,
  token: string // Pass token as a parameter
) => {
  try {
    const data = await axios.post<CommentPost>(
      api + `${symbol}`,
      {
        title: title,
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};