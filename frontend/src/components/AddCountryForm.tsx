import { ADD_COUNTRY } from "@/graphql/mutations/addContry";
// import { GET_CONTINENTS } from "@/graphql/queries/getContinents";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const AddCountryForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    emoji: "",
  });

  const [addCountry, { loading, error }] = useMutation(ADD_COUNTRY);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await addCountry({
        variables: {
          data: formData,
        },
      });
      console.log("Country added:", data.addCountry);
    } catch (err) {
      console.error("Error adding country:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label className="label" htmlFor="code">
          Code:
        </label>
        <input
          type="text"
          className="input"
          id="code"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          className="input"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label" htmlFor="emoji">
          Emoji:
        </label>
        <input
          type="text"
          className="input"
          id="emoji"
          name="emoji"
          value={formData.emoji}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={loading} className="button">
        Add Country
      </button>
      {error && <p className="error">Error: {error.message}</p>}
    </form>
  );
};

export default AddCountryForm;
