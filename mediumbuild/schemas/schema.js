import createSchema from "part:@sanity/base/scheme-createion"
import schemaTypes from "all:part:@sanitybase/scheme-type"

import blockContent from "./blockContent"
import category from './category'
import post from './post'
import author from "./author"
import comment from './comment'

export default createSchema ({
    name:"default",
    types: schemaTypes.concat([
        post,
        author,
        category,
        blockContent,
        comment,
    ])
})