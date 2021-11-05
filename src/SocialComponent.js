const SocialComponent = ({ name }) => {
  const socialLinks = ["fa fa-facebook"]
  return (
{ socialLinks.map((socialLink) => (
  <div className="social_icon">
  <i className={solialLink.name}></i>
  </div>
)}
  )
}

export default SocialComponent;