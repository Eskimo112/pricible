import { AxiosResponse } from "axios";
import API from "../../API";
import { HistoryPrice } from "../../models/HistoryPrice";
import { Product } from "../../models/Product";

export type WishListItem = {
  id: number;
  productId: number;
  accountId: number;
};

export const getWishList = async (
  accountId: number
): Promise<WishListItem[]> => {
  try {
    const response: AxiosResponse<WishListItem[]> = await API.get(
      `WishList/getWishListByAccountId?accountId=${accountId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Đã có lỗi xảy ra. Vui lòng báo lại với chúng tôi để được hỗ trợ"
    );
  }
};

export const addToWishList = async (
  accountId: number,
  productId: number
): Promise<null> => {
  try {
    const response: AxiosResponse<null> = await API.post(
      `WishList/addWishToWishList?accountId=${accountId}&productId=${productId}`
    );
    return null;
  } catch (error) {
    throw new Error(
      "Đã có lỗi xảy ra. Vui lòng báo lại với chúng tôi để được hỗ trợ"
    );
  }
};
export const removeFromWishList = async (
  accountId: number,
  productId: number
): Promise<null> => {
  try {
    const response: AxiosResponse<WishListItem[]> = await API.delete(
      `WishList/removeWishFromWishList?accountId=${accountId}&productId=${productId}`
    );
    return null;
  } catch (error) {
    throw new Error(
      "Đã có lỗi xảy ra. Vui lòng báo lại với chúng tôi để được hỗ trợ"
    );
  }
};
