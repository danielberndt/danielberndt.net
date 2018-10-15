import React from "react";
import Layout from "../components/layout";
import {Hero, H3, BodyText, Link} from "../style/typo";

const NotFoundPage = () => (
  <Layout>
    <Hero>D</Hero>
    <H3 css={{marginBottom: "3rem"}}>No such page.</H3>
    <BodyText>
      Go to <Link href="/">Homepage</Link>.
    </BodyText>
  </Layout>
);

export default NotFoundPage;
