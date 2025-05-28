interface PreviewSinglePhotoProps {
  title: string;
  imageUrl: string;
}

const PreviewSinglePhoto: React.FC<PreviewSinglePhotoProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-white py-4 border-b border-gray-300">
      <h2 className="text-center text-2xl font-bold mt-4 mb-1">{title}</h2>

      <div className="flex justify-center item px-2 py-5">
      <img
              src={imageUrl}
              className="max-w-[850px] max-h-[500px]"
            />
      </div>
    </div>
  );
};

export default PreviewSinglePhoto;
