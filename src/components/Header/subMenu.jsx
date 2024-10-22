function SubMenu(props) {
  const { wrapperClass = "" } = props;
  return (
    <div
      className={`absolute pt-4 hidden group-hover:opacity-100 group-hover:flex h-48 w-96  text-black rounded-md ${wrapperClass}`}
    >
      <div className="relative  px-3 flex bg-orange-400 ">
        <div className="absolute -translate-y-full w-0 h-0 left-2 border-b-[10px] border-x-[10px] border-x-transparent border-b-orange-400"></div>
        <div className="block-1 flex flex-col justify-between py-2 pr-6">
          <div className="flex mb-2">
            <div className="avatar rounded-full h-10 w-10 bg-blue-400"></div>
            <p className="ml-4 h-10 flex items-center content-center border-b border-white flex-auto">
              Overview
            </p>
          </div>
          <div className="flex mb-2">
            <div className="avatar rounded-full h-10 w-10 bg-blue-400"></div>
            <p className="ml-4 h-10 flex items-center content-center border-b border-white flex-auto">
              Overview
            </p>
          </div>
          <div className="flex mb-2">
            <div className="avatar rounded-full h-10 w-10 bg-blue-400"></div>
            <p className="ml-4 h-10 flex items-center content-center border-b border-white flex-auto">
              Overview
            </p>
          </div>
        </div>
        <div className="block-2 flex flex-col justify-between py-2 pr-6">
          <div className="flex mb-2">
            <div className="avatar rounded-full h-10 w-10 bg-blue-400"></div>
            <p className="ml-4 h-10 flex items-center content-center border-b border-white flex-auto">
              Overview
            </p>
          </div>
          <div className="flex mb-2">
            <div className="avatar rounded-full h-10 w-10 bg-blue-400"></div>
            <p className="ml-4 h-10 flex items-center content-center border-b border-white flex-auto">
              Overview
            </p>
          </div>
          <div className="flex mb-2">
            <div className="avatar rounded-full h-10 w-10 bg-blue-400"></div>
            <p className="ml-4 h-10 flex items-center content-center border-b border-white flex-auto">
              Overview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
