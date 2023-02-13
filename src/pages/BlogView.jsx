import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from '../blogsdata';

const BlogView = () => {
  const { title } = useParams();
  console.log(title);
  const [bodydata, setbodydata] = useState("");
  
  useEffect(() => {
    const blogdata = blogsData.filter((blog) => blog.title === title);
    console.log(blogdata);
    setbodydata(blogdata[0].body)
  }, []);

  return (
    <div>
      <h1>{bodydata}</h1>
    </div>
  )
}

export default BlogView