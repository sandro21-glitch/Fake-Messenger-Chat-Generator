import TextHeading from "../../ui/TextHeading";

const Layout = () => {
  return (
    <div className="w-1/2">
      <TextHeading text="Layout :" />
      <div>
        <div>
          <label htmlFor="android" className="text-labels cursor-pointer">
            <input type="radio" name="android" id="android" className="mr-1" />
            android
          </label>
        </div>
        <div>
          <label htmlFor="iphone" className="text-labels cursor-pointer">
            <input type="radio" name="iphone" id="iphone" className="mr-1" />
            iphone
          </label>
        </div>
      </div>
    </div>
  );
};
export default Layout;
