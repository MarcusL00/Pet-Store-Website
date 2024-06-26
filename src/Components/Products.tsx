const Product = () => {

    return (

    <div className="-z-10 mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img className="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1583096985230-7cbff05f1bba?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Hund</h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">hunde produkter</p>
            <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">10 kr</p>
                <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">50 kr</p>
                <p className="ml-auto text-base font-medium text-green-500">80% off</p>
            </div>
        </div>
    </div>
    );
};
export default Product;