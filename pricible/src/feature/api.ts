import { AxiosResponse } from "axios";
import API from "../API";
import { Filter } from "../models/Filter";
import { Product } from "../models/Product";

type ProductResponse = {
  data: Product[];
  pageindex: number;
  pagesize: number;
  totalpage: number;
};

export const getProducts = async (
  filter?: Filter
): Promise<ProductResponse> => {
  try {
    let queryUrl = "";
    if (filter) {
      if (filter.keyword) queryUrl += `&key=${filter.keyword}`;
      if (filter.smallestPrice)
        queryUrl += `&smallestPrice=${filter.smallestPrice}`;
      if (filter.biggestPrice)
        queryUrl += `&biggestPrice=${filter.biggestPrice}`;

      if (filter.provider) queryUrl += `&provider=${filter.provider}`;
      if (filter.category) queryUrl += `&category=${filter.category}`;
      if (filter.location) queryUrl += `&location=${filter.location}`;
      if (filter.isMall) queryUrl += `&isMall=${Boolean(filter.isMall)}`;
      if (filter.pageSize) queryUrl += `&pageSize=${filter.pageSize}`;
      if (filter.pageIndex) queryUrl += `&pageIndex=${filter.pageIndex}`;
    }
    const response: AxiosResponse<ProductResponse> = await API.get(
      `Product/?${queryUrl}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Đã có lỗi xảy ra. Hãy liên hệ với chúng tôi để được hỗ trợ"
    );
  }
};
