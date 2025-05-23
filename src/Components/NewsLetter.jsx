import './Offers.css';

const NewsLetter = () => {
  return (
    <div
      className="flex flex-col justify-center items-center my-8 sm:my-12 md:my-16 lg:my-20 p-6 sm:p-8 md:p-12 lg:p-16 mx-auto sm:w-[80%] xl:w-[65%] h-auto min-h-[300px] sm:rounded-xl md:rounded-2xl shadow-lg"
      style={{ backgroundImage: `url("/Images/special.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white text-center leading-tight exo-font">
        Subscribe
      </h1>

      <p className="text-base sm:text-xl exo-font text-orange-400 mt-3 md:mt-4 text-center max-w-2xl">
        Subscribe our newsletter to stay updated every moment
      </p>
      {/* email form */}
     <form className="space-y-4 md:space-y-0 md:flex mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full md:w-auto md:ml-4 input px-4 sm:px-6 sm:text-lg py-3 border border-gray-300 rounded-lg md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition md:flex-grow"
          />
          <button
            type="submit"
            className="w-full md:w-auto md:mr-4 bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-4 sm:px-6 sm:text-lg rounded-lg md:rounded-l-none transition duration-300 exo-font">
            Submit
          </button>
        </form>
    </div>
  );
};

export default NewsLetter;