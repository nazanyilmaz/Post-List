import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderView from "./components/header/HeaderView";
import ListController from "./pages/ListPage/ListController";
import CreateController from "./pages/CreatePage/CreateController";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListController />} />
        <Route path="/create" element={<CreateController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
