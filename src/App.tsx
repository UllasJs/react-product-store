import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppDispatch, RootState } from "./state/store";
import { AppRoutes } from "./components";
import { useEffect } from "react";
import { init } from "./state/slice/product";

const App = () => {
  const routes = useSelector((state: RootState) => state.route);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes routes={routes} />
    </BrowserRouter>
  );
}

export default App;