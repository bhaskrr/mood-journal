import Header from "../components/Header";

const headerProps = {
  h1: "Welcome!",
  p: "Here's your emotional journey overview",
  links: [
    { name: "Journal", route: "/journal" },
    { name: "New Entry", route: "/new" },
  ],
};

export default function Dashboard() {
  return (
    <section className="">
      <Header {...headerProps} />
    </section>
  );
}
