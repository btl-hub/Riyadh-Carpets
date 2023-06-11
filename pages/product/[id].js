import React from "react";

import { ProductPage } from "components/ProductPage/ProductPage";
import apiAxios from "utils/apiAxios";

const Product = ({ data }) => {
  return <ProductPage product={data} />;
};

export async function getStaticPaths() {
  try {
    const res = await apiAxios("/products");
    const data = res.data;
    const paths = data.map(({ id }) => ({
      params: { id: id },
    }));
    return {
      paths,

      fallback: "blocking",
    };
  } catch (e) {
    console.log(e);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await apiAxios(`products/${params.id}`);
    const post = res.data;
    return {
      props: {
        data: post,
      },
      revalidate: 300,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
      props: {},
    };
  }
}
export default Product;
