import LogoForOther from "../ui/logoForOther/LogoForOther";

import { getUsers } from "../api/api";
import { useEffect, useState } from "react";
import UserCard from "../ui/userCard/UserCard";
import { IUsers } from "../types/types";
import userPageBack from "../image/userPageBack.svg"
import LogOutModal from "../layout/logOutModal/LogOutModal";

import styles from "../styles/UserPage.module.scss";



const UsersPage = () => {
  const [data, setData] = useState<IUsers[]>([]);

  const fetchUsers = async () => {
    try {
      const result = await getUsers();
      console.log(result);
      if (Array.isArray(result)) {
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.back}>
        <img src={userPageBack} alt="" />
      </div>
      <LogoForOther item={5} text="Users" />
      <div className={styles.cardDiv}>
        {data.length > 0 &&
          data.map((item) => (
            <UserCard
              address={item.address}
              email={item.email}
              id={item.id}
              key={item.id}
              name={item.name}
              phone={item.phone}
              username={item.username}
              website={item.website}
            />
          ))}
      </div>
    </div>
  );
};

export default UsersPage;
