import './PageHeader.css';

const PageHeader = ({ img, title, description }) => {
  return (
    <div className="page-header-wrapper">

      <img src={img} alt="Haut de page" />
      <div className="page-header-overlay"></div>

      <div className="page-header-text-wrapper">
        <h2>{title}</h2>
        {
          description
            ? <p className="body1">{description}</p>
            : null
        }
      </div>
    </div>
  );
};

export default PageHeader;