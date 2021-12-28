import { MdSubject, MdFeedback } from "react-icons/md";

export default {
  name: "intro",
  type: "document",
  title: "Site Intro",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  icon: MdFeedback,

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "This is the website title"
    },
    {
      name: "description",
      type: "projectPortableText",
      title: "Intro text",
      description: "This is the website intro text"
    }
  ]
};
