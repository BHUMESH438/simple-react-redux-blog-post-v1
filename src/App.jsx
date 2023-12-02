// import Counter from './feature/count/Counter';

import PostList from './feature/post/PostList';
import Form from './feature/post/form';

const App = () => {
  return (
    <main className='App'>
      <h1>App</h1>
      {/* <Counter /> */}
      <Form />
      <PostList />
    </main>
  );
};
export default App;
