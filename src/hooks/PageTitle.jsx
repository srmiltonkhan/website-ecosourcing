import  { useEffect } from 'react'

const PageTitle = ({title}) => {
    useEffect (() => {
        document.title = title + " || " + process.env.REACT_APP_NAME;
    },[title])
}

export default PageTitle