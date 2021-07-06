function Error({ statusCode }) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

export const getStaticProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return {
        props: {
            statusCode
        }
    }
}

export default Error