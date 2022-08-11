const Section = ({ children }) => {
  return (
    <div
      className="flex flex-col h-screen md:items-center md:justify-center md:flex-row md:pb-8"
      style={{ scrollSnapAlign: "start" }}
    >
      {children}
    </div>
  );
};
export default Section;
