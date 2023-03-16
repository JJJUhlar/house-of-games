
export const ErrorMessage = ({error}) => {
    console.log(error)
   
    return (
        <>
            <h2>{error.response.status}</h2>
            <p>{error.response.data.msg}</p>
        </>
    )
}