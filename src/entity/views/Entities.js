import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useApi } from "../../common";
import { Content } from "../../ui";
import Loader from "../../ui/Loader";
import EntityItem from "../components/EntityItem";

import EntitiesStyle from "./entities.module.scss";

const Entities = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [isLoading, error, setError, sendRequest] = useApi();
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const handleEntitiesResponse = (response) => {
      setEntities(response.data.entities.entities);
    };

    sendRequest(
      {
        endpoint: "graphql",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: {
          query: `
            query Entities($pageSize: Int!, $pageNumber: Int!){
              entities(pagination: {
                  pageSize: $pageSize,
                  pageNumber: $pageNumber
              }){
                  totalEntities
                  entities {
                  id
                  title
                  isPrivate
                  isCodeAccessible
                  accessCode
                  tag {
                      tag
                  }
                }
              }
            }
        `,
          variables: {
            pageSize: 10,
            pageNumber: 1,
          },
        },
      },
      handleEntitiesResponse
    );
  }, []);

  


  return (
    <Content className={EntitiesStyle["entities-content"]}>
      <h1 style={{ flex: "100%", textAlign: "center" }}>entities</h1>
      {isLoading && <Loader size={8}></Loader>}
      {entities.map((entity) => (
        <EntityItem key={entity.id} entity={entity} />
      ))}
    </Content>
  );
};

export default Entities;
