import { Container, TextField, Section, Button, Heading} from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React, {useState, useEffect} from 'react'
import RecipeItem from './util-components/RecipeItem'
import AutoComplete from './util-components/AutoComplete'
import RecipePage from './RecipePage'

const SearchBar = () => {
    const [autoCompleteAppear, setAutoCompleteAppear] = useState(false)
    const [searchBarVal, setSearchBarVal] = useState("")
    const [typingTimer, setTypingTimer] = useState(null)
    const [autoCompletedSuggestions, setAutoCompletedSuggestion] = useState([])
    const [searchedItems, setSearchedItems] = useState([])
    const [showRecipePage, setShowRecipePage] = useState(false)
    const [recipePageProps, setRecipePageProps] = useState({})

    const fetchAutoCompleteSuggestions = async (query) => {
        const api = `https://api.spoonacular.com/recipes/autocomplete?apiKey=41950ce5bf37481a9179e8ea4fd6f653&number=5&query=${query}`
        const response = await fetch(api)
        const result  = await response.json()
        setAutoCompletedSuggestion(result)
        setAutoCompleteAppear(true)
    }

    const handleOnChangeSearchBarVal = (e) => {
        const query = e.target.value
        setSearchBarVal(query)

        if(typingTimer){clearTimeout(typingTimer)}

        if (query.trim() !== ''){

            const newTimer = setTimeout(() => {
                // function call
                fetchAutoCompleteSuggestions(query)
            }, 500)
            setTypingTimer(newTimer)
        } else {
            setAutoCompleteAppear(false)
            setAutoCompletedSuggestion([])
        }
    }

    const handleOnClickACard = async (id) => {
        const api = `https://api.spoonacular.com/recipes/${id}/summary?apiKey=41950ce5bf37481a9179e8ea4fd6f653`
        const response = await fetch(api)
        const result = await response.json()
        setRecipePageProps(result)
        setShowRecipePage(true)
    }

    const handleOnClickSearch = async () => {
        if (searchBarVal) {
            const api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=41950ce5bf37481a9179e8ea4fd6f653&query=${searchBarVal}&number=5`
            const response = await fetch(api)
            const result = await response.json()
            setSearchedItems(result.results)
        }
    }

    useEffect(() => {
    }, [showRecipePage])


    return (
        <>
            {!showRecipePage && <Container size="3">

                {/* Search bar */}

                <Section>
                    <Heading>
                        Search for your favorite Recipies
                    </Heading>
                </Section>
                <Section size="3 drop-shadow filter-none flex flex-row w-full" >
                    <div className="flex flex-col w-full">
                        <TextField.Root className='w-full me-1' onChange={handleOnChangeSearchBarVal} value={searchBarVal}>
                            <TextField.Input placeholder="Search recipes…" />
                        </TextField.Root>

                        {autoCompleteAppear && <AutoComplete result={autoCompletedSuggestions} handleClickACard={handleOnClickACard}/>}

                    </div>
                    <Button className='ms-1' variant='soft' onClick={handleOnClickSearch}>
                        <MagnifyingGlassIcon />
                    </Button>

                </Section>

                {/* results */}
            <Section className='flex flex-row items-center justify-center flex-wrap w-full'>
                {searchedItems.length > 0 && searchedItems.map((elem) => {
                    return <RecipeItem elem={elem} key={elem.id} handleClickACard={handleOnClickACard} />
                })}
                {/* <RecipeItem />
                <RecipeItem /> */}
            </Section>
            </Container>}
            {showRecipePage && <RecipePage elem={recipePageProps}/>}
        </>
    )
}

export default SearchBar