import {Statistic} from './Statistic/Statistic'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101'
      }}
    >
      <Statistic/>
    </div>
  );
};
