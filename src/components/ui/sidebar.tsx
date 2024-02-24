import { PropsWithChildren } from "react";

export function Sidebar(props: PropsWithChildren) {
  return (
    <div className="fixed bottom-0 left-0 top-0 flex w-[54px] flex-col items-center justify-center gap-2 border-r p-1 pt-4">
      {props.children}
    </div>
  );
}
