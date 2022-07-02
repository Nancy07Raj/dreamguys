import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout, Menu } from "antd";
import store from "./store/store";
import FavList from "./FavList";
import FavRecord from "./FavRecord";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const { Header, Content } = Layout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="/">List</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/fav-records">Favourite records</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<FavList />} />
              <Route path="/fav-record" element={<FavRecord />} />
            </Routes>
          </Content>
        </BrowserRouter>
      </Layout>
    </Provider>
  </React.StrictMode>
);
