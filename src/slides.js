import React from 'react'

import {
  Appear,
  BlockQuote,
  CodePane,
  Cite,
  Heading,
  Image,
  ListItem,
  Link,
  List,
  Markdown,
  Quote,
  Slide,
  Text,
  MarkdownSlides
} from 'spectacle'

import vuePNG from './images/vue.png'
import futureGIF from './images/future.gif'

import { staticRoutes, dynamicRoutes } from './code.js'


export default [
  <Slide>
    <Heading size={1} fit caps textColor="secondary">React Router Discussion</Heading>
  </Slide>,


  <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
    <Heading size={2} caps>What's an Router</Heading>
  </Slide>,


  <Slide transition={["fade"]}>
    <BlockQuote>
      <Quote style={{fontSize: '2rem', color: '#aaaaaa', borderLeft: '1px solid #aaaaaa'}}>A router connects multiple networks and routes network traffic between them</Quote>
      <Cite>
        <Link style={{color: '#00e7c0'}} href="https://en.wikipedia.org/wiki/Router_(computing)">Wiki (Router computing)</Link>
      </Cite>
    </BlockQuote>
  </Slide>,


  <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      client-side vs server-side router
    </Heading>
    <List>
      <ListItem>Run appropriate code when URL changes</ListItem>
      <ListItem>Host environment (browser vs server)</ListItem>
      <ListItem>Serving pages/data vs Rendering component</ListItem>
    </List>
  </Slide>,


  <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
    <Image src={vuePNG}/>
  </Slide>,


  <Slide transition={["zoom"]} bgColor="secondary" textColor="tertiary">
    <Heading size={2} textColor="primary" caps>Why do we need a Router?</Heading>
  </Slide>,

 
  <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
    <Heading size={6} textColor="primary" caps>Better UX</Heading>
    <List>
      <Appear><ListItem>We want to avoid hard reload (It's a SPA)</ListItem></Appear>
      <Appear><ListItem>Smooth transition & animations between navigations</ListItem></Appear>
      <Appear><ListItem>Resolve the issue of URL and page resource mapping</ListItem></Appear>
    </List>
  </Slide>,


  <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
    <Heading size={6} textColor="primary" caps>source of truth</Heading>
    <Appear><Text textColor="tertiary">Redux: App data</Text></Appear>
    <Appear><Text textColor="tertiary">Router: URL</Text></Appear>
  </Slide>,


  <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
    <Heading size={6} textColor="primary" caps>A bit history</Heading>
    <Appear>
      <Text textColor="tertiary">
      In the past, to change URL, the <strong>only</strong> way we can do is through <code>window.location</code>.
      But the problem is: it <strong>hard</strong> reloads the page. What's the work around ??? Twitter
      uses the famous hashbang (#!) URL.
      </Text>
    </Appear>
  </Slide>,


  <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
    <Heading size={1} textColor="primary">🤔</Heading>
    <List>
      <Appear><ListItem>Ugly URL doesn't map correctly to the server side resources</ListItem></Appear>
      <Appear><ListItem>It's fragile that breaks progressive enhancement</ListItem></Appear>
      <Appear><ListItem>SEO unfriendly without hacks</ListItem></Appear>
    </List>
  </Slide>,


  <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
    <Heading size={6} textColor="primary" caps>history API to rescue</Heading>
    <List style={{listStyle:'none'}}>
      <ListItem style={{fontSize: '2rem'}}>pushState — pushes a new location onto the history stack</ListItem>
      <ListItem style={{fontSize: '2rem'}}>replaceState — overwrites the current location on the stack</ListItem>
      <ListItem style={{fontSize: '2rem'}}>back — navigates to the previous location on the stack</ListItem>
      <ListItem style={{fontSize: '2rem'}}>forward — navigates to the next location on the stack</ListItem>
      <ListItem style={{fontSize: '2rem'}}>go — navigates to a location on the stack, in either direction.</ListItem>
    </List>
  </Slide>,
  
  
  <Slide transition={['zoom']}>
    <Heading size={2} textColor="secondary" caps>How are we gonna use it???</Heading>
  </Slide>,



  <Slide transition={['fade']} textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>Good point for code split</Heading>
    <List>
      <ListItem>Push and render initial route</ListItem>
      <ListItem>Precache and Lazy load remaining routes</ListItem>
    </List>
    <Text fit>This is a common practise to ease the giant bundle issue of single page apps.</Text>
  </Slide>,


  <Slide transition={['fade']} textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>static vs dynamic</Heading>
    <Text>
      <Link textColor="tertiary" href="https://github.com/ReactTraining/react-router/blob/v3/modules/Route.js#L33-L39)">*not* renderable</Link>
    </Text>
    <CodePane lang="javascript" source={staticRoutes} />
    <Text>
      <Link textColor="tertiary" href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Route.js#L114-L129">renderable</Link>
    </Text>
    <CodePane lang="javascript" source={dynamicRoutes} />
  </Slide>,


  
  <Slide transition={['fade']} textColor="tertiary">
    <Link textColor="tertiary" href="https://github.com/itriage/employer_web_client/blob/03962b2702310a75d061c2db3e6bb96241f13c22/src/routes/index.jsx">Time travel back to our good routes</Link>
    <hr />
    <Link textColor="tertiary" href="https://github.com/itriage/employer_web_client/blob/master/src/routes/index.jsx">what it looks now?</Link>
    <hr />
    <Image src={futureGIF} height={400}/>
  </Slide>,
  

  <Slide transition={['spin']}>
    <Heading size={1} textColor="secondary">🙏</Heading>
  </Slide>
]

