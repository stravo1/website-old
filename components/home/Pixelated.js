const Pixelated = ({ children }) => {
  return (
    <div className="flex items-center min-h-[15rem] pt-[15vh] md:pt-6 md:pb-6 md:items-end break-words md:max-h-[45vw] overflow-hidden md:ml-4 md:basis-1/2 text-[40px] md:text-[50px] lg:text-[75px] xl:text-[90px] font-cursive lg:pl-8">
      {children}
    </div>
  );
};

export default Pixelated;
