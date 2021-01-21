import React, {useState, FC} from 'react';

export const Hello: FC = () => {
  const [name, setName] = useState('');
  return <div>
    <h1>Hello {name}</h1>
    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
  </div>;
}
