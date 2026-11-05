import { Navigate } from "react-router-dom";

// Si isAllowed es false, redirige a redirectTo; si no, muestra el contenido.
const ProtectedRoute = ({ isAllowed, redirectTo = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};

export default ProtectedRoute;
