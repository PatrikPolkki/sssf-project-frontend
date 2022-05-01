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

export const getSportTypes = gql`
query SportTypes {
  sportTypes {
    id
    title
  }
}
`;

export const addPost = gql`
mutation AddPost($postInfo: PostInfo) {
  addPost(postInfo: $postInfo) {
    id
    title
    description
    sport {
      title
    }
  }
}
`;

export const registerUser = gql`
mutation RegisterUser($username: String!, $fullName: String, $password: String!) {
  registerUser(username: $username, full_name: $fullName, password: $password) {
    id
    username
    token
  }
}
`;