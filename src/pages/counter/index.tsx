import * as React from 'react';
import { Counter } from 'components/counter/Counter';

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-main'>
      <Counter />
    </div>
  );
}
