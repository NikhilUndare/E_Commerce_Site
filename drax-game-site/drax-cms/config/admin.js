module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0127b9f4334c29b794e0d3bf730fa1c4'),
  },
});
