// src/contexts/AuthContext.tsx
import Cookies from "js-cookie";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export type AuthContextProps = {
  isAuthenticated: boolean;
  login: (email: string, address: string) => void;
  logout: () => void;
  user: { email: string; address: string } | null;
  loading: boolean;
};

const defaultAuthContextProps: AuthContextProps = {
  isAuthenticated: false,
  loading: false,
  login: () => {},
  logout: () => {},
  user: null,
};

export const AuthContext = createContext<AuthContextProps>(
  defaultAuthContextProps
);

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<{ email: string; address: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = (email: string, address: string) => {
    const token = btoa(JSON.stringify({ email, address }));
    Cookies.set("authToken", token, { expires: 1 });
    setUser({ email, address });
  };

  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
    navigate("/login");
  };

  const checkAuth = () => {
    const token = Cookies.get("authToken");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token));
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
        setUser(null);
        navigate("/login");
      }
    } else {
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const valueContext = useMemo(
    () => ({ isAuthenticated: !!user, login, logout, user, loading }),
    []
  );

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
