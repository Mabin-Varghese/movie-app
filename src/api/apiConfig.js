const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '20a86ad28b0249afe0c3b05435a2e268',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;