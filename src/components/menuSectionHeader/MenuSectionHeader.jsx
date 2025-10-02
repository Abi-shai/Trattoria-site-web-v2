import './MenuSectionHeader.css';


const MenuSectionHeader = ({ title, description, leftAligned }) => {
  return (
    <div
      style={leftAligned ? { textAlign: 'left' } : { textAlign: 'center' }}
      className="menu-section-header-wrapper"
    >
      <h4 className="menu-section-header-header">{title}</h4>
      {
        description
          ? <p className="body1 menu-section-header-description">{description}</p>
          : null
      }
    </div>
  )
};


export default MenuSectionHeader;