import Card from "../components/Card";
import { useSearch } from "../hooks/useSearch";

const SearchScreen = () => {

    const [characters, inputValue, handleChange, handleSubmit] = useSearch()

    return (
        <div className="container mb-5 min-vh-100 mt-3">
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <h2>Search</h2>
                    <form onSubmit={handleSubmit}>
                        <label className="form-label w-100">
                            {" "}
                            Character:{" "}
                            <input
                                placeholder="Name Character"
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                value={inputValue}
                                onChange={handleChange}
                            />
                        </label>
                        <button type="submit" className="btn btn-info w-100">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-6">
                    <h2>Resulst: {characters.length} </h2>
                    {characters.length === 0 && (
                        <div className="alert alert-warning text-center">
                            Please Search Character
                        </div>
                    )}
                    {characters.map((character) => (
                        <Card key={character.id} {...character} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
