import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Timeline from "components/Timeline";
import Container from "components/Container";
import TitleSection from "components/TitleSection";
import FormatHtml from "components/utils/FormatHtml";

import { SectionTitle } from "helpers/definitions";

interface ExperienceNode {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      company: string;
      position: string;
      url: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Experience: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "experiences section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experiences" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              company
              position
              url
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const experiences: ExperienceNode[] = allMarkdownRemark.edges;

  return (
    <Container section centered className="pl-0">
      <TitleSection title={sectionTitle.title} />

      {experiences.map((item) => {
        const {
          id,
          html,
          frontmatter: { company, position, url, startDate, endDate },
        } = item.node;

        return (
          <Timeline
            key={id}
            title={company}
            subtitle={position}
            url={url}
            content={<FormatHtml content={html} />}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Experience;
