import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";

// if (record.__typename === "DatoCmsDefinitionsBlock") {
//   return <h1>{record.definitions}</h1>;
// }

export default function PostBody({ content }) {
  return (
    <div id="intro" className="max-w-3xl mx-auto px-6 pt-6 lg:px-8 lg:mb-24">
      <div className="prose prose-lg prose-blue">
        <h2 className="text-6xl text-center">
          An Introduction to Real-World Assets—RWAs.{" "}
        </h2>
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "DatoCmsImageBlock":
                return <GatsbyImage image={record.image.gatsbyImageData} />;
              case "DatoCmsDefinitionsBlock":
                return <h1>Your Did it</h1>;
              default:
                return <h1>Somwthing got returns here</h1>;
            }
          }}
        />
      </div>
    </div>
  );
}
