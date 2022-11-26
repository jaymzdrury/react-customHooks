import {useCallback, useEffect, useState} from 'react'
import PropTypes, {InferProps} from 'prop-types'

function LoadedImage({src}: InferProps<typeof LoadedImage.propTypes>) {
    const [loading, loadingSet] = useState(true)
    const [imgSrc, imgSrcSet] = useState('')

    const onLoad = useCallback(async () => {
        imgSrcSet(src)
        loadingSet(false)
    }, [src])

    const onError = useCallback(async () => {
        imgSrcSet('')
    },[])

    useEffect(() => {
        const img = new Image()
        img.src = src as string
        img.addEventListener("load", onLoad)
        img.addEventListener("error", onError)
        return () => {
            img.removeEventListener("load", onLoad)
            img.removeEventListener("error", onError)
        }
    },[src, onLoad, onError])

    return !loading ? <img alt='IMG' src={imgSrc} /> : <div />
}

LoadedImage.propTypes = {
    src: PropTypes.string.isRequired
}

export default LoadedImage