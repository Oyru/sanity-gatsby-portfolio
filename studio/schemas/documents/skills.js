import { MdStars } from "react-icons/md";

export default {
  name: "skills",
  type: "document",
  title: "Areas of Work",
  icon: MdStars,
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],

  fields: [
    {
      name: "title",
      type: "string",
      title: "Subtitle",
      description: "This is a subtitle for the Areas of Work section"
    },
    {
      name: "description",
      type: "projectPortableText",
      title: "Intro text",
      description: "This is the intro text to Areas of Work section"
    }
  ]
};
