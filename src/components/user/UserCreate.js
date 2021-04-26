import React from 'react';
import {
   Create,
   SimpleForm,
   TextInput,
   required,
   email,
   minLength,
   maxLength,
} from 'react-admin';

const validateName = [required(), minLength(3), maxLength(15)];
const validateUsername = [required(), minLength(3), maxLength(15)];
const validateEmail = [required(), email()];
const validatePhoneNumber = [required()];

const CreateUser = (props) => (
   <Create title="Create User" {...props}>
      <SimpleForm>
         <TextInput validate={validateName} label="name" source="name" />
         <TextInput
            validate={validateUsername}
            lable="username"
            source="username"
         />
         <TextInput validate={validateEmail} lable="email" source="email" />
         <TextInput
            validate={validatePhoneNumber}
            lable="phone number"
            source="phone"
         />
      </SimpleForm>
   </Create>
);

export default CreateUser;
