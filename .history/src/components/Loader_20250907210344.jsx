const Loader = () => {
    const { progress } = useProgress();
    return <Html center >{progress}% loaded</Html>
}