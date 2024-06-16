import Link from "next/link";

const LinksIcon = ({ icon: IconComponent, alt, title, width, href }) => {
  return (
    <div className="flex flex-row gap-2 py-2">
      <IconComponent size={width} title={alt} />
      <Link href={href} target="_blank" className="-mt-2">
        <span className="text-center">{title}</span>
      </Link>
    </div>
  );
};

export default LinksIcon;
