import CarouselShow from "../carousel-show/CarouselShow";
import styles from "./carousel.module.css";

export default function Carousel(props) {

  return (
    <>
      <section className={styles.carousel}>
        <div className={styles.shows}>
          {
            props.movies.map((movie) => {
              return <CarouselShow movie= {movie}/>
            })
          }        
        </div>
      </section>
    </>
  );
}
