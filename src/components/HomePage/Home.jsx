// import React from 'react'
import './style.css'
import Search from './Search/Search'


const Home = ({
    handleTitle,
    handleYear,
    handleType,
    handleSubmit,
  }) => {
  return (
    <div className='home'>
      <h1 className='search-title'>Let's find out...</h1>
      <Search
        handleTitle={handleTitle}
        handleYear={handleYear}
        handleType={handleType}
        handleSubmit={handleSubmit}
      />
    </div>
    
  )
}

export default Home