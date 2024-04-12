import { LinkedInLogoIcon } from "@radix-ui/react-icons";

import { Icons } from "./ui/icons";

export const SocialIconsBar = () => {
  return (
    <div className="flex gap-4 mt-4">
      <LinkedInLogoIcon className="w-6 h-6 hover:scale-110 dark:fill-white" />
      <Icons.twitter className="w-6 h-6 hover:scale-110 dark:fill-white" />
      <Icons.gitHub className="w-6 h-6 hover:scale-110 dark:fill-white " />
    </div>
  );
};
