module.exports = () => {
  const config = {
    async exportPathMap() {
      return {
        '/index': { page: '/index' },
        '/': { page: '/' }
      }
    },
  }

  return config
}
