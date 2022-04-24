import './style.css';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Cards = ({movies}) => {
  const showMovies = movies.map((item,index) => (
    <Link
      key= {index}
      to={`/Movie-Seeker/detail/${item.Title}`}
      className='card'
    >
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.Poster !== "N/A" ? (item.Poster) : ('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80')}
          alt="Movie Poster"
        />
        <Typography gutterBottom variant="subtitle1" component="div">
              {item.Title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
              {item.Year}
        </Typography>
      </Card>
    </Link>
  ))

  return (
    <div className="cards-container">
      {showMovies}
    </div>
  )
}

export default Cards