/* eslint-disable no-new */
/* global Saika */

import ghCorner from '@saika/github-corner'
import copy from '../src'

new Saika({
  target: '#saika',
  postMixins: [
    {
      methods: {
        copy
      }
    }
  ],
  posts: [
    {
      title: 'MyPost',
      link: '/'
    }
  ],
  highlight: ['bash', 'typescript'],
  router: {
    mode: 'history'
  },
  plugins: [
    ghCorner({
      repo: 'evillt/copy',
      pinned: true
    })
  ],

  footer: `© {{ new Date().getFullYear() }} Made with <font color="#f04">❤</font> by
  <a href="https://github.com/evillt">EVILLT</a>.
  Powered by <a href="https://saika.dev">Saika</a>.`
})
