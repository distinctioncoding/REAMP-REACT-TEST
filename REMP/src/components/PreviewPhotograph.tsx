interface PreviewPhotoProps {
  title: string;
  imageUrl: string;
}

const PreviewPhoto: React.FC<PreviewPhotoProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-white py-4 border-b border-gray-300">
      <h2 className="text-center text-2xl font-bold mt-4 mb-2">{title}</h2>

      <div className="flex justify-center gap-4 px-2 py-10">
        {/* left */}
        <div className="flex-col  max-w-[45%]">
          <div className="grid grid-cols-3 auto-rows-[120px] gap-2 mb-2">
            <img
              src={imageUrl}
              className="col-span-2 row-span-2 object-cover w-full h-full"
            />

            <img
              src={imageUrl}
              className="col-span-1 row-span-1 object-cover w-full h-full"
            />
            <img
              src={imageUrl}
              className="col-span-1 row-span-1 object-cover w-full h-full"
            />
            <img
              src={imageUrl}
              className="col-span-1 row-span-1 object-cover w-full h-full"
            />
            <img
              src={imageUrl}
              className="col-span-1 row-span-1 object-cover w-full h-full"
            />
            <img
              src={imageUrl}
              className="col-span-1 row-span-1 object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-2 auto-rows-[120px] gap-2">
            <img
              src={imageUrl}
              className="col-span-1 row-span-1 object-cover w-full h-full"
            />
            <img
              src={imageUrl}
              className="col-span-1 row-span-1 object-cover w-full h-full"
            />
          </div>
        </div>

        {/* right */}
        <div className="grid grid-cols-2 max-w-[22%] auto-rows-[56px] gap-2">
          <img
            src={imageUrl}
            className="col-span-1 row-span-2 object-cover w-full h-full"
          />
          <img
            src={imageUrl}
            className="col-span-1 row-span-2 object-cover w-full h-full"
          />
          <img
            src={imageUrl}
            className="col-span-2 row-span-3 object-cover w-full h-full"
          />
          <img
            src={imageUrl}
            className="col-span-1 row-span-3 object-cover w-full h-full"
          />
          <img
            src={imageUrl}
            className="col-span-1 row-span-3 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPhoto;
