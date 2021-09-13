export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613fa920b346f00d6e21deaf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2fhw4e9w',
                  apiId: '556d559c-f98c-480f-82d6-d9bd0c8957a8'
                },
                {
                  buildHookId: '613fa9203234520d4c29c495',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dx2eu75a',
                  apiId: '5227666d-c3f4-4431-962e-bb69ad6bac3d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Oyru/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dx2eu75a.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
