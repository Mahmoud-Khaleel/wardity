const ProductShimmer = () => {
  return (
    <div
      className="
        bg-white rounded-2xl overflow-hidden 
        shadow-md flex flex-col w-full h-[420px] 
        animate-pulse
      "
    >
      <div className="h-2/4 w-full bg-gray-200 relative"></div>

      <div className="flex flex-col justify-between grow p-4">
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>

          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>

          <div className="flex items-center space-x-2 mt-2">
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="h-6 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductShimmer;
