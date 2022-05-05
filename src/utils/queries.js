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
    date
    location
  }
}
`;

export const getPostQuery = gql`
query Post($postId: ID!) {
  post(id: $postId) {
    id
    owner {
      id
      username
    }
    title
    description
    location
    date
    sport {
      id
      title
    }
    participants {
      id
      username
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

export const getPostsByUser = gql`
query PostByUser($postByUserId: ID) {
  postByUser(id: $postByUserId) {
    id
    owner {
      username
    }
    title
    description
    location
    date
    sport {
      title
    }
    participants {
      username
    }
  }
}
`;

export const createSportType = gql`
mutation AddSportType($title: String) {
  addSportType(title: $title) {
    id
    title
  }
}
`;

export const getUserInfo = gql`
query User($userId: ID!) {
  user(id: $userId) {
    applied_sports {
      id
      owner {
        username
        id
      }
      title
      description
      location
      date
      sport {
        id
        title
      }
      participants {
        id
        username
      }
    }
  }
}
`;

export const getAppliedPosts = gql`
query AppliedPosts($appliedPostsId: ID) {
  appliedPosts(id: $appliedPostsId) {
    id
    owner {
      username
    }
    title
    description
    location
    date
    sport {
      title
    }
    participants {
      username
    }
  }
}
`;

export const applyToPost = gql`
mutation ApplyToPost($applyToPostId: ID!, $participantId: ID!) {
  applyToPost(id: $applyToPostId, participantId: $participantId) {
    id
    owner {
      id
      username
    }
    title
    description
    location
    date
    sport {
      id
      title
    }
    participants {
      id
      username
    }
  }
}
`;

export const leaveFromPost = gql`
mutation LeaveFromPost($leaveFromPostId: ID!, $participantId: ID!) {
  leaveFromPost(id: $leaveFromPostId, participantId: $participantId) {
    id
    owner {
      id
      username
    }
    title
    description
    location
    date
    sport {
      id
      title
    }
    participants {
      id
      username
    }
  }
}
`;