import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./NavBtn.module.scss";

type TNavBtn = {
  text: string;
  path: string;
  click: boolean;
  setClick: Dispatch<SetStateAction<boolean>>;
};

const NavBtn = ({ text, path, click, setClick }: TNavBtn) => {
  const [selection, setSelection] = useState<boolean>(false);

  const { pathname } = useLocation();

  const truePath = (): void => {
    if (pathname.includes(text)) {
      setSelection(true);
    }
  };

  useEffect(() => {
    truePath();
  }, [pathname]);

  return (
    <div>
      <Link
        onClick={() => setClick(!click)}
        className={selection ? styles.linkActive : styles.link}
        to={path}
      >
        <p>{text}</p>
        <ArrowForwardIosIcon />
      </Link>
    </div>
  );
};

export default NavBtn;
