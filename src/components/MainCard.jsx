const MainCard = () => {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow mt-5 hover:bg-gray-200 hover:shadow-2xl">
      <img
        className="rounded-2xl object-cover  p-3 mt-2 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyvU0GqA4WhYKCzmmpe-dqIx9yoy8vgrm7g&usqp=CAU"
        alt=""
      />
      <div className="p-2">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-500">
          India vs Nepal HIGHLIGHTS Asian Games 2023 cricket quarterfinal: IND
          wins by 23 runs to qualify for semifinal
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden sm:hidden md:block">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <a
          href="#"
          className="flex items-center px-3 py-2 text-sm font-medium text-center text-gray-600  justify-end"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MainCard;
