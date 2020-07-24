import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import axios from 'axios';

const MoviePage = (props) => {
    const router = useRouter();
    const { moviePreview } = props;
  
      return (
       <Layout>
        { moviePreview ?
        <div className="movie-page">
          <img src={moviePreview.poster} alt="My_movies" className="app-logo details-poster" />
          <h4 className="details-title">{moviePreview.title.toUpperCase()}</h4>
          <p className="color-sienna">{moviePreview.genres.join(', ')}</p>
          <p className="detail-stats">
            <span>YEAR: {moviePreview.year}</span>
            <span>RUNTIME {moviePreview.runtime} min.</span>
            <span>RATING: 4.2/5</span>
          </p>
          <p className="details-overview">{moviePreview.overview}</p>
          <div className="posters-panel"></div>
          
        </div>
        :
        <h2 style={{color: 'white', textAlign: 'center' }}>Movie not found</h2>}
        </Layout>   
      )
  }


MoviePage.getInitialProps = async (ctx) => {
    const { query } = ctx;
    const res = await axios.get(`http://my-json-server.typicode.com/A-H-Petkov/movies/movieList/${query.movieId}`);
    const data = await res.data;
    return {moviePreview: data}
}  

export default MoviePage;