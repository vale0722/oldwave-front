import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HOME_ROUTES from 'domain/helpers/routes/home-routes.js';

export function RenderRoutes({
  routes,
  setIsLoading,
  isLoading,
  setIsOpenShoppingCar,
  isOpenShoppingCar,
}) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={
            <route.element
              props={route}
              routes={route.routes}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setIsOpenShoppingCar={setIsOpenShoppingCar}
              isOpenShoppingCar={isOpenShoppingCar}
            />
          }
        />
      ))}
    </Routes>
  );
}

export const ROUTES = [HOME_ROUTES];
