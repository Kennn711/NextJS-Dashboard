import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { dmSans } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${dmSans.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Hiraishin</p>
    </div>
  );
}
