import { useSelector } from 'react-redux';
import { getpostSlice } from '../postSlice';

const PostList = () => {
  const postlist = useSelector(getpostSlice);
  const renderPost = postlist.map(post => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    );
  });
  return (
    <section>
      <h2>postList</h2>
      {renderPost}
    </section>
  );
};
export default PostList;
