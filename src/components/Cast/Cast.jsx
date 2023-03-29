import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'services/api_movie';
import { ItemCast, List, ActorInfo } from './Cast.styled';

const defaultImage =
  'https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_960_720.png';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchMovieActors(movieId)
      .then(data => {
        setActors(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <List>
      {actors.length !== 0 ? (
        actors.map(({ name, character, id, profile_path }) => (
          <ItemCast key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultImage
              }
              alt=""
              width="200"
              height="300"
            />
            <ActorInfo>
              <b>{name}</b>
            </ActorInfo>
            <ActorInfo>
              <b>Role: </b>
              {character}
            </ActorInfo>
          </ItemCast>
        ))
      ) : (
        <p>We did not find information</p>
      )}
    </List>
  );
};

export default Cast;
