import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api.js";

const useAuthUser = () => {
  // auth user contains { user, isLoading }
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, //auth check only once
  });
  return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
};

export default useAuthUser;
