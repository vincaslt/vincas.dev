module.exports = {
  apps: [
    {
      name: 'vincas.dev',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'dist',
        PM2_SERVE_PORT: 8081,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: 'public/index.html',
      },
    },
  ],
};
