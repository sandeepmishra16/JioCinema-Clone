import styles from "./carousel-show.module.css";

export default function CarouselShow(props) {

  return (
    <>
      <div className={styles.carouselShow}>
        <img src = {props.movie.imageUrl} alt="movie poster" />
      </div>
    </>
  )
}
