const LandingPage = () => {
  return (
    <div>
      <main className="bg-gray-50">
        <div className="container mx-auto p-6">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center text-gray-900 
                    no-underline hover:no-underline font-bold 
                    text-2xl lg:text-4xl"
              href="#"
            >
              Zuiver bieden
            </a>
            <div className="flex w-1/2 justify-end">
              <div className="">
                <button
                  type="button"
                  className="inline-block 
                  px-6 py-2.5 bg-rose-600 text-white 
                  font-medium text-xs leading-tight 
                  uppercase rounded shadow-md hover:bg-rose-700 
                  hover:shadow-lg focus:bg-rose-700 
                  focus:shadow-lg focus:outline-none 
                  focus:ring-0 active:bg-rose-800 active:shadow-lg 
                  transition duration-150 ease-in-out"
                >
                  Try It Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div
        className="mx-auto container p-6 
                lg:flex lg:items-center lg:justify-between"
      >
        <h2
          className="text-3xl font-bold tracking-tight 
                  text-gray-900 sm:text-4xl"
        >
          <span className="block">Slow and Steady Growth</span>
          <span className="block text-amber-500">
            With minimum effort. Yeah let's go!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">IMAGE</div>
      </div>
    </div>
  );
};
export default LandingPage;
