import React from 'react';
import Typography from '@material-ui/core/Typography';

const Highlight = ({sentence='', checkWord}) => (
    <Typography variant="body2" component="p"
        dangerouslySetInnerHTML={{
        __html:
        sentence.split(' ').map(word =>
            (word.includes(checkWord.toLowerCase())?
             `<strong>${word}</strong>`
             :
             word)).join(' ')

    }}
    >
    </Typography>
)

export default Highlight;