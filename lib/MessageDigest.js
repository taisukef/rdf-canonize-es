/*
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */

//const crypto = require('crypto');

class MessageDigest {
  /**
   * Creates a new MessageDigest.
   *
   * @param algorithm the algorithm to use.
   */
  constructor(algorithm) {
    this.md = crypto.createHash(algorithm);
  }

  update(msg) {
    this.md.update(msg, 'utf8');
  }

  digest() {
    return this.md.digest('hex');
  }
};

export { MessageDigest };
