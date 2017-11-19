# Domain Name Utils
> Domain name utility functions

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
