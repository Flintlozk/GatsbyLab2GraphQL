import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Img from 'gatsby-image';

export default ({ data }) => {
    console.log('data->>',data);
    const books = data.apolloData.books;
    const users = data.apolloData.user;
    return (
        <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
            {books.map((book, index) => (
                <div key={index}>{book.title}</div>
            ))}
            {users.map((user, index) => (
                <p>
                    {user.id} {user.name}
                </p>
            ))}
            <Img fluid={data.image1.childImageSharp.fluid} />
            <Img fixed={data.image2.childImageSharp.fixed} />
            <Img fixed={data.image3.childImageSharp.fixed} />
        </div>
    );
};

export const GatsbyQuery = graphql`
    {
        apolloData:cms {
            books {
                title
                author
            }
            user {
                id
                name
            }
        }
        image1:file(name: { eq: "image" }) {
            childImageSharp {
                fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image2:file(name: { eq: "logo" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        image3:file(name: { eq: "search" }) {
            childImageSharp {
                fixed(width: 30,height:30) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }

    #     image : {
    #     file(name: { eq: "visual-reverse-image-search-v2_1000x560 (1).jpg" }) {
    #       childImageSharp {
    #         # Specify the image processing specifications right in the query.
    #         # Makes it trivial to update as your page's design changes.
    #         fixed(width: 125, height: 125) {
    #             ...GatsbyImageSharpFixed
    #         }
    #       }
    #     }
    #     }
    # }
`;
