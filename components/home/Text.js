const Text = ({ children }) => {
  return (
    <div className="flex items-start py-6 md:mr-4 basis-1/2 md:pl-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:px-8">
      <div className="block">{children}</div>
    </div>
  );
};

export default Text;
