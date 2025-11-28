export default {
  async fetch(req, env, ctx) {
    return env.ASSETS.fetch(req);
  }
};
