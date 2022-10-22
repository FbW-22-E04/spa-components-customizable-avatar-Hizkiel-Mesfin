import "../App.css";

const Avatar = ({ src, size, type }) => {
  return (
    <div className="img-container">
      <img className={type} src={src} alt="" />
      <p> Size {size} </p>
      <p>
        Type <span>{type}</span>
      </p>
    </div>
  );
};

Avatar.defaultProps = {
  src: "https://picsum.photos/30/30",
  size: "s with 30 X 30",
  type: "square",
};

export default Avatar;
