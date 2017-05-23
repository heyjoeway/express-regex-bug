# Express Regex Bug

This repository is meant to demonstrate a bug with regex matching in Express` routing.

## Symptoms

Exactly half of the time a URL is visited that matches the regex, it will route properly. The other half of the time, it will simply not resolve. The first time one of these URLs is visited, the URL will route properly. The second time, it will not. The pattern then repeats.

## Demonstration

```
    node index.js
```

The server runs on port 3000 by default, and will print some example URLs in console.

## Regex

The regex tested is as follows:

```
    /\/test\/[a-f0-9]{24}/g
```

## Testing Configuration

- Windows 10 v1703 Build 15063.296
- NodeJS v7.10.0
- Express v4.15.3
