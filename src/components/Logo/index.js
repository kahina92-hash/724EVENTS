import PropTypes from "prop-types";
import "./style.scss";

const Logo = ({ size = "small" }) => (
  <div className="Logo">
    <svg
      width={size === "large" ? "160" : "130"}
      height="60"
      viewBox="0 0 130 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 73.406 42.577 C 72.35 42.577 71.437 42.342 70.667 41.872 ..."
        fill="url(#paint0_linear_56_57)"
      />
      {/* ... autres chemins ... */}
    </svg>
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: "small",
};

export default Logo;
