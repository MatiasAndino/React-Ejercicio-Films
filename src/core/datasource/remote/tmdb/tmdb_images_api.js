
import axios from 'axios';

const tmdb_images_api = () => {
// const tmdb_images_api = ({idMovie = 0}) => {
  
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/1075794/images',
    //   url: `https://api.themoviedb.org/3/movie/${idMovie}/images`,
      params: {include_image_language: 'en', language: 'en'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODliMzk0M2VmODZhMTczMDc3NWViNzdhMmU5NDFjZSIsInN1YiI6IjY1NGUwZWMzNWE1ZWQwMDEzYmFjNDE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lk1TOJ6yao9ttbTGusrw9_ily9aqxAOpd4dgnPji9e4'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

}


export default tmdb_images_api