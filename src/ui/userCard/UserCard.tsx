import { useState } from "react";
import { IUsers } from "../../types/types";

import bacImg from "../../image/userCardImg.svg";
import menuIcon from "../../image/menuIcon.svg";
import closeIcon from "../../image/closeIcon.svg";

import styles from "./UserCard.module.scss";

const UserCard = ({
  address,
  email,
  id,
  name,
  phone,
  username,
  website,
}: IUsers) => {
  const [descClick, setDescClick] = useState<boolean>(false);
  return (
    <div className={styles.main}>
      <div className={descClick?styles.modal:styles.modalHiden}>
        <button onClick={()=>setDescClick(false)}>
          <img src={closeIcon} alt="" />
        </button>
        <div>
          <p className={styles.username}>{username}</p>
          <p>
            {address.city} {address.street}
          </p>
        </div>
      </div>
      <img className={styles.img} src={bacImg} alt="" />
      <div>
        <p>{name}</p>
        <p className={styles.email}>{email}</p>
        <div className={styles.menuBtnDiv}>
          <p>{phone}</p>
          <button onClick={() => setDescClick(true)}>
            <img src={menuIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
