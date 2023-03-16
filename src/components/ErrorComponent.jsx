
export const ErrorMessage = ({error}) => {

    return (
        <>
            <h2>{error.response.status}</h2>
            {(error.response.data.msg) ? <p>{error.response.data.msg}</p> : <p>{error.response.data}</p>}
        </>
    )
}