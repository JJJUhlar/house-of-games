
export const ErrorMessage = ({error}) => {

    return (
        <>
            <h2>{error.res.status}</h2>
            <p>{error.res.msg}</p>
        </>
    )
}