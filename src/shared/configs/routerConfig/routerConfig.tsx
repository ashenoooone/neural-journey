import { RouteProps } from "react-router-dom";
import { DigitsPage } from "~/pages/DigitsPage";
import { MainPage } from "~/pages/MainPage";
import { NotFoundPage } from "~/pages/NotFoundPage";

export enum Routes {
  MAIN = "main",
  DIGITS = "digits",
  NOT_FOUND = "not_found",
}

export const RoutesPaths: Record<Routes, string> = {
  [Routes.MAIN]: "/",
  [Routes.DIGITS]: "/digits",
  [Routes.NOT_FOUND]: "*",
};

export const RouterConfig: Record<Routes, RouteProps> = {
  [Routes.DIGITS]: {
    path: RoutesPaths.digits,
    element: <DigitsPage />,
  },
  [Routes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  [Routes.NOT_FOUND]: {
    path: RoutesPaths.not_found,
    element: <NotFoundPage />,
  },
};
