import React from 'react'
import {Card, Inset, Text, Strong} from '@radix-ui/themes'

const RecipeItem = (props) => {
    const setShowRecipePage = props.setShowRecipePage

    // const handleOnClickACard = async () => {
    //     // const api = `https://api.spoonacular.com/recipes/${props.elem.id}/summary?apiKey=41950ce5bf37481a9179e8ea4fd6f653`
    //     // const response = await fetch(api)
    //     // const result = await response.json()
    //     // navigate("/recipe-page")
    //     setShowRecipePage(true)
    //     console.log("Haleluya")
    // }

    return (
        <Card size="3" style={{ maxWidth: 240 }} className='m-2' onClick={props.handleOnClickACard}>
            <Inset clip="padding-box" side="top" pb="current">
                <img
                    src={props.elem.image}
                    alt="food Image"
                    style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                    }}
                />
            </Inset>
            <Text as="p" size="3">
                <Strong>{props.elem.title}</Strong> 
            </Text>
        </Card>
    )
}

export default RecipeItem

// {
// "id": 654959,
// "title": "Pasta With Tuna",
// "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg",
// "imageType": "jpg"
// },