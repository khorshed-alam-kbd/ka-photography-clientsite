import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Ka-Photography`
    }, [title])
};

export default useTitle;