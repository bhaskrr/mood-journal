import Header from "../components/Header";

const journalProps = {
  h1: "Your Journal",
  p: "All your entries in one place",
  linkName: "Dashboard",
  linkRoute: "/dashboard",
};

export default function Journal() {
  return (
    <section>
      <Header {...journalProps} />
    </section>
  );
}
