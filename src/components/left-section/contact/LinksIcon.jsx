import Link from "next/link";

const LinksIcon = ({ icon: IconComponent, alt, title, width, href }) => {
  return (
    <div className="flex space-x-3 ">
      <IconComponent size={width} title={alt} />
      <Link href={href} target="_blank">
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default LinksIcon;
