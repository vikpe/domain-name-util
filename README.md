# Domain Name Utils [![Build Status](https://travis-ci.org/vikpe/domain-name-util.svg?branch=master)](https://travis-ci.org/vikpe/domain-name-util)
> Domain name utility functions for node.

## Installation
```bash
npm install domain-name-util
```

## Usage
```javascript
import domainNameUtil from 'domain-name-util';

domainNameUtil.getTopLevelDomain('foo.se'); // se
domainNameUtil.getBaseLevelDomain('foo.se'); // foo
domainNameUtil.getLength('foo.se'); // 3
//...
```

## API

* `containsAlphabetics(domainName)`
* `containsNumerics(domainName)`
* `getBaseLevelDomain(domainName)`
* `getDomains(domainName)`
* `getLength(domainName)`
* `getTopLevelDomain(domainName)`
* `isAlphabetic(domainName)`
* `isHyphenated(domainName)`
* `isNumeric(domainName)`
* `isSubdomain(domainName)`
* `matchesRegExp(domainName, regExp)`
