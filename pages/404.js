// pages/404.js
function Custom404({ statusCode }) {
    return <h1>{statusCode} - 404 - Page Not Found</h1>
}

export const getStaticProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return {
        props: {
            statusCode
        }
    }
}


export default Custom404