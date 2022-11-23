interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function isComment(comment: any): comment is IComment {
  if (
    !('postId' in comment) ||
    !('id' in comment) ||
    !('name' in comment) ||
    !('email' in comment) ||
    !('body' in comment)
  ) return false;
  if (
    typeof comment.postId !== 'number' ||
    typeof comment.id !== 'number' ||
    typeof comment.name !== 'string' ||
    typeof comment.email !== 'string' ||
    typeof comment.body !== 'string'
  ) return false;
  return true;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function isPost(post: any): post is IPost {
  if (
    !('userId' in post) ||
    !('id' in post) ||
    !('title' in post) ||
    !('body' in post)
  ) return false;
  if (
    typeof post.userId !== 'number' ||
    typeof post.id !== 'number' ||
    typeof post.title !== 'string' ||
    typeof post.body !== 'string'
  ) return false;
  return true;
}

function fetchAPI<T>(url: string): Promise<T[]> {
  return fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      if (!response.ok) throw new Error('cannot fetch');
      return response.json();
    })
    .then((data: T[]) => {
      return data;
    });
}

fetchAPI<IPost>('https://jsonplaceholder.typicode.com/posts')
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (!isPost(data[i])) throw new Error('wrong data response');
    }
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

fetchAPI<IComment>('https://jsonplaceholder.typicode.com/comments')
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (!isComment(data[i])) throw new Error('wrong data response');
    }
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
