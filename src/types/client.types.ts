export type MutationMethod =
  | "GET"
  | "POST"
  | "DELETE"
  | "PUT"
  | "PATCH"
  | "HEAD"
  | "OPTIONS";

export interface QueryFetchOptions {
  url: string;
  inputParams?: any;
  // token?: string;
}

export interface MutationFetchOptions {
  url: string;
  method: MutationMethod;
  body?: any;
  baseURL?: string;
}

export interface MessageResult {
  status: number;
  message: string;
}

export interface ApiError {
  message: string;
  name: string;
  stack: string;
  config: any;
  code: string;
  status: null | number;
}
