import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./store";
import {RouterProvider} from "react-router";
import {routes} from "./routes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <RouterProvider router={routes} />
      </Provider>
  </StrictMode>,
)
