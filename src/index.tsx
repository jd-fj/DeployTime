import ReactDOM from "react-dom/client";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Page_1 from "./routes/page_1";
import Page_2 from "./routes/page_2";
// import Page3 from "./routes/page3";
// import SvgGrid from "./routes/svgGrid";
import SvgGrid2 from "./routes/svgGrid2";
import './index.css';
import HomePage from "./routes/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route
          index
          element={
            <HomePage/>
          }
        />
        <Route path="/page_1" element={<Page_1 />} />
        <Route path="/page_2" element={<Page_2 />} />
        <Route path="/svgGrid2" element={<SvgGrid2 />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", fontSize: "10rem" }}>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);