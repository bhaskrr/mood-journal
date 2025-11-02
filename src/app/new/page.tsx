import Header from "../components/Header";
import InputForm from "../components/Form";

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
      <div className="max-w-1/2 flex justify-center m-auto mt-10">
        <InputForm />
      </div>
      
    </section>
  );
}
