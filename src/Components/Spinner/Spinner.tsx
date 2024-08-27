import "./Spinner.css";
import { ClipLoader } from "react-spinners";

interface Props {
  isLoading?: boolean;
}

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div className="loading-spinner">
        <ClipLoader
          color="#36d7b7"
          loading={isLoading}
          size={35}
          aria-label="loading spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default Spinner;
