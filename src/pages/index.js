import React from "react";
import styled from "react-emotion";
import Layout from "../components/layout";
import {Hero, H2, H3, Overline, Link, BodyText} from "../style/typo";

const ProjectContainer = styled("div")({
  ":not(:last-child)": {
    marginBottom: "2rem",
  },
});

const Project = ({time, name, link, children}) => (
  <ProjectContainer>
    <Overline>{time}</Overline>
    <H3>{link ? <Link href={link}>{name}</Link> : name}</H3>
    <BodyText>{children}</BodyText>
  </ProjectContainer>
);

const IndexPage = () => (
  <Layout>
    <Hero>Hello!</Hero>
    <div css={{marginBottom: "3rem"}}>
      <BodyText>
        I'm Daniel. Berlin based <b>Web developer</b> with a background in{" "}
        <b>computer linguistics</b> and <b>machine learning</b>.
      </BodyText>
      <BodyText>
        These days I'm helping game devs (and others) to add some delight to their project
        management routines. Check out what <Link href="https://twitter.com/supamanu">Manu</Link>{" "}
        and I did on <Link href="https://www.codecks.io">Codecks</Link> here!
      </BodyText>
    </div>
    <H2>Technologies</H2>
    <div css={{marginBottom: "3rem"}}>
      <BodyText>
        I'm mostly working with <b>JavaScript</b> these days.{" "}
        <Link href="https://reactjs.org/">React</Link> on the frontend and{" "}
        <Link href="https://nodejs.org">Node.js</Link> for my server work.
      </BodyText>
      <BodyText>
        Both, <Link href="https://www.typescriptlang.org/">Typescript</Link> and{" "}
        <Link href="https://flow.org/">Flow</Link> are great additions for creating maintainable
        software.
      </BodyText>
      <BodyText>
        Database-wise I'm a big fan of <Link href="https://www.postgresql.org/">PostgreSQL</Link>,
        even though I'm still not quite sure, how to actually pronounce it.
      </BodyText>
      <BodyText>
        Oh yes. And I do quite a lot of contract work with{" "}
        <Link href="https://wordpress.org/">WordPress</Link>. Not necessarily because I like the
        technology, but because it often makes a lot of sense for the customer.
      </BodyText>
    </div>
    <H2>Portfolio</H2>
    <div css={{marginBottom: "3rem"}}>
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
    </div>
    <H2>Get in touch</H2>
    <div>
      <BodyText>
        I mostly hang out on <Link href="https://twitter.com/D40B">Twitter</Link>. You can also
        check out some of my work on <Link href="https://github.com/danielberndt">GitHub</Link>.
      </BodyText>
    </div>
  </Layout>
);

export default IndexPage;
