const Pixelated = ({ children }) => {
  return (
    <div className="flex items-end break-words md:max-h-[45vw] overflow-hidden py-6 md:ml-4 basis-1/2 text-[40px] md:text-[50px] lg:text-[75px] xl:text-[90px] font-cursive lg:pl-8">
      {children}
    </div>
  );
};

export default Pixelated;
