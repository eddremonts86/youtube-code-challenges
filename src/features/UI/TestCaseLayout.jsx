import PropTypes from "prop-types";
import TextButton from "./TestButton";
export default function TestCaseLayout({
  name,
  description,
  example,
  url,
  urlText,
}) {
  return (
    <div className="w-full bg-blue-900 p-6 rounded-xl sm:w-72 min-w-72">
      <div className="max-w-72 bg-blue-900 rounded-md">
        <div>
          <h2 className="text-xl mb-3">{name}</h2>
        </div>
        <div className="mb-3">
          <p>{description}</p>
        </div>
        <div className="mb-3">
          <p>{example}</p>
        </div>
      </div>
      <div className="mt-6 mb-3">
        <TextButton
          url={url}
          text={urlText}
        />
      </div>
    </div>
  );
}
TestCaseLayout.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlText: PropTypes.string.isRequired,
};
