type Props = {
  image?: string;
  message: string;
};

const Empty = ({ image, message }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <img src={image} alt="image" className="w-48 h-48" />
      <p className="text-xl font-bold">{message}</p>
    </div>
  );
};

export default Empty;
