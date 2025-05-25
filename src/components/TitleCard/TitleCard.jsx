import "./TitleCard.css";
import card_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCard = ({title,category}) => {
  const [apiData,setApiData]=useState([])
  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTY0ZjQxZTE2ZjRiYjgwZGY2ZDM3YTJkYmZlNWI2MSIsIm5iZiI6MTY5OTIxNzI3Mi45NDMsInN1YiI6IjY1NDdmZjc4OWNjNjdiMDBjNDQ0MmE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PILMf3W6oeuyySju8Y-96IKsoScPyErNRRviMUIsX90'
  }
};

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt={`Card-${card.original_title}`} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default TitleCard;
