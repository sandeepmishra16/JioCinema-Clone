import styles from "./header.module.css";
import mainLogo from "../../assets/JioCinemaLogo.svg";
import crownIcon from "../../assets/crown.svg";
import searchIcon from "../../assets/searchLogo.svg";
import voiceIcon from "../../assets/voice-searchLogo.svg";
import jioIcon from "../../assets/jioLogo.png";
import { useState, useEffect } from "react";
import Show from "../show/Show";


const Header = (props) => {

    let navLinks = ["Home", "Sports", "Movies", "TVShows", "More"];
    let [searchTitle, setSearchTitle] = useState("");
    let [filteredMovies, setFilteredMovies] = useState([]);

    // SearchBox functionality

    useEffect(() => {

        if (searchTitle !== "") {
            let filterMovies = props.movies.filter((movie) => {
                return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase()) === 0
            })
    
            setFilteredMovies(filterMovies);
        } else {
            setFilteredMovies([]); 
        }

    }, [searchTitle]);


    return(
        <>
            <header className={styles.header}>
                {/* Navigation Part */}

                <nav className={styles.navigation}>
                    {/* Main JioCinema logo & Crown logo */}
                    <div className={styles.logo}>                   
                        <img src={mainLogo} alt="JioCinemaLogo"/>
                        <div className={styles.premium}>
                            <img src={crownIcon} alt="crownImage"/>
                            <p>Go premium</p>
                        </div>
                    </div>

                    {/* All the links Eg: Home, Sports, Movies etc. */}
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => {
                            return <li>{link}</li>
                        })}
                    </ul>

                </nav>

                {/* Search Part */}

                <div className={styles.search}>

                    <div className={styles.searchBox}>

                        <div className={styles.searchIcon}>
                            <img src={searchIcon} alt="searchLogo"/>
                        </div>

                        <input 
                            type="text" 
                            placeholder="Movies, Shows and more" 
                            className={styles.searchInput} 
                            onChange={((event) => {
                                setSearchTitle(event.target.value)
                            })}
                        />

                        <div className={styles.searchIcon}>
                            <img src={voiceIcon} alt="voiceLogo"/>
                        </div>

                    </div>
                    <img className={styles.userIcon} src={jioIcon} alt="userIcon"/>
                </div>

            </header>

            {/* Search Result Part */}

            {
                filteredMovies.length !== 0 ? (

                    <div className={styles.searchResults}>
                        {
                            filteredMovies.map((movie) => {
                                return <Show movie = {movie}/>
                            })
                        }
                    </div>
                ) : null
            }

        </>
    )
}

export default Header
