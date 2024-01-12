import { FC, useState } from "react";
import { IImage } from "../../types/types";
import smileIcon from "../../image/smile.svg"
import menuIcon from "../../image/menuIcon.svg"
import likeIcon from "../../image/likeIcon.svg"
import likeActIcon from "../../image/likeAct.svg"
import closeIcon from "../../image/closeIcon.svg"

import styles from "./Card.module.scss";

const Card:FC<IImage> = ({albumId,id,thumbnailUrl,title,url, isLike}) => {
    const [clickDesc, setClickDesc] = useState<boolean>(false)
    const [clickLike, setClickLike] = useState<boolean| undefined>(isLike)

    const clickLikeFunc = ():void=>{
        if(clickLike){
            let likesListLocal = localStorage.getItem("likes")
            let likesList:number[] = likesListLocal? JSON.parse(likesListLocal):[]
            const newList = likesList.filter(item=>item!==id)
            localStorage.setItem("likes", JSON.stringify(newList))
            setClickLike(!clickLike)
        }
        else{
            let likesListLocal = localStorage.getItem("likes")
            let likesList:number[] = likesListLocal? JSON.parse(likesListLocal):[]
            likesList.push(id)
            localStorage.setItem("likes", JSON.stringify(likesList))
            setClickLike(!clickLike)
        }
    }

  return (
    <div className={styles.main}>
      <img src={url} alt="" />
      <div className={styles.btnDiv}>
        <button onClick={()=>setClickDesc(true)}>
          <img src={menuIcon} alt="" />
        </button>
        <button>
          <img src={smileIcon} alt="" />
        </button>
        <button onClick={clickLikeFunc}>
          <img src={clickLike?likeActIcon:likeIcon} alt="" />
        </button>
      </div>
      <div className={clickDesc?styles.modal:styles.modalHiden}>
        <p>
            {title}
        </p>
        <button onClick={()=>setClickDesc(false)}>
            <img src={closeIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
