function Image({ image }) {
  return (
    <div className="flex flex-col box-border border-[1px] border-solid border-[#D7D7D7] p-4 rounded-[15px]">
      <div className="relative w-full group">
        <img src={image} alt={`${image}_image`} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Image;
