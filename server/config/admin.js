module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c5e0c814081505f3c3625bd8311ca8e6'),
  },
});
