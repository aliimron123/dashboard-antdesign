/* eslint-disable react/function-component-definition */
import { QueryClientProvider } from "@tanstack/react-query";
import "./assets/style/App.css";
import { queryClient } from "./config/queryClient";
import RouterNavigation from "./routes/RouterNavigation";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterNavigation />
    </QueryClientProvider>
  );
}

export default App;
