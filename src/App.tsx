import Nav from "./Components/Nav.tsx";
import Footer from "./Components/Footer.tsx";
import Product from "./Components/Products.tsx";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-bl from-rose-100 to-teal-100">
        <Nav />
      </div>
      <div className="flex justify-center items-center">
        <ul className="grid grid-cols-4 grid-row-4 gap-3">
          <li className="col-span-4 sm:col-span-1">
            <Product />
            <Product />
            <Product />
            <Product />
          </li>
          <li className="col-span-4 sm:col-span-1">
            <Product />
            <Product />
            <Product />
            <Product />
          </li>
          <li className="col-span-4 sm:col-span-1">
            <Product />
            <Product />
            <Product />
            <Product />
          </li>
          <li className="col-span-4 sm:col-span-1 mb-8">
            <Product />
            <Product />
            <Product />
            <Product />
          </li>
        </ul>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
