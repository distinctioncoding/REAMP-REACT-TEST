
interface PreviewInfoProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const PreviewInfo: React.FC<PreviewInfoProps> = ({
    title,
    subtitle,
    description,
    buttonText,
    onButtonClick
  }) => {
    return (
      <div className="relative w-full bg-white p-6 border-b border-gray-300">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-lg font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-sm text-gray-700">{subtitle}</p>
        </div>
        <button
          onClick={onButtonClick}
          className="absolute bottom-6 right-115 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      </div>
    );
  };
  
  

export default PreviewInfo;
