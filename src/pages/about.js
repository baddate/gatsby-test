import React from 'react'
import styled from 'styled-components'

import { breakPoints } from '../components/MediaType'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const AboutMe = styled.section`
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 1px 22px;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 1px;

  @media ${breakPoints.phone} {
     font-size: 17px;
  }
`
export default () => {
  return (
    <Layout>
      <Seo title='About' />
      <AboutMe>
        <p>
          My name is Alex. I graduated from computer science last year. now I am working on an Industrial Internet company which is different from traditinal IT company. Literally obsessed with coding & technology, overall.
          My knowledge in general is deep but, I have only been coding for a few years. Also I very love linux, especially <b>Arch Linux</b> distro.
          <br />
          <br />
          <br />
          I am now studying MIT's julia by some OS projects.
          Also, I am looking for some great idea for my side projects.
          So if you have an idea and are looking for someone to work with, don't hesitate to contact me.
          {/* I like challenges of all sorts so if you are looking for someone to work with, don't hesitate to drop me a message with any suggestions. Looking forward to hearing from you!🙂 */}
        </p>
        <marquee direction="right">I am from #Shanghai</marquee>
      </AboutMe>
    </Layout>
  )
}
