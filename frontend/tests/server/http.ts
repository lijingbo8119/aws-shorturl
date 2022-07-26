import { describe, it } from "mocha";
import assert from "assert";
import axios from 'axios'
import { ShortUrl } from '../../src/models/shortUrl';
import { ResponseData } from '../../src/models/http';

describe("Http", function () {
  describe("Client Request", function () {
    it("create and get shorter", async function () {
      const url = `http://localhost:3000/api/shorturls`;
      const res1 = await axios.post<ResponseData<ShortUrl>>(
        `${url}`,
        { long_url: url },
        { headers: { 'content-type': 'application/json' } },
      )
      const res2 = await axios.get<ResponseData<ShortUrl>>(
        `${url}/${res1.data.payload?.short_path}`,
        { headers: { 'content-type': 'application/json' } },
      )
      assert.equal(res1.data.payload?.short_path, res2.data.payload?.short_path);
    });
  });
});
