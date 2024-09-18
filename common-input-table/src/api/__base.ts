import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosHeaders } from 'axios';

// TODO: define a generic interface for request manager(s)
export type RequestManager = AxiosInstance;

export type ApiAdapterRequestHeaders = Record<string, string>;

export function convertHeaderToAxiosHeaders(
  reqHeaders?: ApiAdapterRequestHeaders | null,
): AxiosHeaders | undefined {
  if (!reqHeaders) {
    return undefined;
  }
  const axiosHeaders = new AxiosHeaders();
  Object.entries(reqHeaders).forEach(([k, v]) => {
    axiosHeaders?.set(k, v);
  });
  return axiosHeaders;
}

export interface IApiAdapters<T extends BaseApiAdapterClass> {
  buildWithRequestHeaders(headers: ApiAdapterRequestHeaders): T;
}

export class BaseApiAdapterClass {
  protected readonly requestManager: RequestManager;
  private requestHeaders: ApiAdapterRequestHeaders | null;
  private abortSignal: AbortSignal | null; // TODO: implement later

  constructor(initRequestManager: RequestManager) {
    this.requestManager = initRequestManager;
    this.requestHeaders = null;
    this.abortSignal = null;

    // NOTE: important since we don't use Object.freeze on base
    this.get.bind(this);
    this.request.bind(this);
    this.setRequestHeaders.bind(this);
  }

  setAbortSignal(signal: AbortSignal | null): this {
    this.abortSignal = signal;
    return this;
  }

  setRequestHeaders(headers: ApiAdapterRequestHeaders): this {
    this.requestHeaders = headers;
    return this;
  }

  protected async get<T>(url: string, params?: any): Promise<T | null> {
    const axiosHeaders = convertHeaderToAxiosHeaders(this.requestHeaders);
    const res = await this.requestManager.get<T>(url, {
      params,
      headers: axiosHeaders,
      signal: this.abortSignal ?? undefined,
    });
    return res?.data ?? null;
  }

  // TODO: group params into 1 object
  protected async request<R, P = undefined>(
    url: string,
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    payload?: P,
    params?: any,
    requestHeaders?: ApiAdapterRequestHeaders,
    rest?: AxiosRequestConfig,
  ): Promise<R | null> {
    //
    const axiosHeaders = convertHeaderToAxiosHeaders(
      requestHeaders ?? this.requestHeaders,
    );

    //
    const res = await this.requestManager.request<R, AxiosResponse<R, P>>({
      url,
      method,
      params,
      data: payload,
      headers: axiosHeaders,
      signal: this.abortSignal ?? undefined,
      ...rest,
    });

    return res?.data ?? null;
  }
}
