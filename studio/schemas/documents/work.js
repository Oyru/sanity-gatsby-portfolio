import { MdWork } from "react-icons/md";

export default {
  name: "work",
  type: "document",
  title: "Selected Work",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  icon: MdWork,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Subtitle",
      description: "This is a subtitle for the Selected Work section"
    },
    {
      name: "description",
      type: "projectPortableText",
      title: "Intro text",
      description: "This is the intro text to the Selected Work section"
    }
  ]
};
