import { Badge } from "@/components/ui/Badge";
import { Props } from "./types";
import { capitalize, getTypeColor } from "@/lib/utils";

const BadgeTypes = ({ types }: Props) => {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="flex items-center gap-2 mb-8">
        {types.map(({ type }) => (
          <Badge key={type.name} className={`${getTypeColor(type.name)}`}>
            {capitalize(type.name)}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default BadgeTypes;
