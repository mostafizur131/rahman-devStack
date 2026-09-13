import React from "react";

type StackItem = {
  id: number;
  name: string;
  category: string;
  icon: string;
};

const StackSidebar = () => {
  const stack: StackItem[] = [
    {
      id: 1,
      name: "Svelte",
      category: "Frontend",
      icon: "https://cdn.simpleicons.org/svelte/FF3E00",
    },
    {
      id: 2,
      name: "Redis",
      category: "Database",
      icon: "https://cdn.simpleicons.org/redis/DC382D",
    },
  ];

  return (
    <aside className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm lg:sticky lg:top-6">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-[#0F172A]">Your Stack</h3>

        <p className="mt-1 text-xs text-gray-400">
          {stack.length} Technology Selected
        </p>
      </div>

      <div className="space-y-2">
        {stack.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="h-6 w-6 object-contain"
              />

              <div>
                <p className="text-xs font-semibold text-[#0F172A]">
                  {item.name}
                </p>

                <p className="text-[9px] text-gray-400">{item.category}</p>
              </div>
            </div>

            <button
              type="button"
              className="text-lg leading-none text-gray-400 transition-colors hover:text-red-500"
              aria-label={`Remove ${item.name}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Remove All */}
      <button
        type="button"
        className="mt-8 w-full rounded-md border border-red-200 bg-white px-4 py-2 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
      >
        Remove All
      </button>
    </aside>
  );
};

export default StackSidebar;
