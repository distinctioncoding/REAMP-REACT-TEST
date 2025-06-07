interface Props {
  description: string | null;
}

const PreviewInfo = ({ description }: Props) => {
  const hasDescription = description && description.trim().length > 0;
  return (
    <div className="flex flex-col border-y-8 border-gray-100 items-center space-y-5 bg-white py-10">
        <h1 className="text-2xl font-bold">Property Description</h1>
        {hasDescription ? (
          <p className="text-sm text-gray-700 max-w-xl text-center">{description}</p>
        ) : (
          <>
            <span className="text-xs">Please add property description here</span>
            <button className="underline text-sm font-semibold">Click to add</button>
          </>
        )}
    </div>
  );
};

export default PreviewInfo

