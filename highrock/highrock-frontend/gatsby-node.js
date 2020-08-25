const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
      teams: allStrapiTeams {
          nodes {
              slug
          }
      }
      services: allStrapiServices {
        nodes {
            slug
        }
    }
    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/media/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })

  result.data.teams.nodes.forEach(team => {
    createPage({
      path: `/team/${team.slug}`,
      component: path.resolve(`src/templates/team-template.js`),
      context: {
        slug: team.slug,
      },
    })
  })

  result.data.services.nodes.forEach(service => {
    createPage({
      path: `/services/${service.slug}`,
      component: path.resolve(`src/templates/service-template.js`),
      context: {
        slug: service.slug,
      },
    })
  })

}
