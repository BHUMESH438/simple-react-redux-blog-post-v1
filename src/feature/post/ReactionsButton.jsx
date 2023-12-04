import { useDispatch } from 'react-redux';
import { reactionAdded } from '../postSlice';
import { cs } from 'date-fns/locale';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
};

const ReactionsButton = ({ post }) => {
  const dispatch = useDispatch();
  console.log(dispatch);
  return <div>ReactionsButton</div>;
};
export default ReactionsButton;
