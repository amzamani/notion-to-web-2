import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  //  boiler plate page default
  // rootNotionPageId: '437a047a1dfb4932bf54c3772ed11849',

  // toffeeblog page
  // https://silicon-woodpecker-5c5.notion.site/Znap-53ea13df87e143afb9afa8f7c290b3b3?pvs=4
  rootNotionPageId: '53ea13df87e143afb9afa8f7c290b3b3',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Znap Labs',
  domain: 'abu.znapai.com/',
  author: 'Zamani Tech Ventures Pvt Ltd',

  // open graph metadata (optional)
  description:
    'Znap Labs',

  // social usernames (optional)
  // twitter: 'znap_in',
  // github: '',
  // linkedin: 'zamanitech',
  // instagram: 'znap.in',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '@toffeemoney', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom'
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: '24dd473a39584d70828468148b3b5bc3'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: 'c4f5dab6339e415e91d96c3b32bfb0d1'
  //   }
  // ]
})
