import React from "react";
import { DatePicker } from "./DatePicker";
import { FunctionExampleProps } from "./functionExample.types";
import { UsersList } from "./UsersList";

export const FunctionExample: React.FC<FunctionExampleProps> = ({
  name,
  age = 20,
  onSubmit,
  type = "gregorian",
}) => {
  return (
    <div>
      <UsersList name={name} age={age} onSubmit={onSubmit} />
      <DatePicker type={type} />
    </div>
  );
};

// export const FunctionExample = (props: FunctionExampleProps) => {
//     const { name, age = 20, onSubmit, type = "gregorian" } = props;
//     return <div>{type}</div>;
//   };
