import React from "react";
import { Link } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-item.styles";

const CollectionPreview = ({ title, items, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <Link className="link" to={`shop/${routeName}`}>
      Go to Collection
    </Link>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
