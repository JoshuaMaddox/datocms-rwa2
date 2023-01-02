import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import PostBody from "../components/post-body";
import Hero from "../components/hero/hero";

export default function Post({ data: { site, post } }) {
  return (
    <Container>
      {/* <HelmetDatoCms seo={post.seo} favicon={site.favicon} /> */}
      <Hero />
      <article>
        {/* <Steps /> */}
        {/* <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        /> */}
        <PostBody content={post.content} />
      </article>
    </Container>
    // <Container>
    //   <Menu />
    //   {/* <Header /> */}
    //   {/* <CalloutCard />
    //   <article>
    //     <PostHeader
    //       title={post.title}
    //       coverImage={post.coverImage}
    //       date={post.date}
    //       author={post.author}
    //     />
    //     <PostBody content={post.content} />
    //   </article> */}
    // </Container>
  );
}

export const query = graphql`
  query PostBySlug($id: String) {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      content {
        value
        value
        blocks {
          __typename
          id: originalId
          image {
            gatsbyImageData(width: 700)
          }
        }
      }
      date
      coverImage {
        gatsbyImageData(width: 1500)
      }
      author {
        name
        picture {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
            imgixParams: { sat: -100 }
          )
        }
      }
    }
    morePosts: allDatoCmsPost(
      sort: { fields: date, order: DESC }
      limit: 2
      filter: { id: { ne: $id } }
    ) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;
