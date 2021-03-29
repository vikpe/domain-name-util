/**
 * @jest-environment node
 */

import domainNameUtil from "./index";

describe("domain name util", () => {
  test("containsAlphabetics()()", () => {
    expect(domainNameUtil.containsAlphabetics("abc.se")).toBe(true);
    expect(domainNameUtil.containsAlphabetics("abc.def.se")).toBe(true);
    expect(domainNameUtil.containsAlphabetics("abc.åäö.se")).toBe(true);
    expect(domainNameUtil.containsAlphabetics("abc123.se")).toBe(true);
    expect(domainNameUtil.containsAlphabetics("abc.123.se")).toBe(true);
    expect(domainNameUtil.containsAlphabetics("123.se")).toBe(false);
  });

  test("containsNumerics()()", () => {
    expect(domainNameUtil.containsNumerics("abc.se")).toBe(false);
    expect(domainNameUtil.containsNumerics("abc.def.se")).toBe(false);
    expect(domainNameUtil.containsNumerics("abc.åäö.se")).toBe(false);
    expect(domainNameUtil.containsNumerics("abc123.se")).toBe(true);
    expect(domainNameUtil.containsNumerics("abc.123.se")).toBe(true);
    expect(domainNameUtil.containsNumerics("123.se")).toBe(true);
  });

  test("getBaseLevelDomain()()", () => {
    expect(domainNameUtil.getBaseLevelDomain("foo.bar.se")).toBe("foo.bar");
    expect(domainNameUtil.getBaseLevelDomain("foo.se")).toBe("foo");
  });

  test("getDomains()", () => {
    expect(domainNameUtil.getDomains("se")).toEqual(["se"]);
    expect(domainNameUtil.getDomains("foo.se")).toEqual(["foo", "se"]);
    expect(domainNameUtil.getDomains("foo.bar.se")).toEqual([
      "foo",
      "bar",
      "se",
    ]);
  });

  test("getLength()", () => {
    expect(domainNameUtil.getLength("foo.bar.se")).toBe(6);
    expect(domainNameUtil.getLength("foo.se")).toBe(3);
  });

  test("getTopLevelDomain()", () => {
    expect(domainNameUtil.getTopLevelDomain("foo.bar.se")).toBe("se");
    expect(domainNameUtil.getTopLevelDomain("foo.se")).toBe("se");
  });

  test("isAlphabetic()", () => {
    expect(domainNameUtil.isAlphabetic("abc.se")).toBe(true);
    expect(domainNameUtil.isAlphabetic("abc.def.se")).toBe(true);
    expect(domainNameUtil.isAlphabetic("abc.åäö.se")).toBe(true);
    expect(domainNameUtil.isAlphabetic("abc123.se")).toBe(false);
    expect(domainNameUtil.isAlphabetic("abc.123.se")).toBe(false);
  });

  test("isHyphenated()", () => {
    expect(domainNameUtil.isHyphenated("foo-bar.se")).toBe(true);
    expect(domainNameUtil.isHyphenated("foo.se")).toBe(false);
  });

  test("isNumeric()", () => {
    expect(domainNameUtil.isNumeric("123.se")).toBe(true);
    expect(domainNameUtil.isNumeric("123.456.se")).toBe(true);
    expect(domainNameUtil.isNumeric("abc123.se")).toBe(false);
    expect(domainNameUtil.isNumeric("abc.123.se")).toBe(false);
  });

  test("isSubdomain()", () => {
    expect(domainNameUtil.isSubdomain("foo.bar.se")).toBe(true);
    expect(domainNameUtil.isSubdomain("foo.se")).toBe(false);
  });

  test("matchesRegExp()", () => {
    expect(domainNameUtil.matchesRegExp("foo.bar.se", /bar/)).toBe(true);
    expect(domainNameUtil.matchesRegExp("foo.se", /bar/)).toBe(false);
  });
});
