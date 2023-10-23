import React from 'react'
import { ScrollArea, Table } from '@radix-ui/themes'

const AutoComplete = ( props ) => {
    return (
        <>
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 120, border: "2px-solid-black" }} className='absolute cursor-pointer rounded-xl '>
                <Table.Root>
                    <Table.Body>
                        {props.result.map((elem) => {
                            return <Table.Row className='hover:bg-red-400 hover:text-whtie' key={elem.id} onClick={() => {props.handleClickACard(elem.id)}}>
                                <Table.Cell className='curson-pointer'>
                                    {elem.title}
                                </Table.Cell>
                            </Table.Row>
                        })}
                    </Table.Body>
                </Table.Root>
            </ScrollArea>
        </>
    )
}

export default AutoComplete