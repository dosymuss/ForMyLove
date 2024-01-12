import { Drawer } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { TNavbar } from "../../types/types";
import NavBtn from "../../ui/buttons/navBtn/NavBtn";

import styles from "./Navbar.module.scss";
import Logo from "../../ui/logo/Logo";
import NavCloseBtn from "../../ui/buttons/navCloseBtn/NavCloseBtn";
import LogOutModal from "../../layout/logOutModal/LogOutModal";

const Navbar: FC<TNavbar> = ({ open, setOpen }) => {
  const [click, setClick] = useState<boolean>(true);
  const [logClick, setLogClick] = useState<boolean>(false);

  useEffect(() => {
    setOpen(!open);
  }, [click]);

  return (
    <div>
      <LogOutModal click={logClick} setClick={setLogClick} />
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(!open)}>
        <div className={styles.main}>
          <Logo />
          <div className={styles.btnDiv}>
            <NavBtn
              text="Users"
              path="/Users"
              click={click}
              setClick={setClick}
            />
            <NavBtn
              text="Images"
              path="/Images"
              click={click}
              setClick={setClick}
            />
            <NavBtn
              text="Todos"
              path="/Todos"
              click={click}
              setClick={setClick}
            />
            <NavBtn
              text="Loves"
              path="/Loves"
              click={click}
              setClick={setClick}
            />
          </div>
          <NavBtn text="Log out" path="/" click={click} setClick={setClick} />

          <NavCloseBtn color="black" open={open} setOpen={setOpen} />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
