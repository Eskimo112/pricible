import { AxiosResponse } from "axios";
import { useState } from "react";
import API from "../../API";
import { User } from "../../models/User";

type ApiResponse<T> = {
  data: T;
};

type LoginCredentials = {
  email: string;
  password: string;
};

type SignUpCredentials = {
  name: string;
  email: string;
  password: string;
};

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (credentials: LoginCredentials): Promise<User> => {
    try {
      setLoading(true);
      const response: AxiosResponse<ApiResponse<User>> = await API.get(
        `Account/${credentials.email}/${credentials.password}`
      );
      setLoading(false);
      return response.data.data;
    } catch (error) {
      setLoading(false);
      throw new Error(
        "Login failed.Please contact with us to report this issue"
      );
    }
  };

  const signup = async (credentials: SignUpCredentials): Promise<any> => {
    try {
      setLoading(true);

      const response: AxiosResponse<ApiResponse<User>> = await API.post(
        `Account/${credentials.email}/${credentials.password}/${credentials.name}`
      );
      setLoading(false);

      return null;
    } catch (error) {
      setLoading(false);
      throw new Error(
        "Sign up failed. Please contact with us to report this issue"
      );
    }
  };

  return { login, signup, loading };
};
