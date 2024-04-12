import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { IconProps } from "@radix-ui/react-icons/dist/types";

type ProjectProps = {
  title: string;
  description: string;
  image: StaticImageData | string;
  github?: string;
  siteUrl?: string;
  alt?: string;
};

export function PortfolioCard({
  title,
  description,
  image,
  github,
  siteUrl,
  alt,
}: ProjectProps) {
  return (
    <Card className="w-full max-w-sm rounded-xl flex border hover:scale-105 animate ">
      <div className="grid gap-2 p-4">
        <Image
          alt={alt ?? "alt"}
          className="rounded"
          height="200"
          src={image ?? "/placeholder.svg"}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
        <div className="grid gap-1.5">
          <h3 className="text-lg font-semibold tracking-tight">
            {title ?? "title"}
          </h3>
          <p className="text-sm/relaxed text-gray-500">
            {description ?? "description"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {github && (
            <Link
              className="inline-flex items-center underline gap-2 text-sm"
              href={github ?? "#"}
            >
              <GithubIcon className="w-4 h-4" />
              View on GitHub
            </Link>
          )}

          {siteUrl && (
            <Link
              href={siteUrl}
              className="inline-flex items-center underline gap-2 text-sm"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              View live
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

function ExternalLinkIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

function GithubIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
