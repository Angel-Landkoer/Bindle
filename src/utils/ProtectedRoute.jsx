import { useAdmission } from "./useAdmission";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { storageState } = useAdmission();
  const { local, session } = storageState;

  if (!local && !session) {
    return <Navigate to="/login" />;
  }

  return children;
}
