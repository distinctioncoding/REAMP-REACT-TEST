interface PreviewSingleMediaProps {
  title: string;
  mediaUrl: string;
  mediaType: 'image' | 'video' | 'vr';
}


const PreviewSingleMedia: React.FC<PreviewSingleMediaProps> = ({ title, mediaUrl, mediaType }) => {
  return (
    <div className="bg-white py-4 border-b-8 border-gray-100">
      <h2 className="text-center text-2xl font-bold mt-4 mb-1">{title}</h2>

      <div className="flex justify-center px-2 py-5">
        {mediaType === 'image' && (
          <img src={mediaUrl} className="max-w-[850px] max-h-[500px]" />
        )}

        {mediaType === 'video' && (
          <video
            src={mediaUrl}
            className="max-w-[850px] max-h-[500px]"
            controls
          />
        )}

        {mediaType === 'vr' && (
          <iframe
            src={mediaUrl}
            className="w-[850px] h-[500px] border"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default PreviewSingleMedia;

