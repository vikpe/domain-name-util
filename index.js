export const regExps = {
  strictlyAlphabetic: /^[a-ö]+$/gi,
  partlyAlphabetic: /[a-ö]+/gi,
  strictlyNumeric: /^\d+$/g,
  partlyNumeric: /\d+/g
};

export const containsAlphabetics = domainName => matchesRegExp(domainName,
  regExps.partlyAlphabetic);
export const containsNumerics = domainName => matchesRegExp(domainName,
  regExps.partlyNumeric);
export const getDomains = domainName => domainName.split(".");
export const getLength = domainName => getBaseLevelDomain(domainName).
  replace(".", "").length;
export const isAlphabetic = domainName => matchesRegExp(domainName,
  regExps.strictlyAlphabetic);
export const isHyphenated = domainName => domainName.includes("-");
export const isNumeric = domainName => matchesRegExp(domainName,
  regExps.strictlyNumeric);
export const isSubdomain = domainName => getDomains(domainName).length > 2;

export const matchesRegExp = (domainName, regexp) => {
  const baseLevelDomainStr = getBaseLevelDomain(domainName).replace(".", "");
  return null !== baseLevelDomainStr.match(regexp);
};

export const getBaseLevelDomain = domainName => {
  const domains = getDomains(domainName);
  return domains.slice(0, domains.length - 1).join(".");
};

export const getTopLevelDomain = domainName => {
  const domains = getDomains(domainName);
  return domains[domains.length - 1];
};

const module = {
  containsAlphabetics,
  containsNumerics,
  getBaseLevelDomain,
  getDomains,
  getLength,
  getTopLevelDomain,
  isAlphabetic,
  isHyphenated,
  isNumeric,
  isSubdomain,
  matchesRegExp
};

export default module;
