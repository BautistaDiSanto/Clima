import "./Global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Body } from "./components/body/Body";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Body />
    </QueryClientProvider>
  );
}

export default App;
