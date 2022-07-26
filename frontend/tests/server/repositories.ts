import { describe, it } from "mocha";
import assert from "assert";
import { ShortUrlRepo } from '../../src/server/repositroy'
import { Shorter } from '../../src/server/lib'

describe("ShortUrlRepo", function () {
  it("create and findUnique and delete", async function () {
    const repo = new ShortUrlRepo();
    const long_url = "http://www.baidu.com";
    const create = await repo.create({
      long_url: "http://www.baidu.com",
    });

    const instance1 = await repo.findUnique({ id: create.id });
    assert.equal(instance1?.long_url, long_url);

    const instance2 = await repo.findUnique({ id: 0 });
    assert.equal(instance2, null);
  });
});