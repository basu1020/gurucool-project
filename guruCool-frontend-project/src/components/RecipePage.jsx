import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Button, Container, Heading, Section } from '@radix-ui/themes'
import React from 'react'

const RecipePage = (props) => {
    const createMarkup = (htmlString) => {
        // Create a temporary div element to parse the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;

        // Find the first <a> tag in the HTML content
        const firstATag = tempDiv.querySelector('a');

        // Extract the href and text content of the <a> tag
        let aTagContent = null;
        if (firstATag) {
            aTagContent = {
                href: firstATag.getAttribute('href'),
                text: firstATag.textContent,
            };
        }

        // Remove the <a> tag from the HTML content
        if (firstATag) {
            tempDiv.removeChild(firstATag);
        }

        // Get the sanitized HTML content
        const sanitizedHTML = tempDiv.innerHTML;
        return { aTagContent, sanitizedHTML };
    };

    const { aTagContent, sanitizedHTML } = createMarkup(props.elem.summary);

    return (
        <>
            <Container size="1">
                <Section className='flex flex-row w-full justify-between'>
                    <Heading>
                        {props.elem.title}
                    </Heading>
                    <Button onClick={() => { props.handleOnClickBack() }} variant='soft'>
                        Back
                    </Button>
                </Section>
                <Section>
                    {aTagContent && (
                        <a href={aTagContent.href}></a>
                    )}
                    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
                </Section>
                <Button variant='soft' onClick={() => {props.handleOnClickBookMark(props.elem.id, props.elem.title, "")}}>
                    <BookmarkFilledIcon/>
                </Button>
            </Container>
        </>
    )
}

export default RecipePage
