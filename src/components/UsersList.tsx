import React from "react";
import { UsersListProps } from "./functionExample.types";

export const UsersList: React.FC<UsersListProps> = ({
  name,
  age,
  onSubmit,
}) => {
  return <div>UsersList</div>;
};
