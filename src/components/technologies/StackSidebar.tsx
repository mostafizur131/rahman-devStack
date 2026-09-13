import React from "react";
import type { ITechnology } from "../../types/type";

interface IStackSidebarProps {
  stack: ITechnology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: IStackSidebarProps) => {
  return (
    <aside className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm lg:sticky lg:top-6">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-[#0F172A]">Your Stack</h3>

        <p className="mt-1 text-xs text-gray-400">
          {stack.length}{" "}
          {stack.length === 1 ? "Technology Selected" : "Technologies Selected"}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="flex min-h-[180px] items-center justify-center rounded-lg bg-gray-50 px-4 text-center">
          <p className="text-xs leading-5 text-gray-400">
            Your stack is empty.
            <br />
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="h-6 w-6 shrink-0 object-contain"
                  />

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-[#0F172A]">
                      {item.name}
                    </p>

                    <p className="text-[9px] text-gray-400">{item.category}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="ml-2 shrink-0 text-lg leading-none text-gray-400 transition-colors hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-8 w-full rounded-md border border-red-200 bg-white px-4 py-2 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default StackSidebar;
