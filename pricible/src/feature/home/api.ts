import { AxiosResponse } from "axios";
import API from "../../API";

export type Category = {
  id: number;
  name: string;
};

export const getAllCategory = async (): Promise<Category[]> => {
  try {
    const response: AxiosResponse<Category[]> = await API.get(`Category`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Đã có lỗi xảy ra. Vui lòng báo lại với chúng tôi để được hỗ trợ"
    );
  }
};
