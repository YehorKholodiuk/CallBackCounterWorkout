import Counter from './Counter';
import { useState } from 'react';

const initialCounts = [
  { id: 1, value: 5 },
  { id: 2, value: 7 },
  { id: 3, value: 17 },
];

function App() {

  const [counts, setCounts] = useState(initialCounts);

  const onMinus = (id) => {
    const updatedCounters = counts.map(count => count.id === id ? {
      ...count,
      value: count.value - 1
    } : count);
    setCounts(updatedCounters);
  };

  const onPlus = (id) => {
    const updatedCounters = counts.map(count => count.id === id ? {
      ...count,
      value: count.value + 1
    } : count);
    setCounts(updatedCounters);
  };

  const addCounter = () => {
    const updatedCounters = [{ id: Math.random(), value: 0 }, ...counts];
    setCounts(updatedCounters);
  };

  return (
      <div className="App">

        {
          counts.map(count => <Counter
              count={count.value} id={count.id}
              key={count.id}
              onPlus={onPlus}
              onMinus={onMinus} />)
        }

        <button onClick={addCounter}>Add counter</button>


      </div>
  );
}

export default App;