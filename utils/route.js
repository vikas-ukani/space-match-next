

/**
 * Returning Login URL with Redirections
 * @returns Object
 */
export const redirectToLogin = () => {
    return {
        redirect: {
            permanent: false,
            destination: '/auth/login'
        }
    }
}