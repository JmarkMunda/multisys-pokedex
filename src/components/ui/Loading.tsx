import { cn } from "@/lib/utils";
import { BounceLoader } from "react-spinners";

type Props = {
  text?: string;
  description?: string;
  color?: string;
  size?: number;
  className?: string;
};

const Loading = ({
  text = "Loading...",
  description,
  color = "#fd5a5a",
  size = 80,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "h-[90vh] flex flex-col gap-2 justify-center items-center",
        className
      )}>
      <BounceLoader size={size} color={color} {...props} />
      <p style={{ color }}>{text}</p>
      <p style={{ color }}>{description}</p>
    </div>
  );
};

export default Loading;
