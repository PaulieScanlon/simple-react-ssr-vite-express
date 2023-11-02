import { useState } from 'react';

const App = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>App</h1>
      <p>Lorem Ipsum</p>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export default App;
