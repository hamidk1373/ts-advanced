type datePickerType = "gregorian" | "jalaali";

type userData = {
  name: string;
  email: string;
  ip: string;
};

export interface FunctionExampleProps {
  name?: string;
  age?: number;
  onSubmit?: (data: any, personID: string) => void;
  type?: datePickerType;
  list?: userData[];
}

export type UsersListProps = Omit<FunctionExampleProps, "type">;

export interface DatePickerProps {
  type: datePickerType;
}

// type unsignedByte = 0 | 1 | 2 | 3 | 4;
