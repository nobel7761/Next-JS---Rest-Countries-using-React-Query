import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

//create client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
