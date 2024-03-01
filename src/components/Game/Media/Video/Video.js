import ReactPlayer from "react-player";
import styles from "./Video.module.scss";

export function Video(props) {
  const { video } = props;

  return (
    <ReactPlayer
      className={styles.video}
      url={video}
      width="100%"
      height={634}
    />
  );
}
