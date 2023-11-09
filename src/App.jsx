import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/appRouter";
import RootProvider from './core/providers/root_provider' 

RootProvider


function App() {

  return (
    <>
      <RootProvider>
        <RouterProvider 
          router={ appRouter }
        />
      </RootProvider>
    </>

  )
}

export default App;
