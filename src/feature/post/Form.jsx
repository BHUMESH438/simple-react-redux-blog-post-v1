import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../postSlice';
import { getUserSlice } from '../userSlice';

const Form = () => {
  const author_user = useSelector(getUserSlice);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);
  const onSelectuser = e => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean);

  const onSavePostClicked = () => {
    try {
      if (title && content && userId) {
        dispatch(postAdded(title, content, userId));
        setTitle('');
        setContent('');
        setUserId('');
      } else {
        alert('some problem in the form page dispatch and also fillup the content and submit');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const renderAuthorOptions = author_user.map(user => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>add Post Title:</label>
        <input name='postTitle' type='text' value={title} onChange={onTitleChange} />
        <label htmlFor='postAuthor'>select author</label>
        <select name='postAuthor' onChange={onSelectuser}>
          <option value=''></option>
          {renderAuthorOptions}
        </select>
        <label htmlFor='postContent'>add Post content:</label>
        <input name='postContent' type='text' value={content} onChange={onContentChange} />

        <button disabled={!canSave} type='button' onClick={onSavePostClicked}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
