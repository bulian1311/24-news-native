import { format } from "date-fns";

export const formatDate = (date: string) => {
  const formatedDate = format(new Date(date), "yyyy/MM/dd");

  return formatedDate;
};
