export default function GlobalLayout({ children }) {
    return (
      <div className="container mx-auto px-4">
        {children}
      </div>
    );
}