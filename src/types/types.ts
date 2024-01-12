import { Dispatch, SetStateAction } from "react";

export type TNavbar = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  color?: string;
};

export interface IImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  isLike?: boolean;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}


export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}
