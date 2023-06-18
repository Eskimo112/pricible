import { AxiosResponse } from "axios";
import API from "../../API";
import { HistoryPrice } from "../../models/HistoryPrice";
import { Product } from "../../models/Product";

export const getProductDetail = async (id: string): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await API.get(
      `Product/id?id=${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Đã có lỗi xảy ra. Vui lòng báo lại với chúng tôi để được hỗ trợ"
    );
  }
};

export const getProductPriceHistory = async (
  id: string
): Promise<HistoryPrice[]> => {
  try {
    const response: AxiosResponse<HistoryPrice[]> = await API.get(
      `HistoryPrice/id?id=${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Đã có lỗi xảy ra. Vui lòng báo lại với chúng tôi để được hỗ trợ"
    );
  }
};
