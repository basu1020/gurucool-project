import { Container, Heading } from '@radix-ui/themes'
import React from 'react'

const RecipePage = (props) => {
  return (
    <>
        <Container size="1">
            <Section>
                <Heading>
                    He's Done it
                </Heading>
                <Heading>
                    {props.elem.title}
                </Heading>
            </Section>
            <Section>
                {props.elem.summary}
            </Section>
        </Container>
    </>
  )
}

export default RecipePage


//  
// {id: 656329, title: 'Pizza bites with pumpkin', image: 'https://spoonacular.com/recipeImages/656329-312x231.jpg', imageType: 'jpg'}
// 1
// : 
// {id: 680975, title: 'BLT Pizza', image: 'https://spoonacular.com/recipeImages/680975-312x231.jpg', imageType: 'jpg'}
// 2
// : 
// {id: 663136, title: 'Thai Pizza', image: 'https://spoonacular.com/recipeImages/663136-312x231.jpg', imageType: 'jpg'}
// 3
// : 
// {id: 716300, title: 'Plantain Pizza', image: 'https://spoonacular.com/recipeImages/716300-312x231.jpg', imageType: 'jpg'}
// 4
// : 
// {id: 665769, title: 'Zucchini Pizza Boats', image: 'https://spoon