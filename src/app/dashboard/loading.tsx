import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <Loader2 className="h-10 w-10 animate-spin"></Loader2>
      </div>
    </div>
  );
}
