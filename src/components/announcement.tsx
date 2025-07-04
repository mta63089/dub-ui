import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/registry/dubui/ui/badge";

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="rounded-full">
      <Link href="/docs/components/calendar">
        New Calendar Component <ArrowRightIcon />
      </Link>
    </Badge>
  );
}
