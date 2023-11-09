type InfoProps = {
  icon: string;
  title: string;
};

const CardInfo = ({ icon, title }: InfoProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 items-center">
      <img width={30} src={icon} />
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default CardInfo;
