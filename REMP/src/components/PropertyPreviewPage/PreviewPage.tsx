import PropertyBanner from './PropertyBanner'
import PreviewInfo from './PreviewInfo'
import PreviewPhoto from './PreviewPhotograph'
import PreviewSinglePhoto from './PreviewSinglePhoto'
import PreviewMap from './PreviewMap'
import PreviewPageHeader from './PreviewPageHeader'
import PreviewPageFooter from './PreviewPageFooter'

const PreviewPage = () => {
  return (
    <div className="flex flex-col">
      <PreviewPageHeader />
      <PropertyBanner />
      <PreviewInfo />
      <PreviewPhoto title="Preview Photo" imageUrl="https://picsum.photos/seed/4/150" />
      <PreviewSinglePhoto title="Single Photo" imageUrl="https://picsum.photos/seed/5/150" />
      <PreviewMap title="Location" lat={-33.8568} lon={151.2153} />
      <PreviewPageFooter />
    </div>
  );
};


export default PreviewPage