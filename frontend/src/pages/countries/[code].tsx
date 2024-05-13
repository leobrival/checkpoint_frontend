import Header from "@/components/Header";
import { GET_COUNTRY } from "@/graphql/queries/getContry";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Country } from "../../types";

const CountryDetailPage = () => {
  const router = useRouter();
  const { code } = router.query as { code: string };

  const { data, loading, error } = useQuery<{ country: Country }>(GET_COUNTRY, {
    variables: { code: code?.toUpperCase() },
    skip: !code,
  });

  if (loading) return <p>Chargement...</p>;
  if (error)
    return (
      <p>Erreur lors du chargement des détails du pays : {error.message}</p>
    );

  const country = data?.country;

  if (!country) return <p>Aucun pays trouvé avec le code {code}.</p>;

  return (
    <div>
      <Header />
      <div className="card">
        <h1>
          {country.name} {country.emoji}
        </h1>
        <p>
          <strong>Code: </strong>
          {country.code}
        </p>
        {country.continent && (
          <p>
            <strong>Continent: </strong>
            {country.continent.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryDetailPage;
