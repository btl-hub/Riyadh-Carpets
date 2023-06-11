import React from "react";
import { HomePage } from "components/HomePage/HomePage";
import apiAxios from "utils/apiAxios";

const Home = () => {
  return (
    <HomePage
      // availableProducts={availableproducts}
      // endedProducts={endedProducts}
    />
  );
};

export default Home;

// export async function getStaticProps(context) {
//   let availableproducts = [];
//   let endedProducts = [];
//   try {
//     const res = await apiAxios("/products");
//     const allProducts = await res.data;
//     for (let product of allProducts) {
//       product?.availableQuantity == 0
//         ? endedProducts.push(product)
//         : availableproducts.push(product);
//     }
//   } catch (e) {
//     console.log(e);

//     return {
//       notFound: true,
//       props: {},
//     };
//   }
//   return {
//     props: {
//       availableproducts,
//       endedProducts,
//     },
//     revalidate: 300,
//   };
// }
