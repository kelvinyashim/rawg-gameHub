import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Heading>Oops...</Heading>

      <Text padding='mx-5'>  
        {isRouteErrorResponse(error) ? "Invalid Page" : "Something went wrong"}
      </Text>
    </>
  );
};

export default ErrorPage;
