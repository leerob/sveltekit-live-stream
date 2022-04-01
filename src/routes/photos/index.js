export async function get() {
  const request = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const photos = await request.json();

  if (photos) {
    return {
      body: { photos },
    };
  }

  return {
    status: 404,
  };
}
