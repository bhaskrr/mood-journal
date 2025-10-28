import Header from "../components/Header";

const newEntryPageProps = {
  h1: "How are you feeling today?",
  p: "Take a moment to reflect on your day",
  links: [
    { name: "Dashboard", route: "/dashboard" },
    { name: "Journal", route: "/journal" },
  ],
};

export default function NewEntry() {
  return (
    <section>
      <Header {...newEntryPageProps} />
    </section>
  );
}
