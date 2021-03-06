import React from "react";
import Layout from "../components/Layout";
import {Hero, H3, Overline, Link, BorderHeading} from "../style/typo";
import BlogTeaser from "../components/BlogTeaser";
import Text from "../style/Text";
import Col from "../style/Col";

const Project = ({time, name, link, children}) => (
  <Col sp={1}>
    <Col>
      <Overline>{time}</Overline>
      <H3>{link ? <Link href={link}>{name}</Link> : name}</H3>
    </Col>
    <Text>{children}</Text>
  </Col>
);

const IndexPage = () => (
  <Layout>
    <Col sp={7}>
      <Col align="start" sp={5}>
        <Hero>Hello!</Hero>
        <Col sp={3}>
          <Text>
            I'm Daniel. Berlin based <b>Web developer</b> with a background in{" "}
            <b>computer linguistics</b> and <b>machine learning</b>.
          </Text>
          <Text>
            These days I'm helping game devs (and others) to add some delight to their project
            management routines. Check out what I'm doing together with{" "}
            <Link href="http://maschinen-mensch.com/">Maschinen-Mensch</Link> on{" "}
            <Link href="https://www.codecks.io">Codecks</Link> here!
          </Text>
        </Col>
      </Col>
      <BlogTeaser />
      <Col sp={4}>
        <BorderHeading>Technologies</BorderHeading>
        <Col sp={2}>
          <Text>
            I'm mostly working with <b>JavaScript</b> these days.{" "}
            <Link href="https://reactjs.org/">React</Link> on the frontend and{" "}
            <Link href="https://nodejs.org">Node.js</Link> for my server work.
          </Text>
          <Text>
            Both, <Link href="https://www.typescriptlang.org/">Typescript</Link> and{" "}
            <Link href="https://flow.org/">Flow</Link> are great additions for creating maintainable
            software.
          </Text>
          <Text>
            Database-wise I'm a big fan of{" "}
            <Link href="https://www.postgresql.org/">PostgreSQL</Link>, even though I'm still not
            quite sure, how to actually pronounce it.
          </Text>
          <Text>
            Oh yes. And I do quite a lot of contract work with{" "}
            <Link href="https://wordpress.org/">WordPress</Link>. Not necessarily because I like the
            technology, but because it often makes a lot of sense for the customer.
          </Text>
        </Col>
      </Col>
      <Col sp={4}>
        <BorderHeading>Portfolio</BorderHeading>
        <Col sp={5}>
          <Project time="2015 -" name="Codecks" link="https://www.codecks.io">
            Project management tool for game developers.
          </Project>
          <Project
            time="2017"
            name="Homepage for DB International Operations"
            link="https://io.deutschebahn.com"
          >
            One example of my WordPress work.
          </Project>
          <Project time="2013 - 2014" name="Patience">
            Assisting experts to teach online.
          </Project>
          <Project time="2012 - 2013" name="Jura Online" link="https://jura-online.de">
            Learning platform for German law students.
          </Project>
          <Project time="2010 - " name="piq" link="https://piq.codeus.net">
            Pixel art community. My first big web app. The website was completely redone in 2018.
          </Project>
        </Col>
      </Col>
      <Col sp={4}>
        <BorderHeading>Get in touch</BorderHeading>
        <Text>
          I mostly hang out on <Link href="https://twitter.com/D40B">Twitter</Link>. You can also
          check out some of my work on <Link href="https://github.com/danielberndt">GitHub</Link>.
        </Text>
      </Col>
    </Col>
  </Layout>
);

export default IndexPage;
