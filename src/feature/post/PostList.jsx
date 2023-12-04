import { useSelector } from 'react-redux';
import { getpostSlice } from '../postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostList = () => {
  const postlist = useSelector(getpostSlice);
  const sortedPosts = postlist.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  const renderPost = sortedPosts.map(post => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className='postCredit'>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
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
