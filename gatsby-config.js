module.exports = {
    siteMetadata: {
        title: `Gatsby`,
        siteUrl: `https://www.gatsbyjs.org`,
        description: `Blazing fast modern site generator for React`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'GraphQLCMS',
                fieldName: 'cms',
                url: 'http://localhost:4000/',
                refetchInterval: 60
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        // `gatsby-plugin-styled-components`
    ]
};
