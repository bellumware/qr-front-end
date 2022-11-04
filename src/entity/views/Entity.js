import React from "react";
import { useParams } from "react-router-dom";

const Entity = () => {
  const { entityId } = useParams();
    console.log(entityId);
  return (
    <>
      <p>some entity {entityId}</p>
    </>
  );
};

export default Entity;
