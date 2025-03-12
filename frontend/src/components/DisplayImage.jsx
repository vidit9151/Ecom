import { RiCloseCircleFill } from "react-icons/ri";

const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div className="fixed bottom-0 right-0 left-0 top-0 flex justify-center items-center glass">
      {" "}
      <div className="bg-white shadow-lg rounded max-w-5xl mx-auto p-2">
        <div
          className="text-empressOrange hover:text-empressOrangeHover hover:scale-125 w-fit ml-auto"
          onClick={() => onClose((prev) => (prev = false))}
        >
          <RiCloseCircleFill />
        </div>{" "}
        <div
          className="  flex justify-center p-4 max-h-[80vh] max-w-[80vw]
 "
        >
          {" "}
          <img src={imgUrl} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};
export default DisplayImage;
