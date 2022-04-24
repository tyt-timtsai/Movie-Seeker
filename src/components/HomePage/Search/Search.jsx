import './style.css';
//Search bar
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//Icon
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = ({
  handleTitle,
  handleYear,
  handleType,
  handleSubmit,
}) => {
  return (
    <div className='search'>
      <div className='input-container'>
        <TextField
          required
          id="outlined-required"
          label="Title"
          placeholder="Movie Title"
          onChange={handleTitle}
        />
        <TextField
            id="outlined-required"
            label="Year"
            placeholder="Year"
            onChange={handleYear}
          />
        <FormControl sx={{ m: 1, minWidth: 195 }}>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue = ""
            label="Type"
            onChange={handleType}
          >
            <MenuItem value={'Movie'}>Movie</MenuItem>
            <MenuItem value={'Series'}>Series</MenuItem>
            <MenuItem value={'Episode'}>Episode</MenuItem>
          </Select>
        </FormControl>

        <IconButton 
          aria-label="search"
          onClick={handleSubmit}
          >
          <SearchOutlinedIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Search