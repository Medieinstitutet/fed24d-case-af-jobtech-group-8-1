export const get = async <T>(url: string) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json() as T;
    }
    catch (error) {
        console.error('Fetch request error: ', error);
        throw error;
    }
}
