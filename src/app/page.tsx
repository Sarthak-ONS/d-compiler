import Navbar from "@/app/components/Navbar";
import { LampContainer } from "@/app/components/ui/background-lines";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <LampContainer className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-white text-center text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-normal tracking-tight">
          DynamicCode, <br /> DebugCompile.
        </h2>
      </LampContainer>
    </div>
  );
}
