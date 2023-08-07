import RefProvider from './provider/RefProvider';
import Router from './router/router';

function App() {

  return (
    <RefProvider>
      <Router />
    </RefProvider>
  );
}

export default App;
