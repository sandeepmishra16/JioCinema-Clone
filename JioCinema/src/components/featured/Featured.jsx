import FeaturedShow from "../featured-show/FeaturedShow";
import styles from "./featured.module.css";

export default function Featured(props) {
  
  return (
    <>
      <section className={styles.featured}>
        <h1>Hot Right Now</h1>
        <div className={styles.shows}>
          {
            props.movies.map((movie) => {
              return <FeaturedShow movie= {movie}/>
            })
          }
        </div>  
      </section>
    </>
  );
}
