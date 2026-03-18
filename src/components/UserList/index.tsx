import { useEffect, useState } from "react";
import type User from "../../types/User";
import axios from "axios";
import { UserCard } from "../UserCard";
import s from "./UserList.module.css"


export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get("https://api.escuelajs.co/api/v1/users");

      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <ul className={s.userList}>
        {users.map((user) => (
          <UserCard {...user} />
        ))}
      </ul>
    </div>
  );
};
