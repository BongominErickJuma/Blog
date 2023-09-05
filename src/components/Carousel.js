import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useFetch from './useFetch';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    if (blogs) {
      const shuffledBlogs = shuffleArray(blogs);
      setRandomBlogs(shuffledBlogs.slice(0, 5));
    }
  }, [blogs]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {randomBlogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div className='slider-div'>
              <h3>{blog.title}</h3>
              <p>Author: {blog.author}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
