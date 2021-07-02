// pages/500.js
function Custom500({ statusCode }) {
    return (<h1>{statusCode} - Server-side error occurred</h1>)
}

export const getStaticProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {
        props: {
            statusCode
        }
    }
}

export default Custom500