import { HeroTextName } from "@/components/HeroTextName";
import { NavBar } from "@/components/NavBar";
import { SocialIconsBar } from "@/components/SocialIconsBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-20 ">
        <NavBar />
      </div>
      <HeroTextName />
      <SocialIconsBar />
    </main>
  );
}
