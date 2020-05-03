import React from "react";
import Layout from "../components/Layout";
import {Hero, H3, Link} from "../style/typo";
import Text from "../style/Text";

const NotFoundPage = () => (
  <Layout>
    <Hero>404</Hero>
    <H3 style={{marginBottom: "3rem"}}>No such page.</H3>
    <Text>
      Go to <Link href="/">Homepage</Link>.
    </Text>
  </Layout>
);

export default NotFoundPage;
