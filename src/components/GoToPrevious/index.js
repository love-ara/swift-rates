import "./index.css";
import { useNavigate } from "react-router-dom";

const GoToPrevious = () => {
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={() => navigate(-1)}>
            Back
        </button>
    );
};

export default GoToPrevious;
