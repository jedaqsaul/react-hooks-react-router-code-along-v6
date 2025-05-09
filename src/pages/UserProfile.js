import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const [user, setUser] = useState({});

  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);

  if (!user.name) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
        <h1>{user.id}</h1>
      </main>
    </>
  );
}
