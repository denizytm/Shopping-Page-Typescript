import ReactDOM from 'react-dom/client';
import App from './App';

import {
  QueryClient,              // I USE REACT QUERY TO EXTRACT THE DATA FROM THE API
  QueryClientProvider,      
} from '@tanstack/react-query'

const client = new QueryClient()  // CREATING A NEW CLIENT

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={client}>   {/* SURROUNDING THE APP COMPONENT WITH QUERYCLIENT PROVIDER AND ALSO WE INSERT THE CLIENT THAT WE CREATED  */}
    <App />
</QueryClientProvider>
);

