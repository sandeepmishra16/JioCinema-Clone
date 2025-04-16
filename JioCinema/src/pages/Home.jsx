import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Tags from "../components/tags/Tags";
import Carousel from "../components/carousel/Carousel";
import Channels from "../components/channels/Channels";
import Featured from "../components/featured/Featured";
import Shows from "../components/shows/Shows";
import Footer from "../components/footer/Footer";

export default function Home() {

    let [movies, setMovies] = useState([]);
    let [carouselMovies, setCarouselMovies] = useState([]);
    let [featuredMovies, setFeaturedMovies] = useState([]);
    let [topMovies, setTopMovies] = useState([]);
    let [dramaMovies, setDramaMovies] = useState([]);
    let [bolliwoodMovies, setBolliwoodMovies] = useState([]);

    useEffect(async () => {

        try {
            let movieResponse = await fetch("http://localhost:3000/movies");
            let moviesData = await movieResponse.json();
            setMovies(moviesData);

            //filter for Carousel movies

            let carMovies = moviesData.filter((movie) => {
                return movie.featured === true;
            });
            console.log(carouselMovies);
            //we get only 3 movies with the help of slice method
            setCarouselMovies(carMovies.slice(0, 4));

            // filter for Top movies

            let topRatedMovies = moviesData.filter((movie) => {
                return movie.imdb >= 8.5;
            });
            console.log(topRatedMovies);
            //we get only 6 movies with the help of slice method
            setTopMovies(topRatedMovies.slice(0, 6));    

            // filter for featured movies

            let featMovies = moviesData.filter((movie) => {
                return movie.featured === true;
            });
            console.log(featMovies);
            //we get only 5 movies with the help of slice method
            setFeaturedMovies(featMovies.slice(0, 5));

            // filter for Drama movies

            let drMovies = moviesData.filter((movie) => {
                return movie.genre.includes("Drama");
            });
            console.log(drMovies);
            //we get only 6 movies with the help of slice method
            setDramaMovies(drMovies.slice(0, 6));

            // filter for Bolliwood movies

            let bolMovies = moviesData.filter((movie) => {
                return movie.language === "Hindi";
            });
            console.log(bolMovies);
            //we get only 6 movies with the help of slice method
            setBolliwoodMovies(bolMovies.slice(0, 6));

        } catch(error) {
            console.log(error);
        }

    },[]);

    return(
        <>
            <Header movies = {movies}/>
            <Tags/>
            <Carousel movies={carouselMovies} />
            <Channels/>
            <Featured movies={featuredMovies} />   
            <Shows title= "Highly Rated Movies" movies={topMovies} />
            <Shows title= "Drama Movies" movies={dramaMovies} />
            <Shows title= "Bolliwood Movies" movies={bolliwoodMovies} />
            <Footer/>
        </>
    )
}
