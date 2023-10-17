import LeftPanel from "../features/LeftPanel/LeftPanel";
import RightPanel from "../features/RightPanel/RightPanel";

const Home = () => {
  return (
    <section className="section-center p-4">
      <article className="flex gap-5">
        <LeftPanel />
        <RightPanel />
      </article>
    </section>
  );
};
export default Home;
