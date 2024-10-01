import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";

type Props = {
  onDateSelect: (date: Date) => void;
};

export function DatePicker({ onDateSelect }: Props) {
  const [date, setDate] = React.useState<Date>();
  const [showCalendar, setShowCalendar] = React.useState(false);

  const onSelect = (value: Date | undefined) => {
    if (!value) return;
    setDate(value);
    onDateSelect(value);
    setShowCalendar(false);
  };

  return (
    <Popover open={showCalendar} onOpenChange={() => setShowCalendar(true)}>
      <PopoverTrigger>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
