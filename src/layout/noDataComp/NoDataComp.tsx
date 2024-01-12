import noDataImage from "../../image/noDataImage.svg"

import styles from "./NoDataComp.module.scss"

const NoDataComp = () => {
  return (
    <div className={styles.main}>
        <img src={noDataImage} alt="" />
    </div>
  )
}

export default NoDataComp