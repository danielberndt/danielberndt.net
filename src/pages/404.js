import React from "react";
import Layout from "../components/Layout";
import {Hero, H3, BodyText, Link} from "../style/typo";

const NotFoundPage = () => (
  <Layout>
    <Hero>404</Hero>
    <H3 style={{marginBottom: "3rem"}}>No such page.</H3>
    <BodyText>
      Go to <Link href="/">Homepage</Link>.
    </BodyText>
  </Layout>
);

export default NotFoundPage;
