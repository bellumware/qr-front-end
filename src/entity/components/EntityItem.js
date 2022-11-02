import React from "react";
import { Button, Card, CardContent } from "../../ui";

import entityStyle from "./entityItem.module.scss";

const EntityItem = ({ entity }) => {
  const privacyStyle = entity.isPrivate
    ? entityStyle.private
    : entityStyle.public;
  let privacy = <i className={`${"material-icons"} ${entityStyle["lock-icon"]}`}>lock_open</i>;
  if (entity.isPrivate) {
    privacy = <i className={`${"material-icons"} ${entityStyle["lock-icon"]}`}>lock_outline</i>;
  }

  let accessCode = entity.isCodeAccessible
    ? entity.accessCode
    : "no access code";

  return (
    <Card className={entityStyle.entity}>
      <CardContent className={entityStyle.content}>
        <div className={entityStyle.title}>{entity.title}</div>
        <div className={privacyStyle}>{privacy}</div>
        <div className={entityStyle.accesscode}>{accessCode}</div>
        <div className={entityStyle.accesscode}>{entity.tag.tag}</div>
        <Button
          color="yellow"
          startIcon="edit"
          className={entityStyle.editbtn}
        ></Button>
        <Button
          color="red"
          startIcon="delete_outline"
          className={entityStyle.deletebtn}
        ></Button>
      </CardContent>
    </Card>
  );
};

export default EntityItem;
