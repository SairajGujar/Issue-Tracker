import { DropdownMenuRoot, DropdownMenuTrigger, Button, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/themes'
import React from 'react'
import { IoCaretDown } from 'react-icons/io5'

const Dropdown = () => {
  return (
    <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Button variant="soft">
              All
              <IoCaretDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All</DropdownMenuItem>
            <DropdownMenuItem >Open</DropdownMenuItem>
            <DropdownMenuItem>In progress</DropdownMenuItem>
            <DropdownMenuItem>
              Closed
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
  )
}

export default Dropdown