const SkillIcon = ({ icon: IconComponent, alt, title, width }) => {
  return (
    <div className="flex flex-col max-w-16 space-y-2 items-center self-center ">
      <IconComponent size={width} title={alt} />
      <p className="text-sm text-slate-200 text-center justify-center self-center">
        {title}
      </p>
    </div>
  );
};

export default SkillIcon;
