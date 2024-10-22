import Text from "../Text";

const MenuFooter = () => {
  return (
    <div
      className="w-full"
      style={{
        background: "linear-gradient(to right, #034ea1 42%, #f37317 42%)",
      }}
    >
      <div className="container mx-auto flex">
        {/* Left Section (Blue) */}
        <div className="w-[42%] text-white  py-4">
          <div className="flex flex-col h-full">
            <img
              src="/images/logo-location.png"
              alt="Sungjin Logo"
              className="mb-4 max-h-36 max-w-36"
            />
            <h3 className="text-lg font-semibold">VIETNAM FACTORY</h3>
            <Text class="mb-1">
              Ngoc Son Industrial Zone, Ngoc Son Commune,
            </Text>
            <Text class="mb-1">
              Tu Ky District, Hai Duong province, Vietnam
            </Text>
            <Text class="mb-1">T: +84 (0220) 3624 600</Text>
            <Text class="mt-3">e-mail: sungjin_vina@niceglove.com</Text>
          </div>
        </div>

        {/* Right Section (Orange) */}
        <div className="w-[42%] text-white p-6">
          <div className="grid  h-full">
            {/* About Us Links */}
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2">ABOUT US</h4>
              <p className="space-x-2 sm:text-sm text-[12px]">
                <span>Overview</span> |<span>Ceo Message</span> |
                <span>History</span> |<span>Organization</span> |
                <span>Certificate</span> |<span>Facilities</span> |
                <span>Directions</span>
              </p>
            </div>

            {/* Product Links */}
            <div className="py-4 mb-2 border-y-[1px]  border-white">
              <h4 className="text-lg font-bold mb-2">PRODUCT</h4>
              <p className="space-x-2 sm:text-sm text-[12px]">
                <span>ESD</span> |<span>NBR Coating</span> |
                <span>PU Coating</span> |<span>Cotton</span> |
                <span>Latex Coating</span> |<span>Embossing</span> |
                <span>HPPE</span> |<span>HPPE (Kevlar)</span> |
                <span>Nylon</span> |<span>ETC</span>
              </p>
            </div>

            {/* Connect Links */}
            <div>
              <h4 className="text-lg font-bold mb-2">CONNECT</h4>
              <p className="space-x-4 sm:text-sm text-[12px]">
                <span>Youtube</span>
                <span>Facebook</span>
                <span>Instagram</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFooter;
