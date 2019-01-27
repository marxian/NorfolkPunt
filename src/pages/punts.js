import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Card from '../components/Card'
import SubtleLink from '../components/SubtleLink'

const Figure = styled.figure`
  margin: 0px;
`

const FigCaption = styled.figcaption`
  color: black;
  text-align: center;
  vertical-align: middle;
`

const SailNo = styled.span`
  font-size: large;
`

const Boat = ({ boat, imageWanted }) => (
  <Box w={[1 / 2, 1 / 3, 1 / 3, 1 / 5]} p={1}>
    <Card>
      <SubtleLink to={`/punts/${boat.fields.slug}`}>
        <Figure>
          <Img fluid={boat.mugshot ? boat.mugshot.fluid : imageWanted.fluid} />
          <FigCaption>
            {boat.frontmatter.name} ~{' '}
            <SailNo>{boat.frontmatter.sailNumber}</SailNo>
          </FigCaption>
        </Figure>
      </SubtleLink>
    </Card>
  </Box>
)

export default ({ data }) => (
  <Layout>
    <div>
      <Flex flexWrap="wrap">
        {data.boats.edges.map(({ boat }) => (
          <Boat
            boat={boat}
            key={boat.fields.slug}
            imageWanted={data.imageWanted.sharp}
          />
        ))}
      </Flex>
    </div>
  </Layout>
)

export const query = graphql`
  query BoatsList {
    boats: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "punts" } } }
      sort: { order: DESC, fields: [frontmatter___sailNumber] }
    ) {
      edges {
        boat: node {
          frontmatter {
            name
            sailNumber
          }
          fields {
            slug
          }
          mugshot {
            fluid(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    imageWanted: file(relativePath: { regex: "/image-wanted.jpg$/" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
