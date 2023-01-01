import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";

// if (record.__typename === "DatoCmsDefinitionsBlock") {
//   return <h1>{record.definitions}</h1>;
// }

export default function PostBody({ content }) {
  console.log("I am content in POST BODY: ", content);
  return (
    <div className="max-w-2xl mx-auto px-6 pt-6 lg:px-8">
      <div className="prose prose-lg prose-blue">
        {console.log("I am before the StructuredText")}
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            console.log("I am record: ", record);
            switch (record.__typename) {
              case "DatoCmsImageBlock":
                return <GatsbyImage image={record.image.gatsbyImageData} />;
              case "DatoCmsDefinitionsBlock":
                return <h1>Your Did it</h1>;
              default:
                return <h1>Somwthing got returns here</h1>;
            }
          }}
          // renderBlock={({ record }) => {
          //   console.log("I am record: ", record);
          //   if (record.__typename === "DatoCmsImageBlock") {
          //     console.log("I am record.__typename: ", record.__typename);
          //     // return <GatsbyImage image={record.image.gatsbyImageData} />;
          //     return <h1>{record}</h1>;
          //   } else if (record.__typename === "DatoCmsDefinitionsBlock") {
          //     return <h1>{record.definitions}</h1>;
          //   }
          //   return (
          //     <>
          //       <p>Don't know how to render a block!</p>
          //       <pre>{JSON.stringify(record, null, 2)}</pre>
          //     </>
          //   );
          // }}
        />
      </div>
    </div>
  );
}
