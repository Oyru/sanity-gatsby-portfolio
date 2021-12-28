import { MdLocalOffer } from "react-icons/md";

export default {
  name: "tagging",
  type: "document",
  title: "Tags",
  icon: MdLocalOffer,
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
