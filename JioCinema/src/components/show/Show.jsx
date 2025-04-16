import styles from "./show.module.css";

export default function Show(props) {
  return (
    <>
      <div className={styles.singleShow}>
        <img src = {props.movie.imageUrl} alt="" />

        <div className={styles.movieTitle}>
          {props.movie.name}
        </div>

      </div>
    </>
  )
}
