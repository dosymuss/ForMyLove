import Navbar from "../components/Navbar/Navbar";
import grystImg from "../image/gryst.svg";

import styles from "../styles/Home.module.scss";
import Logo from "../ui/logo/Logo";

const Home = () => {
  localStorage.setItem("likes", JSON.stringify([]))
  return (
    <div className={styles.main}>
      <img className={styles.img} src={grystImg} alt="" />
      <Logo />

      <p className={styles.desc}>
        Это приложение было созданно для моей практики, а также для изучения.
        Приложение сделано для вас чтоб развлечь. Надеюсь вам оно поможет.
      </p>
      <div className={styles.pashDiv}>
        <p>Если ты Nzx, то ищи пасхалки</p>
      </div>
    </div>
  );
};

export default Home;
