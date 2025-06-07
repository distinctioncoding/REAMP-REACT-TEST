interface PreviewPhotoProps {
  title: string;
  imageUrls: string[];
}

const PreviewPhoto: React.FC<PreviewPhotoProps> = ({ title, imageUrls }) => {
  const leftImages = imageUrls.slice(0, 8);
  const rightImages = imageUrls.slice(8, 13);

  return (
    <div className="bg-white py-4 border-b-8 border-gray-100">
      <h2 className="text-center text-2xl font-bold mt-4 mb-2">{title}</h2>

      <div className="flex justify-center gap-4 px-2 py-10">
        {/* left */}
        <div className="flex-col  max-w-[45%]">
          <div className="grid grid-cols-3 auto-rows-[120px] gap-2 mb-2">
            {leftImages.slice(0, 6).map((url, index) => (
              <img
                key={`left-top-${index}`}
                src={url}
                className="object-cover w-full h-full"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 auto-rows-[120px] gap-2">
            {leftImages.slice(6).map((url, index) => (
              <img
                key={`left-bottom-${index}`}
                src={url}
                className="object-cover w-full h-full"
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="grid grid-cols-2 max-w-[22%] auto-rows-[56px] gap-2">
          {rightImages.map((url, index) => (
            <img
              key={`right-${index}`}
              src={url}
              className="object-cover w-full h-full col-span-1 row-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewPhoto;
