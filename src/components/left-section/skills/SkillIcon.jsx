const SkillIcon = ({ icon: IconComponent, alt, title, width }) => {
  return (
    <div className="flex flex-col max-w-16 space-y-2 items-center self-center ">
      <div className="flex-col">
        <div className={"px-12"}>
          <IconComponent size={width} title={alt} />
          <p className="text-sm text-slate-200 text-center ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
