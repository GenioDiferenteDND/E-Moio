import ProductList from "@components/frontStore/catalog/product/list/List";
import { _ } from "@evershop/evershop/src/lib/locale/translate";
import PropTypes from "prop-types";
import React from "react";

export default function FeaturedProducts({ collections }) {
  if (!collections || collections.length === 0) {
    return null;
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

export const layout = {
  areaId: "content",
  sortOrder: 15,
};

export const query = `
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
