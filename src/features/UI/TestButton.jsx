import PropTypes from "prop-types";

export default function TestButton({ url, text }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </a>
  );
}

TestButton.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
