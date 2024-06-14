const SkillIcon = ({ icon: IconComponent, alt, title, width }) => {
  return (
    <div className="flex flex-col">
      <IconComponent size={width} title={alt} />
      <p className="text-sm text-slate-200">{title}</p>
    </div>
  );
};

export default SkillIcon;
