import { useState, useEffect, useRef } from "react";

const usePaginationScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  // Fetch items function
  const fetchItems = async () => {
    if (isLoading || !hasMore) return; // Prevent multiple requests

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=8`
      );
      const result = await response.json();
        
      // If no more posts are returned, set hasMore to false
      if (result.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...result]); // Append new data
      }
    } catch (err) {
      setError(err); // Handle fetch error
    } finally {
      setIsLoading(false);
    }
  };

  // Intersection Observer to trigger loading more items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !isLoading) {
          setPage((prevPage) => prevPage + 1); // Increment page to load next set of posts
        }
      },
      { threshold: 0.1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isLoading]);

  // Fetch items whenever the page changes
  useEffect(() => {
    fetchItems();
  }, [page]);

  return { data, error, isLoading, hasMore, loaderRef };
};

export default usePaginationScroll;
