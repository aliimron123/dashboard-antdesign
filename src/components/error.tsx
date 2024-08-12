import { Result, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ErrorResponses = () => {
  return (
    <div className="min-h-full">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/dashboard">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
};

export default ErrorResponses;
