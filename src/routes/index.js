export async function get() {
  const request = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const posts = await request.json();

  if (posts) {
    return {
      body: { posts },
    };
  }

  return {
    status: 404,
  };
}
