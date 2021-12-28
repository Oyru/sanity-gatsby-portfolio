import { MdSubscriptions } from "react-icons/md";

export default {
  name: "presentation",
  type: "document",
  title: "Visual presentation",
  icon: MdSubscriptions,

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },

    {
      name: "introImages",
      type: "figure",
      title: "Intro Images"
    }
  ]
};
