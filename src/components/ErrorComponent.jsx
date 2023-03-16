
export const ErrorMessage = ({error}) => {

    return (
        <>
            <h2>{error.status}</h2>
            <p>{error.message}</p>
        </>
    )
}