export const generateUrls = (total) => {
  let count = 1;
  const users = [];
  while (count <= total) {
    users.push(`https://jsonplaceholder.typicode.com/photos/${count}`);
    count++;
  }
  return users;
};

export const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const listStyles = {
  container: {
    padding: "10px",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
  },
  listItem: {
    alignSelf: "center",
    listStyleType: "none",
  },
};
