import { MdDownload } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { CiLink } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

const PreviewPageHeader = () => {
  return (
    <div>
        <div className='flex justify-between m-4'>
            <div className="flex items-center space-x-2.5 ml-20">
                <IoIosArrowBack />
                <div className="flex items-center space-x-1.5 border rounded-2xl py-2 px-4 text-xs font-semibold bg-blue-400 text-white">
                    <div className="w-4 h-4 rounded-full bg-white text-blue-400 flex items-center justify-center">
                    <MdDownload size={14} />
                    </div>
                    <button>Download files</button>
                </div>
            </div>
                       
            <div className="flex flex-row space-x-5 mr-20">
                <div className="flex items-center space-x-1.5 border rounded-2xl py-1 px-4 text-xs font-semibold">
                    <RiEdit2Fill />
                    <button>Edit</button>
                </div>
                
                <div className="flex items-center space-x-1.5 border rounded-2xl py-1 px-4 text-xs font-semibold">
                    <CiLink className="text-xl"/>
                    <button>Copy Website Link</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PreviewPageHeader