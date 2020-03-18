import React from 'react';
import GeneralLayout from "../components/layouts/GeneralLayout.component";

const Blog = () => {
  return (
    <GeneralLayout>

      <section style={{
        padding: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h4>Blog</h4>

        <p>
          Keep calm and enjoy tribr
        </p>
      </section>

    </GeneralLayout>
  );
};

export default Blog;
