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
      const response: AxiosResponse<User> = await API.get(
        `Account/${credentials.email}/${credentials.password}`
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      throw new Error(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại tài khoản và mật khẩu"
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
        "Đăng ký không thành công. Hãy liên hệ với chúng tôi để được hỗ trợ"
      );
    }
  };

  return { login, signup, loading };
};
