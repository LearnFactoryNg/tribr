import { gql } from 'apollo-boost';

export const LOGIN_USER = gql`
  mutation onLogin (
    $email: String!
    $password: String!
  ) {
    loginUser (data: {
      email: $email
      password: $password
    })
  }
`;
