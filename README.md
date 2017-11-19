# Domain Name Utils [![Build Status](https://travis-ci.org/vikpe/domain-name-util.svg?branch=master)](https://travis-ci.org/vikpe/domain-name-util)
> Domain name utility functions for Node.

## Installation
```bash
npm install domain-name-util
```

## Usage
```javascript
import domainNameUtil from 'domain-name-util';

domainNameUtil.containsAlphabetics('foo.com');  // true
domainNameUtil.containsNumerics('foo.com');     // false
domainNameUtil.getBaseLevelDomain('foo.com');   // 'foo'
domainNameUtil.getDomains('foo.com');           // ['foo', 'com']
domainNameUtil.getLength('foo.com');            // 3
domainNameUtil.getTopLevelDomain('foo.com');    // 'com' 
domainNameUtil.isAlphabetic('foo.com');         // true 
domainNameUtil.isHyphenated('foo.com');         // false 
domainNameUtil.isNumeric('foo.com');            // false 
domainNameUtil.isSubdomain('foo.com');          // false 
domainNameUtil.matchesRegExp('foo.com', /foo/); // true 
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
