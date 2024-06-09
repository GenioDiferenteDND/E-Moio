import React from 'react';
import ProductList from "@components/frontStore/catalog/product/list/List";
import { _ } from "@evershop/evershop/src/lib/locale/translate";
import PropTypes from "prop-types";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// GraphQL query to fetch all collections
const query = gql`
  query query {
    collections {
      items {
        collectionId
        name
        products {
          items {
            productId
            name
            price {
              regular {
                value
                text
              }
              special {
                value
                text
              }
            }
            image {
              alt
              url: listing
            }
            url
          }
        }
      }
    }
  }
`;

// Data adapter to process the fetched data
const dataAdapter = (data) => {
  console.log("GraphQL data:", data); // Debugging
  if (data && data.collections && Array.isArray(data.collections.items)) {
    console.log("Collections array:", data.collections.items); // Debugging
    return data.collections.items;
  }
  return [];
};

// FeaturedProducts component to display collections and their products
function FeaturedProducts({ collections }) {
  if (!collections || !Array.isArray(collections) || collections.length === 0) {
    return <p>No collections available</p>;
  }

  return (
    <div className="pt-3">
      <div className="page-width">
        {collections.map((collection) => (
          <div key={collection.collectionId}>
            <h2 className="mt-3 mb-3 text-center uppercase tracking-widest">
              {collection.name}
            </h2>
            <ProductList products={collection.products.items} countPerRow={3} />
          </div>
        ))}
      </div>
    </div>
  );
}

FeaturedProducts.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      collectionId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      products: PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            productId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.shape({
              regular: PropTypes.shape({
                value: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
              }).isRequired,
              special: PropTypes.shape({
                value: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
            image: PropTypes.shape({
              alt: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
            }).isRequired,
            url: PropTypes.string.isRequired,
          })
        ).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

// Component to handle fetching and displaying the data
function FeaturedProductsContainer() {
  const { data, loading, error } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const adaptedData = dataAdapter(data);
  return <FeaturedProducts collections={adaptedData} />;
}

export const layout = {
  areaId: "content",
  sortOrder: 15,
};

export default FeaturedProductsContainer;
