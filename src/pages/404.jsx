import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <div className="px-4 py-10 text-xl font-mono text-gray-300">
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <Link to="/" className="text-blue-700">
          Click here to return to back to jasonbalay.dev
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;