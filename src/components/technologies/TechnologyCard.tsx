import type { ITechnology } from "../../types/type";

interface ITechnologyCardProps {
  technology: ITechnology;
  isAdded: boolean;
  onAdd: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: ITechnologyCardProps) => {
  return (
    <article className="flex min-h-[270px] flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#0F172A]">{technology.name}</h3>

      <p className="mt-2 line-clamp-3 min-h-[60px] text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      <div className="my-4 border-t border-gray-100" />

      <div className="mb-4 flex items-center justify-between gap-2 text-[10px]">
        <span className="rounded bg-gray-50 px-2 py-1 text-gray-500">
          {technology.category}
        </span>

        <span className="text-gray-500">{technology.difficulty}</span>

        <span className="flex items-center gap-1 font-medium text-gray-600">
          <span className="text-yellow-400">★</span>
          {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        className={`mt-auto w-full rounded-md px-4 py-2.5 text-xs font-medium transition-colors duration-200 ${
          isAdded
            ? "cursor-pointer bg-gray-200 text-gray-500"
            : "bg-[#0B1220] text-white hover:bg-[#1E293B]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;
