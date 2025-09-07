import { SearchX } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";

function NotFound() {
  return (
    <aside id="NotFound">
        <Header/>
        <div className="Main">          
          <div className="flex flex-col items-center gap-5">
            <SearchX />
            <h1>O que você procura não existe ou está mais disponível.</h1>
          </div>
        </div>
        <Footer/>
    </aside>
  )
}

export default NotFound;
