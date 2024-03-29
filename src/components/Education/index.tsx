import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Timeline from "components/Timeline";
import Container from "components/Container";
import TitleSection from "components/TitleSection";
import FormatHtml from "components/utils/FormatHtml";

import { SectionTitle } from "helpers/definitions";

interface Education {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      university: string;
      degree: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Education: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "education section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "education" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              university
              degree
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const education: Education[] = allMarkdownRemark.edges;

  return (
    <Container section className="pl-0">
      <TitleSection title={sectionTitle.title} />

      {education.map((item) => {
        const {
          id,
          html,
          frontmatter: { university, degree, startDate, endDate },
        } = item.node;

        return (
          <Timeline
            key={id}
            title={university}
            subtitle={degree}
            content={<FormatHtml content={html} />}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Education;
