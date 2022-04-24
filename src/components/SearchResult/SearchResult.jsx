import React from 'react'
import './style.css'
//Components
import Cards from './Cards/Cards'
import Page from './Pagination/Pagination'

const SearchResult = ({
  movies,
  error,
  loading,
  title,
  year,
  type,
  totalResult,
  page,
  handleChange,
  setPage,
  fetchMovies,
}) => {
  return (
    <div className="results-container">
      {error ? (
      <h1>{error}</h1>
      ) : ( loading ? (
        <h1>Loading...</h1>
      ):(
      <>
          <div id="results-title">{totalResult} of {type} "{title}" found in {year}</div>
          <Cards
            movies={movies}
          />
          <Page
            page={page}
            handleChange={handleChange}
            totalResult={totalResult}
            setPage={setPage}
            fetchMovies={fetchMovies}
          />
      </>
      ))}
    </div>
  )
}

export default SearchResult