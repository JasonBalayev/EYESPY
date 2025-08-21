import * as React from "react";
import Layout from "./layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        {/* Empty page */}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;