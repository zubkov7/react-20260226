import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";

import "./reset.css";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ContactsLayout } from "../contacts-layout/contacts-layout";
import { HeadphonePage } from "../headphone-page/headphone-page";
import { HeadphonesLayout } from "../headphones-layout/headphones-layout";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              {/* <Layout>
                <HeadphonesPage />
              </Layout> */}
              <Route element={<Layout />}>
                <Route path='/' element={<div>home page</div>} />
                <Route path='/contacts' element={<ContactsLayout />}>
                  <Route index element={<div>contacts page</div>} />
                  <Route path='delivery' element={<div>delivery page</div>} />
                </Route>
                <Route path='headphone' element={<HeadphonesLayout />}>
                  <Route path=':headphoneId' element={<HeadphonePage />} />
                </Route>
              </Route>
              <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
