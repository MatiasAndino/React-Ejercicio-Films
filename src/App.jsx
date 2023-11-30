import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/appRouter";
import RootProvider from './core/providers/root_provider' 

RootProvider


function App() {

  return (
    <>
      <div className="bg-dark text-light">
        <RootProvider>
          <RouterProvider 
            router={ appRouter }
          />
        </RootProvider>
      </div>
    </>
  )
}

export default App;
