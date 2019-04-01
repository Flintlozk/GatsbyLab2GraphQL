import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from "../component/layout"

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
    {
        books {
            title
            author
        }
    }
`;

export default () => {
    return (
        <Layout>
            <div style={{ margin: '0px auto', padding:'0' }}>
                <Query query={APOLLO_QUERY}>
                    {({ data, loading, error }) => {

                        if (loading) return <p>Loading pupper...</p>;
                        if (error) return <p>Error: ${error.message}</p>;

                        return (
                            <div>
                                {
                                    data.books.map((book,idx) => (
                                        <div key={idx}>{book.title}</div>
                                    ))
                                }
                            </div>
                        );
                        
                    }}
                </Query>
            </div>
        </Layout>
    );
};
