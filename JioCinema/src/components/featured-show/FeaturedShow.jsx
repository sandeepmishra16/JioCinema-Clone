import styles from "./featured-show.module.css";

export default function FeaturedShow(props) {
  return (
    <>
        <div className={styles.featuredShow}>
            <img src = {props.movie.imageUrl} alt="movie poster" />
            <div className={styles.movieTitle}>
              {props.movie.name}
            </div>
        </div>
    </>
  )
}
