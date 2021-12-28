import { MdInfo, MdInfoOutline, Md3P } from "react-icons/md";

export default {
  name: "about",
  type: "document",
  title: "About",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  icon: Md3P,

  fields: [
    {
      name: "title",
      type: "string",
      title: "Subtitle",
      description: "This is a subtitle for the About section"
    },
    {
      name: "description",
      type: "projectPortableText",
      title: "Text",
      description: "This is the main text for the About section"
    }
  ]
};
