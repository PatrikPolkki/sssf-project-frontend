import {gql} from '@apollo/client';

export const login = gql`
query Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    username
    token
  }
}
`;

export const getPostsQuery = gql`
query Posts {
  posts {
    id
    owner {
      username
    }
    title
    description
    sport {
      title
    }
  }
}
`;
