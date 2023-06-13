import axios, { AxiosError } from "axios";

const config = {
  baseURL: "https://pricible.azurewebsites.net/api/",
  withCredentials: false,
};

// NOTE: Create axios instance.
const API = axios.create(config);

// NOTE: Add authorization header using request interceptor
API.interceptors.request.use(async function (request) {
  const authHeader = request.headers["Authorization"];
  if (authHeader && authHeader !== "Bearer ") {
    return request;
  }

  const session = { access_token: "Token" }; //NOTE: handle later //= await getSession();
  if (!session?.access_token) return request;
  request.headers["Authorization"] = `Bearer ${session.access_token}`;
  return request;
});

// NOTE: Response interceptor, handle error
// API.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (error) {
//     const data = error.response?.data;
//     const result = await zApiServerErrorSchema.safeParseAsync(data);
//     if (!result.success) {
//       return Promise.reject(error);
//     }
//     const apiErr = new ApiError(result.data, error.response?.status);
//     return Promise.reject(apiErr);
//   }
// );

// export class ApiError extends AxiosError {
//   __apiError: ApiServerError;
//   __statusCode: number;
//   constructor(e: ApiServerError, statusCode = 500, msg = "[api-error]") {
//     super(msg);
//     this.__apiError = e;
//     this.__statusCode = statusCode;
//   }

//   public get statusCode() {
//     return this.__statusCode;
//   }

//   public get apiError() {
//     return this.__apiError;
//   }

//   public get errorCode() {
//     return (
//       (this.__apiError.error_code?.toString() as MaybeErrorLocale) || "unknown"
//     );
//   }

//   isUserError() {
//     return this.__statusCode >= 400 && this.__statusCode < 500;
//   }

//   parseString(): string {
//     return "";
//   }
// }

// export function isApiError(error: unknown): error is ApiError {
//   return error instanceof ApiError;
// }

export default API;
