import { cn } from "@/lib/utils";
import { BounceLoader } from "react-spinners";
import { Props } from "./types";

const Loading = ({
  text = "Loading...",
  color = "#fd5a5a",
  size = 80,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "h-[95vh] flex flex-col gap-2 justify-center items-center",
        className
      )}>
      <BounceLoader size={size} color={color} {...props} />
      <p className={`text-[${color}]`}>{text}</p>
    </div>
  );
};

export default Loading;
