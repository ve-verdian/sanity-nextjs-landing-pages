export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62ec8193b465cf65b40867e7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gdu53qo8',
                  apiId: '2cf6d36f-0074-4338-b054-131ec5e72c62'
                },
                {
                  buildHookId: '62ec8193488b4a725aa073de',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sd6q62cp',
                  apiId: '4ba0f2b9-2181-4b80-8e58-381d78b6ad06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ve-verdian/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sd6q62cp.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
