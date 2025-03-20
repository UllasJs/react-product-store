import { Route, Routes } from "react-router-dom";
import { routeComponents } from "../pages";
interface Props {
    routes: RouteState[];
}

const AppRoutes = ({ routes }: Props) => {
    return (
        <Routes>
            {routes.map(route => {
                const Component = routeComponents[route.pathname!];
                return (
                    <Route key={route.id} path={route.path} element={Component ? <Component /> : null}>
                        {route.childs?.map(child => {
                            const Comp = routeComponents[child.pathname!];
                            return (
                                <Route key={child.id} path={child.path} element={Comp ? <Comp /> : null} />
                            )
                        })}
                    </Route>
                )
            })}
        </Routes>
    );
};

export default AppRoutes;
