import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/user/UserList';
import CreateUser from './components/user/UserCreate';
import EditUser from './components/user/EditUser';
import { authProvider } from './configs/firebaseSettings';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
   <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
         name="users"
         list={UserList}
         create={CreateUser}
         edit={EditUser}
      />
   </Admin>
);

export default App;
