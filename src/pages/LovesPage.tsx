import { useEffect, useState } from "react";
import { getImages } from "../api/api";
import LogoForOther from "../ui/logoForOther/LogoForOther";
import { IImage } from "../types/types";
import Card from "../ui/card/Card";
import NoDataComp from "../layout/noDataComp/NoDataComp";
import lovesPagePosh from "../image/lovesPagePosh.svg";

import styles from "../styles/LovesPage.module.scss";

const LovesPage = () => {
  const [data, setData] = useState<IImage[]>([]);
  const [newData, setNewData] = useState<IImage[]>([]);
  const [showPosh, setShowPosh] = useState<boolean>(false);

  const getImagesData = async () => {
    try {
      const result = await getImages();
      if (Array.isArray(result)) {
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const changeData = () => {
    if (data.length > 0) {
      const likesListLocal = localStorage.getItem("likes");
      const likesList: number[] = likesListLocal
        ? JSON.parse(likesListLocal)
        : [];
      const newList = data.filter((item) => {
        return likesList.includes(item.id);
      });
      if (Array.isArray(newList)) {
        setNewData(newList);
      }
    }
  };

  useEffect(() => {
    getImagesData();
  }, []);

  useEffect(() => {
    changeData();
  }, [data]);

  return (
    <div className={newData.length < 4 ? styles.mainLength : styles.main}>
      <button
        onClick={() => setShowPosh(!showPosh)}
        className={showPosh ? styles.poshBtn : styles.poshBtnHiden}
      >
        <img src={lovesPagePosh} alt="" />
      </button>
      <LogoForOther item={2} text="Loves"/>
      <div className={styles.cardDiv}>
        {newData.length > 0 ? (
          newData.map((item) => {
            return (
              <Card
                id={item.id}
                albumId={item.albumId}
                thumbnailUrl={item.thumbnailUrl}
                title={item.title}
                url={item.url}
                key={item.id}
                isLike={true}
              />
            );
          })
        ) : (
          <NoDataComp />
        )}
      </div>
    </div>
  );
};

export default LovesPage;
