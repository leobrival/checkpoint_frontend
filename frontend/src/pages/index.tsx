import AddCountryForm from "@/components/AddCountryForm";
import CountriesList from "@/components/CountriesList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <AddCountryForm />
      <CountriesList />
    </>
  );
}
