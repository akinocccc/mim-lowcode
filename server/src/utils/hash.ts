const crypto = require('crypto');

export default (source: string) => {
  return crypto.createHash('sha256').update(source).digest('base64');
};
