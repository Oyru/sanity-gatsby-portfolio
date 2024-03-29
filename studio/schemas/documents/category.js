import { MdTurnedIn } from "react-icons/md";

export default {
  name: "category",
  type: "document",
  title: "Category",
  icon: MdTurnedIn,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    }
  ]
};
