import { useLocation } from 'react-router-dom';


const BlogView = () => {
  const location = useLocation();
  console.log(location);
  
  const { body } = location.state;
  console.log(body)
  
  return (
    <div>
      <h1>{body.slice(0, 100)}</h1>
      <h1>{body.slice(100, 1000)}</h1>
    </div>
  )
}

export default BlogView