import { Calendar } from "lucide-react";

interface JournalCardProps {
  dayOfWeek: string;
  date: string;
  moods: Array<string>;
  text: string;
}

export default function JournalCard({
  dayOfWeek,
  date,
  moods,
  text,
}: JournalCardProps) {
  return (
    <div className="md:w-160 lg:w-200 xl:w-300 flex flex-col my-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl w-96 transition-all duration-300 hover:shadow-lg">
      <div className="p-6 space-y-4 max-w-full">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span><Calendar  /></span>
          <h5 className=" font-semibold text-slate-700 dark:text-slate-100">
            {dayOfWeek}, {date}
          </h5>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {text}
          </p>

          {/* Moods */}
          <div className="flex flex-wrap gap-2">
            {moods.map((mood, index) => (
              <span
                key={index}
                className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary transition-scale duration-100 hover:scale-102"
              >
                {mood}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
