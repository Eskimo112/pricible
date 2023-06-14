import { AxiosResponse } from "axios";
import { useState } from "react";
import API from "../../API";
import { Filter } from "../../models/Filter";
import { Product } from "../../models/Product";

type ApiResponse<T> = {
  data: T;
};

export const useProducts = () => {
  const getProducts = async (filter: Filter): Promise<Product[]> => {
    try {
      // setLoading(true);
      let queryUrl = "";
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

      const response: AxiosResponse<Product[]> = await API.get(
        `Product/?${queryUrl}`
      );

      // setLoading(false);
      return response.data;
    } catch (error) {
      // setLoading(false);
      throw new Error(
        "Đã có lỗi xảy ra. Hãy liên hệ với chúng tôi để được hỗ trợ"
      );
    }
  };

  return { getProducts };
};
