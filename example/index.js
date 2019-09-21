/* eslint-disable no-new */
/* global Saika */

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
  highlight: ['bash', 'typescript']
})
