import { cn } from "@/lib/utils";

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
    <div className="group relative flex flex-col my-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl w-96 transition-all duration-300 hover:shadow-lg">
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <h5 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            {dayOfWeek}
          </h5>
          <p className="text-sm text-slate-500 dark:text-slate-400">{date}</p>
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
