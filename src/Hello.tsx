import React, {useState, FC} from 'react';
import {User} from './User';

export const Hello: FC = () => {
  const [name, setName] = useState('');
  return <div>
    <h1>{User.hello(name)}</h1>
    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
  </div>;
}
