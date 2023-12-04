import { useSelector } from 'react-redux';
import { getUserSlice } from '../userSlice';

const PostAuthor = ({ userId }) => {
  const userSlice = useSelector(getUserSlice);
  const author = userSlice.find(user => user.id === userId);
  return <span>{author ? author.name : 'UnknownAuthor'}</span>;
};
export default PostAuthor;
