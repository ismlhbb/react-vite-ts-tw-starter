import * as React from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { counterActions } from './counter.reducer';
import * as counterThunks from './counter.thunks';
import styles from './Counter.module.scss';

export function Counter() {
  const count = useAppSelector(counterThunks.selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(counterActions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(counterActions.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(counterActions.incrementByAmount(incrementValue))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(counterThunks.incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(counterThunks.incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
