import * as React from 'react';
import { connect } from 'react-redux';
import { useAppDispatch } from 'app/hooks';
import { RootState } from 'app/store';
import { Meta } from 'models/Meta';
import * as exampleThunks from './example.thunks';
import Button from 'components/buttons/Button';
import CustomLink from 'components/links/CustomLink';

const Example: React.FC<LinkStateProps> = ({
  currentRunningOperation,
  meta,
  exampleData,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className='py-20 layout min-h-main'>
      <h1>Get request using axios</h1>
      <p className='mt-2 text-gray-700'>Using axios to fetch</p>
      <Button
        isLoading={currentRunningOperation != 'idle'}
        disabled={currentRunningOperation != 'idle'}
        className='mt-4'
        variant='light'
        onClick={() => dispatch(exampleThunks.getExampleData())}
      >
        getData
      </Button>
      <div className='mt-2 space-y-1'>
        {exampleData ? (
          exampleData.map((pokemon: any) => (
            <p key={pokemon.name}>
              <CustomLink to={pokemon.url}>{pokemon.name}</CustomLink>
            </p>
          ))
        ) : currentRunningOperation != 'idle' ? (
          <p>Loading...</p>
        ) : meta.message?.length && meta.code != 2000 ? (
          <p className='text-red-500'>
            {meta.message} ({meta.code})
          </p>
        ) : undefined}
      </div>
    </div>
  );
};

interface LinkStateProps {
  currentRunningOperation: string;
  meta: Meta;
  exampleData: any;
}

const mapStateToProps = (state: RootState): LinkStateProps => ({
  currentRunningOperation: state.example.currentRunningOperation,
  meta: state.example.meta,
  exampleData: state.example.exampleData,
});

export default connect(mapStateToProps)(Example);
