"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

export default function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Using the same review info for all slides (for demonstration)
  const reviews = [
    {
      id: 1,
      title: "GIGABYTE G5",
      image: "/images/gigabyte5.jpg",
      rating: 4.5
    },
    {
      id: 2,
      title: "ASUS TUF Gaming F17",
      image: "/images/asustuf.jpg",
      rating: 4.5
    },
    {
      id: 3,
      title: "Asus Rog Strix",
      image: "/images/asusrogstrix.jpg",
      rating: 4.5
    },
    {
      id: 4,
      title: "MSI Thin GF63",
      image: "/images/msithingf63.jpg",
      rating: 4.5
    },
    {
      id: 5,
      title: "MSI Katana 15 B13VEK-277US",
      image: "/images/msikatana15.jpg",
      rating: 4.5
    },
    {
      id: 6,
      title: "GIGABYTE G9",
      image: "/images/gigabyte5.jpg",
      rating: 4.5
    },
    {
      id: 7,
      title: "GIGABYTE G5",
      image: "/images/gigabyte5.jpg",
      rating: 4.5
    },
    {
      id: 8,
      title: "Asus Rog Strix",
      image: "/images/asusrogstrix.jpg",
      rating: 4.5
    }
  ];

  const reviewsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const getVisibleReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>More Reviews You Might Like</h2>
      
      <div className={styles.carouselControls}>
        <button className={styles.carouselButton} onClick={prevPage}>
          &#10094; Previous
        </button>
        <span className={styles.pageIndicator}>
          {currentPage + 1} / {totalPages}
        </span>
        <button className={styles.carouselButton} onClick={nextPage}>
          Next &#10095;
        </button>
      </div>
      
      <div className={styles.reviewGrid}>
        {getVisibleReviews().map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewImageContainer}>
              <Image
                src={review.image}
                alt={review.title}
                width={150}
                height={100}
                className={styles.reviewImage}
              />
            </div>
            <div className={styles.reviewInfo}>
              <h3 className={styles.reviewTitle}>{review.title}</h3>
              <div className={styles.reviewRating}>
                <span className={styles.ratingLabel}>Rating: </span>
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <span key={i} className={styles.starFilled}>★</span>
                ))}
                {review.rating % 1 !== 0 && (
                  <span className={styles.starHalf}>★</span>
                )}
                <span className={styles.ratingText}>{review.rating}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
