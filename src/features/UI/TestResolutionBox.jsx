import PropTypes from "prop-types";

export default function TestResolutionBox({ children }) {
  return (
    <div className="bg-blue-600 p-6 rounded-xl my-6 w-full">
      <h2 className=" text-xl mb-2">Solution</h2>
      <hr className="mb-4" />
      {children}
    </div>
  );
}

TestResolutionBox.propTypes = {
  children: PropTypes.node.isRequired,
};
