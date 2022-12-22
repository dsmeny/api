import { useEffect, useState } from "react";
import { fetcher, listStyles } from "./util";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [userAmt, setUserAmt] = useState(300);

  useEffect(() => {
    fetcher(`http://localhost:4000/api/${userAmt}`).then((response) => {
      setUsers(() => response.data);
    });
  }, [userAmt]);

  return (
    <div style={listStyles.container}>
      {!users.length ? (
        <Spinner
          animation="grow"
          variant="primary"
          className="position-absolute top-50 start-50"
        />
      ) : (
        <>
          <ul style={listStyles.list}>
            {users.map((el) => (
              <li style={listStyles.listItem} key={el.id}>
                <p>
                  {el.title}{" "}
                  <small>
                    <strong>{el.id}</strong>
                  </small>
                </p>

                <img
                  src={el.url}
                  alt={el.title}
                  style={{ maxWidth: "300px" }}
                />
              </li>
            ))}
          </ul>
          <div className="text-center mt-4 mb-4">
            <Button
              className="primary"
              onClick={() =>
                setUserAmt((prev) => {
                  return (prev += 200);
                })
              }
            >
              Load More
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
