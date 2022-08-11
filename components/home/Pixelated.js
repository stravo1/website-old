const Pixelated = ({ children }) => {
  return (
    <div className="flex items-end break-words md:max-h-[45vw] overflow-hidden py-6 md:ml-4 basis-1/2 text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-cursive lg:pl-8">
      {children}
    </div>
  );
};

export default Pixelated;
