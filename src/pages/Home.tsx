import { useState } from "react";
import LeftPanel from "../features/LeftPanel/LeftPanel";
import RightPanel from "../features/RightPanel/RightPanel";

const Home = () => {
  const [activeView, setActiveView] = useState<string>("mobile");

  return (
    <section className="section-center px-4 py-20">
      <article className="flex gap-5">
        <LeftPanel activeView={activeView} />
        <RightPanel activeView={activeView} setActiveView={setActiveView} />
      </article>
    </section>
  );
};
export default Home;
