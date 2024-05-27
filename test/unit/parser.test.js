import { expect } from 'chai';
import { extractUrls } from '../../src/utils/utils.js';

describe('URL Parser', () => {
  it('should correctly extract the last URL within square brackets', async () => {
    const data = '[https://first.com https://second.com]';
    const urls = await extractUrls(data, new Set(), []);
    expect(urls).to.include('https://second.com');
    expect(urls).to.not.include('https://first.com');
  });

  it('should ignore URLs not within square brackets', async () => {
    const data = 'https://first.com [https://second.com]';
    const urls = await extractUrls(data, new Set(), []);
    expect(urls).to.include('https://second.com');
    expect(urls).to.not.include('https://first.com');
  });

  it('should handle escaped brackets', async () => {
    const data = '\\[https://first.com] [https://second.com]';
    const urls = await extractUrls(data, new Set(), []);
    expect(urls).to.include('https://second.com');
    expect(urls).to.not.include('https://first.com');
  });

  it('should handle nested brackets', async () => {
    const data = '[https://first.com [https://second.com]]';
    const urls = await extractUrls(data, new Set(), []);
    expect(urls).to.include('https://second.com');
    expect(urls).to.not.include('https://first.com');
  });
  it('should handle deeply nested brackets', async () => {
    const data = '[https://first.com [[[[[[https://second.com]]]]]]]';
    const urls = await extractUrls(data, new Set(), []);
    expect(urls).to.include('https://second.com');
    expect(urls).to.not.include('https://first.com');
  });
  it('should handle multiple brackets', async () => {
    const data = '[https://first.com https://second.com] [https://third.com https://fourth.com]';
    const urls = await extractUrls(data, new Set(), []);
    expect(urls).to.include('https://second.com');
    expect(urls).to.include('https://fourth.com');
    expect(urls).to.not.include('https://first.com');
    expect(urls).to.not.include('https://third.com');
  });
});
