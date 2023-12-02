import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from '../postSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);
  const onSavePostClicked = () => {
    try {
      if (title && content !== '') {
        dispatch(postAdded(title, content));
        setTitle('');
        setContent('');
      } else {
        alert('some problem in the form page dispatch and also fillup the content and submit');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>add Post Title:</label>
        <input name='postTitle' type='text' value={title} onChange={onTitleChange} />
        <label htmlFor='postContent'>add Post content:</label>
        <input name='postContent' type='text' value={content} onChange={onContentChange} />
        <button type='button' onClick={onSavePostClicked}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
