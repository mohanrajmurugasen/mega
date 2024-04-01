import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { headingChange } from "../../store/features/heading/heading";

const SubHeader = () => {
  const heading = useSelector((state: RootState) => state.heading.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = ["home", "about", "services", "project", "contact"];
  return (
    <div className="m-auto">
      <div className="flex items-center justify-end">
        {list.map((itm, i) => (
          <div
            key={i}
            className={`cursor-pointer uppercase text-center ${
              itm === heading
                ? "border-b-2 border-black font-semibold"
                : "font-medium"
            } ml-4 w-28 text-black text-sm pb-2`}
            onClick={() => {
              dispatch(headingChange(itm));
              navigate(`/${itm === "home" ? "" : itm}`);
            }}
          >
            {itm === "contact" ? "contact us" : itm}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
