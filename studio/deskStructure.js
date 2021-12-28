import S from "@sanity/desk-tool/structure-builder";
import { MdSettings, MdSubscriptions, MdFeedback } from "react-icons/md";

const hiddenDocTypes = listItem =>
  ![
    "category",
    "person",
    "sampleProject",
    "siteSettings",
    "intro",
    "presentation",
    "skills",
    "work",
    "about",
    "contact",
    "tagging"
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.divider(),
      S.listItem()
        .title("1. Presentation")
        .child(
          S.editor()
            .id("presentation")
            .schemaType("presentation")
            .documentId("presentation")
        )
        .icon(MdSubscriptions),
      S.listItem()
        .title("2. Intro")
        .child(
          S.editor()
            .id("intro")
            .schemaType("intro")
            .documentId("intro")
        )
        .icon(MdFeedback),
      S.listItem()
        .title("3. Skills")
        .schemaType("skills")
        .child(S.documentTypeList("skills").title("Skills")),

      S.listItem()
        .title("4. Work")
        .schemaType("work")
        .child(S.documentTypeList("work").title("work")),

      S.listItem()
        .title("5. About")
        .schemaType("about")
        .child(S.documentTypeList("about").title("About")),

      S.listItem()
        .title("6. Contact")
        .schemaType("contact")
        .child(S.documentTypeList("contact").title("Contact")),
      S.divider(),
      S.listItem()
        .title("Archive")
        .schemaType("sampleProject")
        .child(S.documentTypeList("sampleProject").title("Sample projects")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Tags")
        .schemaType("tagging")
        .child(S.documentTypeList("tagging").title("Tags")),
      S.listItem()
        .title("Team")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
