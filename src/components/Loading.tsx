const Loading = () => {
  return (
    <section className="container mx-auto flex min-h-[300px] w-full items-center justify-center px-4 py-10 sm:min-h-[350px] sm:px-6 sm:py-12 lg:min-h-[400px] lg:px-8 lg:py-16">
      <div className="flex w-full max-w-md flex-col items-center justify-center text-center">
        <div className="h-10 w-10 animate-spin rounded-full bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] p-[3px] sm:h-12 sm:w-12">
          <div className="h-full w-full rounded-full bg-white" />
        </div>

        <h3 className="mt-4 text-base font-bold text-[#0F172A] sm:mt-5 sm:text-lg">
          Loading Technologies
        </h3>

        <p className="mt-1 max-w-xs text-xs leading-5 text-gray-500 sm:max-w-md sm:text-sm sm:leading-6">
          Please wait while we load the technology stack...
        </p>
      </div>
    </section>
  );
};

export default Loading;
