import './App.css';
import RecipeItem from "./components/Recipe-item/recipe-item";
import Header from "./components/Header/Header";
import {useGetRecipesQuery} from "./store/api/api";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import {useState} from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [queryTerm, setQueryTerm] = useState('')
    const {isLoading, data} = useGetRecipesQuery(searchTerm)

    const handleSearch = () => {
        setQueryTerm(searchTerm)
    }

    return (
        <div className="App">
            <section>
                <Header/>
                <CreateRecipe/>
                <div style={{padding: 10}}>
                    <p>If you wanna find: </p>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search meal"
                    />
                </div>
                <button onClick={handleSearch}>Search</button>
                <div>
                    {isLoading
                        ?
                        <div>Loading...</div>
                        :
                        data ? data.map(recipe =>
                            <RecipeItem
                                recipe={recipe}
                                key={recipe.id}
                            />) : <div>Not found</div>}
                </div>
            </section>
        </div>
    );
}

export default App;
