import { MdEmail } from "react-icons/md";

export default {
  name: "contact",
  type: "document",
  title: "Contact",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  icon: MdEmail,

  fields: [
    {
      name: "title",
      type: "string",
      title: "Subtitle",
      description: "This is a subtitle for Contact section"
    },
    {
      name: "description",
      type: "projectPortableText",
      title: "Contact details",
      description: "This is the contact details section"
    }
  ]
};
