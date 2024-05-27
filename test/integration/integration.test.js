import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import nock from 'nock';
import { exec } from 'child_process';
import dotenv from 'dotenv';
import { EXAMPLE_BODY, REALMAN78_BODY } from './helper/replySolutions.js';
import { EXAMPLE_URL, R78_URL } from './helper/urls.js';

dotenv.config();

describe('Integration Test Suite', function() {
  this.timeout(10000);

  before(() => {
    nock(R78_URL)
      .get('/')
      .reply(200, REALMAN78_BODY);
    
    nock(EXAMPLE_URL)
      .get('/')
      .reply(200, EXAMPLE_BODY);
  });

  it('should process the URLs from the input file correctly', (done) => {
    const scriptPath = path.resolve('./src/index.js');
    const inputFilePath = path.resolve('./testfile.txt');
    
    // Temp test file
    fs.writeFileSync(inputFilePath, `[marin ${R78_URL}] some text [${EXAMPLE_URL}]`);

    exec(`node ${scriptPath} ${inputFilePath}`, (error, stdout, stderr) => {
      if (error) {
        return done(error);
      }
      const outputLines = stdout.trim().split('\n');
      let startIndex = outputLines.indexOf("######################################");
      const targetedLines = outputLines.slice(startIndex+1, startIndex+3)
      const results = targetedLines.map(line => JSON.parse(line));
      
      expect(results).to.have.lengthOf(2);

      // Realman78.github.io result
      expect(results[0].url).to.equal(R78_URL);
      expect(results[0].title).to.equal('Resume - Marin Dedic');
      expect(results[0]).to.have.property('email');
      expect(results[0].email).to.be.a('string');

      // Example.com result
      expect(results[1].url).to.equal(EXAMPLE_URL);
      expect(results[1].title).to.equal('Example Domain');
      expect(results[1]).to.not.have.property('email');
      
      // Clean up the test file
      fs.unlinkSync(inputFilePath);
      done();
    });
  });
});
