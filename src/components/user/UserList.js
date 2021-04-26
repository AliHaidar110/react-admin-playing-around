import React from 'react';
import {
   List,
   Datagrid,
   TextField,
   EmailField,
   EditButton,
   DeleteButton,
} from 'react-admin';

const UserList = (props) => (
   <List {...props}>
      <Datagrid rowClick="edit">
         <TextField source="id" />
         <TextField source="name" />
         <TextField source="username" />
         <EmailField source="email" />
         <TextField source="address.street" />
         <TextField source="phone" />
         <TextField source="website" />
         <TextField source="company.name" />
         <EditButton basePath="/users" />
         <DeleteButton basePath="/users" />
      </Datagrid>
   </List>
);

export default UserList;
