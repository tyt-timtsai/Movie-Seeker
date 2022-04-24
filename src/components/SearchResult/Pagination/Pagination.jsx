import Pagination from '@mui/material/Pagination';
import './style.css';

const Page = ({
  page,
  totalResult,
  handleChange,
}) => {

  return (
    <div id="page-container">
        <Pagination
          count={Math.ceil(totalResult/10)}
          size="small"
          page={Number(page)}
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
    </div>
  )
}

export default Page