export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': 'c9a2bce335msha6c97af3080b063p185597jsnc697df08eddd',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    const response =await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    });
    const result = await response.json()
    return result;
}