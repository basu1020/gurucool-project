import { Container, Heading, Section } from '@radix-ui/themes'
import React from 'react'


const RecipePage = (props) => {
  return (
    <>
        <Container size="1">
            <Section>
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
