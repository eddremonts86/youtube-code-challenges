import PropTypes from "prop-types";

export default function TestLayout({ children }) {
  return (
    <div className="bg-blue-950 rounded-lg p-4 flex gap-11 my-5">
      {children}
    </div>
  );
}

TestLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
