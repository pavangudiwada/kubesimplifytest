
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/kubesimplifytest/blog',
    component: ComponentCreator('/kubesimplifytest/blog','8c1'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/archive',
    component: ComponentCreator('/kubesimplifytest/blog/archive','713'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/first-blog-post',
    component: ComponentCreator('/kubesimplifytest/blog/first-blog-post','a91'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/long-blog-post',
    component: ComponentCreator('/kubesimplifytest/blog/long-blog-post','498'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/mdx-blog-post',
    component: ComponentCreator('/kubesimplifytest/blog/mdx-blog-post','f29'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/tags',
    component: ComponentCreator('/kubesimplifytest/blog/tags','355'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/tags/docusaurus',
    component: ComponentCreator('/kubesimplifytest/blog/tags/docusaurus','22b'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/tags/facebook',
    component: ComponentCreator('/kubesimplifytest/blog/tags/facebook','921'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/tags/hello',
    component: ComponentCreator('/kubesimplifytest/blog/tags/hello','876'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/tags/hola',
    component: ComponentCreator('/kubesimplifytest/blog/tags/hola','5ea'),
    exact: true
  },
  {
    path: '/kubesimplifytest/blog/welcome',
    component: ComponentCreator('/kubesimplifytest/blog/welcome','321'),
    exact: true
  },
  {
    path: '/kubesimplifytest/markdown-page',
    component: ComponentCreator('/kubesimplifytest/markdown-page','eac'),
    exact: true
  },
  {
    path: '/kubesimplifytest/search',
    component: ComponentCreator('/kubesimplifytest/search','839'),
    exact: true
  },
  {
    path: '/kubesimplifytest/docs',
    component: ComponentCreator('/kubesimplifytest/docs','9cb'),
    routes: [
      {
        path: '/kubesimplifytest/docs/intro',
        component: ComponentCreator('/kubesimplifytest/docs/intro','d83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kubesimplifytest/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/kubesimplifytest/docs/tutorial-basics/congratulations','ff3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kubesimplifytest/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/kubesimplifytest/docs/tutorial-basics/create-a-blog-post','f28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kubesimplifytest/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/kubesimplifytest/docs/tutorial-basics/create-a-document','b27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kubesimplifytest/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/kubesimplifytest/docs/tutorial-basics/create-a-page','7bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kubesimplifytest/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/kubesimplifytest/docs/tutorial-basics/deploy-your-site','4cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kubesimplifytest/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/kubesimplifytest/docs/tutorial-basics/markdown-features','118'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kubesimplifytest/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/kubesimplifytest/docs/tutorial-extras/manage-docs-versions','d02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kubesimplifytest/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/kubesimplifytest/docs/tutorial-extras/translate-your-site','977'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/kubesimplifytest/',
    component: ComponentCreator('/kubesimplifytest/','015'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
