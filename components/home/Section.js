const Section = ({ children }) => {
  return (
    <div
      className="flex flex-col md:items-center md:justify-center md:flex-row"
      style={{ height: "calc(100vh - 7rem)", scrollSnapAlign: "center" }}
    >
      {children}
    </div>
  );
};
export default Section;
