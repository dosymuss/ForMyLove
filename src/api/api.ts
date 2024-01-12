import axios from "axios";
import { IImage, ITodo, IUsers } from "../types/types";

const IMAGES_API = "https://jsonplaceholder.typicode.com/photos?_limit=50";
const TODO_API = "https://jsonplaceholder.typicode.com/todos?_limit=25";
const USERS_API = "https://jsonplaceholder.typicode.com/users"

export const getImages = async (): Promise<IImage> => {
  try {
    const res = await axios.get<IImage>(IMAGES_API);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// export const getTodos = async (): Promise<ITodo> => {
//   try {
//     const res = await axios.get<ITodo>(TODO_API);
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getUsers =async () => {
  try {
    const res = await axios.get<IUsers>(USERS_API)
    return res.data
  } catch (error) {
    throw error
  }
}
