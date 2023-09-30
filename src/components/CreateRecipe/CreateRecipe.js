import React, {useState} from 'react';
import {useCreateRecipeMutation} from "../../store/api/recipeApi";

const defaultValue = {
    name: '',
    image: ''
}

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState(defaultValue)

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        createRecipe(recipe).then(() => {setRecipe(defaultValue)})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Create new recipe:</p>
                <label htmlFor="">
                    <input
                        type="text"
                        placeholder="name"
                        value={recipe.name}
                        onChange={e => setRecipe({
                            recipe, name: e.target.value
                        })}
                    />
                </label>
                <label htmlFor="">
                    <input
                        type="text"
                        placeholder="image"
                        value={recipe.image}
                        onChange={e => setRecipe({
                            recipe, image: e.target.value
                        })}
                    />
                </label>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
};

export default CreateRecipe;