export const BASE_URL = "https://vercel.com/savan5033s-projects/expense-tracker-p1nd-api/";

export const API_PATHS = {
  AUTH: {
    LOGIN: "api/v1/auth/login",
    REGISTER: "api/v1/auth/register",
    GET_USER_INFO: "api/v1/auth/getUser",
  },
  DASHBOARD: {
    GET_DATA: "api/v1/dashboard",
  },
  INCOME: {
    ADD_INCOME: "api/v1/income/add",
    GET_ALL_INCOME: "api/v1/income/get",
    DELETE_INCOME: (incomeid) => `api/v1/income/delete/${incomeid}`,
    DOWNLOAD_INCOME: "api/v1/income/downloadexcel",
  },
  EXPENSE: {
    ADD_EXPENSE: "api/v1/expense/add",
    GET_ALL_EXPENSE: "api/v1/expense/get",
    DELETE_EXPENSE: (expenseid) => `api/v1/expense/delete/${expenseid}`,
    DOWNLOAD_EXPENSE: "api/v1/expense/downloadexcel",
  },
  IMAGE: {
    UPLOAD_IMAGE: "api/v1/auth/upload-image",
  },
};
