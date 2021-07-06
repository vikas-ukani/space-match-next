// pages/401.js
function Custom401({ statusCode }) {
    return <h1>{statusCode} - 401 - Page Not Found</h1>
}

export const getStaticProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 401

    return {
        props: {
            statusCode
        }
    }
}


export default Custom401