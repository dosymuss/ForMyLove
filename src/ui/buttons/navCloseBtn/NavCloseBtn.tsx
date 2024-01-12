import { FC } from "react";
import { TNavbar } from "../../../types/types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./NavCloseBtn.module.scss"


const NavCloseBtn: FC<TNavbar> = ({ open, setOpen, color }) => {
  return (
    <button className={styles.btn} style={{color:color}} onClick={()=>setOpen(!open)}>
      <p>{open ? "Close" : "Open"}</p>
      {open ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
    </button>
  );
};

export default NavCloseBtn;
