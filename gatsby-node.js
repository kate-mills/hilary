const path = require('path')

exports.onCreatePage = async({ page, actions }) => {
  const { createPage  } = actions
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"
    // Update the page.
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: { items },
  } = await graphql(`
    query {
      items: allContentfulHilaryJewelry {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  items.edges.forEach(item => {
    createPage({
      path: `/shop/${item.node.slug}`,
      component: path.resolve(`src/templates/item-template.js`),
      context: { slug: item.node.slug },
    })
  })


}
